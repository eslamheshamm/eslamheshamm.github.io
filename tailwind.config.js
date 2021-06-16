module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	mode: "jit",
	theme: {
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
