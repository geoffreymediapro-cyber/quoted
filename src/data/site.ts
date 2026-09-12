/**
 * Contenu editorial centralise du site.
 * Aucun tarif ni offre packagee n'est publie : le chiffrage se fait au devis.
 */

export const SITE_NAME = 'Quoted';
export const SITE_URL = 'https://quoted.fr';
export const SITE_TAGLINE = 'Agence GEO — Generative Engine Optimization';

/** TODO : creer la boite (aucun MX sur la zone quoted.fr pour l'instant). */
export const CONTACT_EMAIL = 'contact@quoted.fr';

/* -------------------------------------------------------------------------
   Ce qu'on fait — capacites, sans packaging commercial ni prix
   ------------------------------------------------------------------------- */

export interface Service {
	id: string;
	name: string;
	kicker: string;
	description: string;
	features: string[];
}

export const SERVICES: Service[] = [
	{
		id: 'cartographie',
		name: 'Cartographie de prompts',
		kicker: 'Point de départ',
		description:
			"On reconstruit les questions que vos clients posent réellement à une IA, par intention, puis on relève ce que les moteurs répondent aujourd'hui.",
		features: [
			'Personas et intentions de recherche',
			'Panel de prompts stable et rejouable',
			'Tests sur ChatGPT, Perplexity, Gemini et Claude',
		],
	},
	{
		id: 'visibilite',
		name: 'Audit de visibilité',
		kicker: 'État des lieux',
		description:
			'Qui est cité sur vos sujets, à quelle fréquence, et par quel type de source. Votre position réelle face à vos concurrents, prompt par prompt.',
		features: [
			'Cartographie des sources citées',
			'Benchmark concurrentiel sur les mêmes prompts',
			'Composition des sources par typologie',
		],
	},
	{
		id: 'contenu',
		name: 'Contenu conçu pour être cité',
		kicker: 'Production',
		description:
			"Des pages dont un moteur peut extraire une réponse autonome : formulation en tête, structure explicite, affirmations sourçables et vérifiables.",
		features: [
			'Réponse en tête, phrases autonomes',
			'Structure découpable et intertitres interrogatifs',
			'Sourcing et signaux E-E-A-T',
		],
	},
	{
		id: 'maillage',
		name: 'Maillage et cocon sémantique',
		kicker: 'Consolidation',
		description:
			'Rattacher vos pages entre elles pour qu\'un moteur traite votre expertise comme un ensemble cohérent, pas comme des documents isolés.',
		features: [
			'Ancres descriptives et pertinentes',
			'Hub par pilier thématique',
			'Ajusté à chaque publication',
		],
	},
	{
		id: 'technique',
		name: 'Données structurées',
		kicker: 'Socle technique',
		description:
			'Lever les ambiguïtés sur ce que vous êtes : quelle entité, quel auteur, quelle réponse à quelle question. La cohérence prime sur l\'exhaustivité du balisage.',
		features: [
			'Organization, Person, Product',
			'FAQPage, HowTo, Article',
			'Cohérence balisage / texte visible',
		],
	},
	{
		id: 'hors-site',
		name: 'Présence hors site',
		kicker: 'Le point qui débloque',
		description:
			'Votre site n\'est qu\'une source parmi celles que le moteur consulte. Ce qui se dit ailleurs pèse souvent davantage — et c\'est là que se gagnent les citations.',
		features: [
			'Médias réellement cités dans votre secteur',
			'Présence organique sur Reddit',
			'Wikipédia et Wikidata, via partenaire spécialisé',
		],
	},
];

/* -------------------------------------------------------------------------
   Clients accompagnes — profils anonymises
   ------------------------------------------------------------------------- */

export interface Client {
	sector: string;
	profile: string;
	context: string;
	work: string;
}

/**
 * ⚠️ CONTENU DE STRUCTURE — a remplacer par les profils reels.
 * Tant que PLACEHOLDER_CLIENTS vaut true, un bandeau d'avertissement
 * s'affiche au-dessus de la section pour qu'aucune de ces lignes ne soit
 * lue comme une reference reelle.
 */
export const PLACEHOLDER_CLIENTS = true;

export const CLIENTS: Client[] = [
	{
		sector: 'Secteur à renseigner',
		profile: 'Taille / typologie',
		context: 'La situation de départ : ce que les moteurs répondaient, ou ne répondaient pas.',
		work: 'Ce qui a été mis en place.',
	},
	{
		sector: 'Secteur à renseigner',
		profile: 'Taille / typologie',
		context: 'La situation de départ.',
		work: 'Ce qui a été mis en place.',
	},
	{
		sector: 'Secteur à renseigner',
		profile: 'Taille / typologie',
		context: 'La situation de départ.',
		work: 'Ce qui a été mis en place.',
	},
	{
		sector: 'Secteur à renseigner',
		profile: 'Taille / typologie',
		context: 'La situation de départ.',
		work: 'Ce qui a été mis en place.',
	},
];

/* -------------------------------------------------------------------------
   Methode
   ------------------------------------------------------------------------- */

