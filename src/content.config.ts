import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guide = defineCollection({
  // Le motif ignore les fichiers prefixes d'un souligne : `_modele.md`
  // reste a cote des articles sans jamais etre publie.
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/guide" }),
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
 * Pages metier : /metiers/<slug>/
 * Une page par profession. Le gabarit impose les blocs qui font la valeur
 * de la page, pour qu'aucune ne se resume a un remplissage : les questions
 * reellement posees, les familles de sources que les moteurs privilegient
 * dans ce secteur, et ce qu'il y a a faire.
 */
/**
 * Schema commun aux fiches metier et secteur : meme structure editoriale,
 * seul le terrain change. Les minimums sont volontaires, ils empechent de
 * construire une page creuse.
 */
const ficheSchema = z.object({
  /** Nom de la profession ou du secteur, au singulier. */
  nom: z.string(),
  /** Formulation au pluriel pour les tournures « les X ». */
  pluriel: z.string(),
  /** Titre de la balise <title> : long, porteur des mots-cles. */
  title: z.string(),
  /** H1 affiche : court. Le title complet tient mal sur trois lignes
	    en capitales, et la promesse est deja portee par le chapeau. */
  h1: z.string(),
  description: z.string(),
  /** Une phrase qui situe le marche, affichee en chapeau. */
  intro: z.string(),
  /** Les questions que posent les clients avant d'acheter. 4 a 6. */
  prompts: z.array(z.string()).min(4).max(6),
  /** Familles de sources que les moteurs reprennent dans ce secteur. */
  sources: z.array(z.object({ nom: z.string(), pourquoi: z.string() })).min(3),
  /** Ce qui coince specifiquement dans ce metier. */
  freins: z.array(z.string()).min(2),
  faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
  updated: z.coerce.date(),
  draft: z.boolean().default(false),
});

// Meme convention que le guide : `_modele.md` ne sort jamais.
const metiers = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/metiers" }),
  schema: ficheSchema,
});

const secteurs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/secteurs" }),
  schema: ficheSchema,
});

export const collections = { guide, metiers, secteurs };
