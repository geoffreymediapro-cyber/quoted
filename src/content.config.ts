import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guide = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** Titre court utilise dans les listes et le fil d'ariane. */
		shortTitle: z.string().optional(),
		chapter: z.string(),
		order: z.number(),
		updated: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

/**
 * Blog : flux chronologique, a la difference du guide qui est ordonne par
 * chapitre. Le motif ignore les fichiers prefixes d'un souligne, ce qui
 * permet de garder `_modele.md` a cote des articles sans le publier.
 *
 * ⚠️ Tant qu'aucun article n'est publie, le build repete « The collection
 * "blog" does not exist or is empty ». C'est attendu : le menu et le pied
 * de page interrogent la collection sur chaque page pour savoir s'il faut
 * afficher l'entree Blog. L'avertissement disparait au premier article.
 *
 * ⚠️ Supprimer un article ne suffit pas a le retirer du build : la couche
 * contenu le garde dans `node_modules/.astro/data-store.json`. Vider
 * `.astro` et `dist` ne change rien, c'est bien ce fichier qu'il faut
 * effacer.
 */
const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		/** Date de publication : sert au tri, au flux et a l'affichage. */
		date: z.coerce.date(),
		/** A renseigner seulement en cas de mise a jour reelle du contenu. */
		updated: z.coerce.date().optional(),
		/** Rubrique libre, affichee en surtitre. */
		tag: z.string().default('Article'),
		draft: z.boolean().default(false),
	}),
});

export const collections = { guide, blog };