export const METHOD: { step: string; title: string; body: string }[] = [
	{
		step: '01',
		title: 'Cartographier',
		body: "On identifie les personas et les prompts qui comptent réellement dans votre marché, puis on relève ce que ChatGPT, Perplexity, Gemini et Claude répondent aujourd'hui — et qui ils citent.",
	},
	{
		step: '02',
		title: 'Prioriser',
		body: 'Chaque écart constaté devient une action, classée dans une matrice impact/effort. Vous savez ce qui se joue en premier, ce qui attend, et ce que ça coûte.',
	},
	{
		step: '03',
		title: 'Produire',
		body: "On crée et on optimise les contenus pour qu'ils soient extractibles : réponse en tête, structure explicite, sources vérifiables, données structurées cohérentes.",
	},
	{
		step: '04',
		title: 'Faire citer',
		body: 'Le maillage interne consolide le sujet côté site. Hors du site, on travaille les sources que les moteurs reprennent réellement — médias, Reddit, référentiels.',
	},
	{
		step: '05',
		title: 'Mesurer',
		body: 'On rejoue les mêmes prompts, mois après mois, sur les mêmes moteurs. Le reporting montre ce qui a bougé, sur quelles requêtes, et face à quels concurrents.',
	},
];

/* -------------------------------------------------------------------------
   Perimetre
   ------------------------------------------------------------------------- */

export const SCOPE_IN: string[] = [
	'Exploration sémantique et cartographie des prompts',
	'Audit de visibilité et benchmark concurrentiel',
	'Contenus conçus pour être repris et cités',
	'Maillage interne et cocon sémantique',
	'Données structurées et signaux E-E-A-T',
	'Présence organique sur Reddit',
	'Suivi de visibilité et reporting',
];

export const SCOPE_OUT: { label: string; detail: string }[] = [
	{
		label: 'Audit de crawlabilité complet',
		detail:
			'robots.txt, architecture technique lourde, refonte : cela reste du SEO classique, côté votre équipe ou votre agence. Nous pouvons le cadrer, jamais le faire passer pour du GEO.',
	},
	{
		label: 'Fabrication ou achat d’avis',
		detail:
			'Hors périmètre, sans exception. C’est une pratique interdite, et elle se retourne contre la marque qu’elle prétend servir.',
	},
	{
		label: 'Promesse de position',
		detail:
			'Personne ne contrôle une réponse générée. Nous nous engageons sur le travail et sur la mesure, pas sur un rang garanti dans une réponse d’IA.',
	},
];

/* -------------------------------------------------------------------------
   FAQ
   ------------------------------------------------------------------------- */

export const FAQ: { q: string; a: string }[] = [
	{
		q: 'Le GEO, c’est différent du SEO ?',
		a: "C'est un prolongement, pas un remplacement. Le SEO vise une position dans une liste de liens ; le GEO vise à être la source qu'un moteur de réponse reprend et cite quand il rédige. Les fondamentaux techniques restent utiles, mais les critères changent : extractibilité du passage, clarté de la réponse, qualité et vérifiabilité des sources, cohérence entre ce que dit votre site et ce que disent les autres à votre sujet.",
	},
	{
		q: 'Comment mesure-t-on la visibilité dans ChatGPT ou Perplexity ?',
		a: "En rejouant un jeu de prompts stable, défini au démarrage, sur les mêmes moteurs et à intervalles réguliers. On relève si votre marque apparaît, dans quel contexte, et quelles sources sont citées. Ce n'est pas un classement au sens du SEO : les réponses varient d'une exécution à l'autre. C'est pour cette raison qu'on travaille sur un panel de prompts et sur une tendance, pas sur une capture isolée.",
	},
	{
		q: 'Vous garantissez d’être cité ?',
		a: "Non, et méfiez-vous de qui le promet. Une réponse générée n'est pas un résultat de recherche : elle dépend du modèle, de sa version, du contexte de la question et des sources disponibles au moment de la génération. Ce sur quoi nous nous engageons : un diagnostic honnête, un plan priorisé, une production régulière et une mesure qui montre le mouvement réel.",
	},
	{
		q: 'Par où commence-t-on ?',
		a: "Par un état des lieux, dans la grande majorité des cas : sans relevé de ce que les moteurs répondent déjà, on produit à l'aveugle. Il se termine par une feuille de route priorisée, ce qui vous laisse libre de continuer avec nous ou d'exécuter en interne. Si vous voulez d'abord une lecture rapide avant d'engager un budget, une version allégée limitée à la cartographie des prompts remplit ce rôle.",
	},
	{
		q: 'Comment travaillez-vous ensuite ?',
		a: "En cycles mensuels, avec un volume de jours défini ensemble selon l'ambition et le rythme de publication visés. Le GEO se juge sur plusieurs cycles, pas sur trois semaines. L'engagement dans la durée n'est pas obligatoire, et le périmètre de chaque cycle est écrit avant de démarrer.",
	},
	{
		q: 'Combien ça coûte ?',
		a: "Le chiffrage dépend de votre marché, du volume de prompts à couvrir, de la production nécessaire et du niveau de sourcing exigé par votre secteur. Nous n'affichons pas de grille standard, parce qu'un devis honnête suppose de connaître ces éléments. Écrivez-nous en décrivant votre situation : vous recevrez une proposition chiffrée avec un périmètre écrit, sans engagement.",
	},
	{
		q: 'Vous vendez un outil ou un dashboard ?',
		a: "Non. Il n'y a pas d'outil propriétaire à vous facturer en licence : le suivi de visibilité est inclus dans les jours d'accompagnement, sous forme de reporting produit par nos soins. Vous ne payez pas un abonnement logiciel en plus des prestations, et en contrepartie il n'y a pas de dashboard temps réel.",
	},
	{
		q: 'Travaillez-vous en marque blanche pour des agences ?',
		a: "Oui. Les missions ponctuelles comme l'accompagnement récurrent peuvent être opérés pour le compte d'une agence, sous sa marque. Écrivez-nous en précisant le contexte et le volume envisagé pour obtenir les conditions partenaires.",
	},
];
