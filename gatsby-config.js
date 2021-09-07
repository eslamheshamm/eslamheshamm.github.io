module.exports = {
	pathPrefix: "/",
	siteMetadata: {
		title: "Eslam Hesham",
		titleTemplate: "%s · Front End Developer",
		description:
			"Innovative Front-End developer with +1year experience of building and maintaining responsive websites in different industries. Proficient in HTML, CSS, JavaScript, plus modern libraries <React /> and frameworks such as Next.js, Gatsby.js",
		url: "https://eslamhesham.github.io", // No trailing slash allowed!
		image: "./src/images/eslamhesham.jpg", // Path to your image you placed in the 'static' folder
		twitterUsername: "@_eslamdev",
	},
	plugins: [
		"gatsby-plugin-postcss",
		`gatsby-plugin-dark-mode`,
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
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
