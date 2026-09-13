// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://quoted.fr',

	integrations: [
		sitemap({
			// Pages legales : noindex tant qu'elles ne sont pas completees.
			// /v2/ : page de comparaison, jamais indexee.
			filter: (page) =>
				!page.includes('/mentions-legales') &&
				!page.includes('/politique-de-confidentialite') &&
				!page.includes('/v2'),
		}),
	],

	build: {
		inlineStylesheets: 'auto',
	},

	compressHTML: true,
});
