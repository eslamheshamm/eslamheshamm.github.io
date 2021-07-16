module.exports = {
	pathPrefix: "/",
	siteMetadata: {
		title: "Eslam Hesham",
		description: `Innovative Front-End developer with +1year experience building and maintaining responsive websites in different industries. Proficient in HTML, CSS, JavaScript, plus modern libraries and frameworks such as React, Next.js, Gatsby.js`,
		author: `@eslamheshamm`,
		siteUrl: `https://eslamhesham.github.io`,
	},
	plugins: [
		"gatsby-plugin-postcss",
		`gatsby-plugin-dark-mode`,
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Eslam Hesham - Front End Developer`,
				short_name: `Eslam Hesham`,
				start_url: `/`,
				background_color: `#121212`,
				theme_color: `#242424`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`, // This path is relative to the root of the site.
			},
		},
	],
};
