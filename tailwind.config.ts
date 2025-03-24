/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-poppins)"],
			},
			colors: {
				white: "#FFFCF7",
				black: "#192025",
				main: "#29A8FD",
				highlight: "#29A8FD44",
			},
		},
	},
	plugins: [],
};
