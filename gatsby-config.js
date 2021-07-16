module.exports = {
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
	],
};
