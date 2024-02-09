import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config = {
	content: [
		'./src/**/*.{ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	prefix: '',
	theme: {},
	darkMode: ['class'],
	plugins: [
		require('tailwindcss-animate'),
		nextui({
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: '#1c1c1c',
						},
					},
				},
			},
		}),
	],
} satisfies Config;

export default config;
