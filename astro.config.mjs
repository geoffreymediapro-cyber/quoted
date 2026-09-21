// @ts-check
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Le blog n'entre au sitemap qu'a partir du premier article reellement
 * publie : une page de liste vide n'a rien a faire dans l'index, et son
 * index est en noindex tant qu'il n'y a rien. Les brouillons ne comptent
 * pas, sinon on annoncerait au sitemap une page en noindex.
 */
const DOSSIER_BLOG = './src/content/blog';
const blogVide =
	!existsSync(DOSSIER_BLOG) ||
	!readdirSync(DOSSIER_BLOG)
		.filter((nom) => nom.endsWith('.md') && !nom.startsWith('_'))
		.some((nom) => !/^draft:\s*true\s*$/m.test(readFileSync(`${DOSSIER_BLOG}/${nom}`, 'utf8')));

// https://astro.build/config
export default defineConfig({
	site: 'https://quoted.fr',

	integrations: [
		sitemap({
			// Pages legales : noindex tant qu'elles ne sont pas completees.
			filter: (page) =>
				!page.includes('/mentions-legales') &&
				!page.includes('/politique-de-confidentialite') &&
				!(blogVide && page.includes('/blog')),
		}),
	],

	build: {
		inlineStylesheets: 'auto',
	},

	compressHTML: true,
});
