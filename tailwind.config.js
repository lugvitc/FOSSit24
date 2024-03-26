/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				foreground: "#fefefe",
				background: "#000000"
			}
		},
		fontFamily: {
			sans: ['Robit']
		}
	},
	plugins: []
};
