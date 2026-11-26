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
    /**
     * Reponse directe a la question du titre, en deux a quatre phrases.
     * Rendue juste sous le chapeau, avant le sommaire, et declaree en
     * `abstract` dans les donnees structurees : c'est le passage qu'un
     * moteur de reponse reprend quand il n'en reprend qu'un seul.
     *
     * ⚠️ Reprise telle quelle en JSON-LD : elle doit se tenir seule,
     * sans lien, sans markdown et sans renvoi au reste de la page.
     */
    reponse: z.string().optional(),
    /**
     * Ce que la page ne promet pas : cas ou la methode ne s'applique pas,
     * incertitudes assumees, mesures qu'on ne sait pas faire. Rendu juste
     * avant la FAQ.
     *
     * C'est le bloc qu'un moteur reprend pour nuancer une reponse, et le
     * seul endroit du guide ou l'on ecrit ce qu'on ignore. Optionnel : une
     * page qui n'a pas de limite reelle n'en invente pas.
     */
    limites: z.array(z.string()).optional(),
    /**
     * Questions frequentes, rendues par le gabarit et declarees en JSON-LD
     * `FAQPage`. Optionnel : une FAQ ne se justifie que si les pages qui
     * occupent la requete en ont une, jamais comme remplissage.
     *
     * ⚠️ Les reponses sont reprises telles quelles dans les donnees
     * structurees : elles doivent se tenir seules, sans lien ni markdown.
     */
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
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
  /**
   * Liens contextuels vers des pages soeurs. Chaque entree porte une `note`
   * qui dit POURQUOI le lien existe : un lien sans justification editoriale
   * est un lien de remplissage, et ca se voit.
   */
  liens: z
    .array(
      z.object({
        href: z.string(),
        label: z.string(),
        note: z.string(),
      }),
    )
    .default([]),
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

/**
 * Pages ville. Meme structure que les fiches metier et secteur, plus deux
 * champs de langue.
 *
 * ⚠️ `dans` existe pour une raison precise : on dit « au Mans » et « au
 * Havre », pas « a Le Mans ». Les concurrents concatenent « a » + le nom et
 * publient la faute dans leur H1. La forme correcte est donc ecrite a la
 * main dans chaque fiche, jamais calculee.
 */
const villes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/villes" }),
  schema: ficheSchema.extend({
    /** Forme locative complete, articles contractes compris : « au Mans ». */
    dans: z.string(),
    /** Numero de departement, affiche a cote du nom. */
    departement: z.string(),
  }),
});

export const collections = { guide, metiers, secteurs, villes };
