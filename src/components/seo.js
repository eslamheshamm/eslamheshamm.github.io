import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
const SEO = ({ title, description }) => {
	const { pathname } = useLocation();
	const { site } = useStaticQuery(query);
	const {
		defaultTitle,
		titleTemplate,
		defaultDescription,
		siteUrl,
		twitterUsername,
	} = site.siteMetadata;
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `https://res.cloudinary.com/eslamhesham/image/upload/v1631100638/og-eslamhesham_vo0mkt.png`,
		url: `${siteUrl}${pathname}`,
	};
	console.clear();
	console.log(site.siteMetadata);
	console.log(seo);
	console.log(seo.image);
	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			{/* general tags */}
			<meta name="description" content={seo.description} />
			<meta
				name="image"
				content="https://res.cloudinary.com/eslamhesham/image/upload/v1631100638/og-eslamhesham_vo0mkt.png"
			/>

			{/* og tags */}
			{/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
			<meta property="og:type" content="website" />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}
			{seo.image && (
				<meta
					property="og:image"
					content="https://res.cloudinary.com/eslamhesham/image/upload/v1631100638/og-eslamhesham_vo0mkt.png"
				/>
			)}
			{/* twitter tags */}
			<meta name="twitter:card" content="summary_large_image" />
			{twitterUsername && (
				<meta name="twitter:creator" content={twitterUsername} />
			)}
			{seo.title && <meta name="twitter:title" content={seo.title} />}
			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}
			{seo.image && (
				<meta
					name="twitter:image"
					content={
						"https://res.cloudinary.com/eslamhesham/image/upload/v1631100638/og-eslamhesham_vo0mkt.png"
					}
				/>
			)}
		</Helmet>
	);
};
export default SEO;
SEO.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	article: PropTypes.bool,
};
SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
	article: false,
};

const query = graphql`
	query SEO {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: url
				twitterUsername
			}
		}
	}
`;
