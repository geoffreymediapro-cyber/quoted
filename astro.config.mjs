// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://quoted.fr',

	integrations: [
		sitemap({
			// Pages legales : noindex tant qu'elles ne sont pas completees.
			// /scan/ : noindex tant que FORM_KEY est vide, a reintegrer ensuite.
			filter: (page) =>
				!page.includes('/mentions-legales') &&
				!page.includes('/politique-de-confidentialite') &&
				!page.includes('/scan'),
		}),
	],

	build: {
		inlineStylesheets: 'auto',
	},

	compressHTML: true,
});
