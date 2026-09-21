import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guide = defineCollection({
	// Le motif ignore les fichiers prefixes d'un souligne : `_modele.md`
	// reste a cote des articles sans jamais etre publie.
	loader: glob({ pattern: '**/[^_]*.md', base: './src/content/guide' }),
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

export const collections = { guide };
