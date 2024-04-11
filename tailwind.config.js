/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				foreground: "#fefefe",
				background: "#000000",
				positive: "rgb(74 222 128)",
				negative: "rgb(239 68 68)"
			}
		},
		fontFamily: {
			sans: ['Robit']
		}
	},
	plugins: []
};
