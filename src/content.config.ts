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

export const collections = { guide };
