/**
 * Contenu editorial centralise du site.
 * Tout ce qui est susceptible de changer souvent (tarifs, libelles d'offre,
 * FAQ) vit ici plutot que dans les composants.
 */

export const SITE_NAME = 'Quoted';
export const SITE_URL = 'https://quoted.fr';
export const SITE_TAGLINE = 'Agence GEO — Generative Engine Optimization';

/** TODO : creer la boite (aucun MX sur la zone quoted.fr pour l'instant). */
export const CONTACT_EMAIL = 'contact@quoted.fr';

/* -------------------------------------------------------------------------
   Missions one-shot
   ------------------------------------------------------------------------- */

export interface Offer {
	id: string;
	name: string;
	kicker: string;
	price: string;
	priceNote?: string;
	description: string;
	features: string[];
	deliverable?: string;
	featured?: boolean;
}

export const OFFERS: Offer[] = [
	{
		id: 'radar',
		name: 'Radar',
		kicker: 'Audit GEO complet',
		price: '1 500 €',
		description:
			"L'état des lieux complet de votre visibilité dans les moteurs de réponse. Trois volets : exploration sémantique, audit de visibilité, audit technique léger.",
		features: [
			'Personas et prompts représentatifs par intention',
			'Tests sur ChatGPT, Perplexity, Gemini et Claude',
			'Cartographie des sources citées et benchmark concurrentiel',
			'Données structurées, arborescence, signaux E-E-A-T',
		],
		deliverable:
			'Rapport de diagnostic + roadmap priorisée (matrice impact/effort) et palier d’accompagnement recommandé.',
		featured: true,
	},
	{
		id: 'exploration',
		name: 'Exploration sémantique',
		kicker: 'État des lieux rapide',
		price: '500 € / jour',
		priceNote: 'généralement 1 jour',
		description:
			'La version allégée du Radar, sans volet technique ni roadmap complète : la cartographie des prompts et de votre visibilité actuelle, rien de plus.',
		features: [
			'Prompts représentatifs de votre marché',
			'Relevé des réponses et des sources citées',
			'Position de votre marque face aux concurrents',
		],
		deliverable: 'Synthèse de cadrage, sans engagement.',
	},
	{
		id: 'sprint',
		name: 'Sprint contenu',
		kicker: 'Production one-shot',
		price: 'Sur devis',
		priceNote: 'base 500 € / jour',
		description:
			"Un lot de contenus pensés pour être repris par les moteurs d'IA, sans engagement récurrent. Le socle avant de décider d'un accompagnement mensuel.",
		features: [
			'Lot de 5 à 10 pièces selon le brief',
			'Rédaction orientée extractibilité et sourcing',
			'Intégration des signaux E-E-A-T',
		],
		deliverable: 'Contenus livrés prêts à publier.',
	},
	{
		id: 'wikipedia',
		name: 'Wikipédia & Wikidata',
		kicker: 'Via partenaire spécialisé',
		price: 'Sur devis',
		description:
			"Deux sources massivement reprises par les moteurs d'IA. Nous ne produisons pas cette expertise en interne : la mission est confiée à un partenaire spécialisé, et nous en assurons le pilotage.",
		features: [
			'Mission réalisée par un partenaire dédié',
			'Pilotage et intégration à votre stratégie GEO',
			'Vendable en complément de n’importe quelle mission',
		],
	},
];

/* -------------------------------------------------------------------------
   Paliers d'accompagnement recurrent
   ------------------------------------------------------------------------- */

export interface Tier {
	id: string;
	name: string;
	days: string;
	pitch: string;
	priceStandard: string;
	priceCommitted: string;
	featured?: boolean;
}

export const TIERS: Tier[] = [
	{
		id: 'signal',
		name: 'Signal',
		days: '1 jour / mois',
		pitch: 'Entretenir une présence et tenir le rythme sur les pages qui comptent.',
		priceStandard: '500 €',
		priceCommitted: '400 €',
	},
	{
		id: 'voice',
		name: 'Voice',
		days: '2 jours / mois',
		pitch: 'Installer la marque comme source récurrente, y compris hors de votre site.',
		priceStandard: '1 000 €',
		priceCommitted: '800 €',
		featured: true,
	},
	{
		id: 'authority',
		name: 'Authority',
		days: '3 jours / mois',
		pitch: 'Un run continu : production, maillage, veille et réaction rapide.',
		priceStandard: '1 500 €',
		priceCommitted: '1 200 €',
	},
];

/** Tableau comparatif des leviers par palier. */
export const LEVERS: { lever: string; signal: string; voice: string; authority: string }[] = [
	{
		lever: 'Contenu GEO',
		signal: '2 à 3 contenus créés ou optimisés',
		voice: '4 à 6 contenus',
		authority: '6 à 10 contenus + itération sur l’existant',
	},
	{
		lever: 'Maillage interne',
		signal: 'Pages prioritaires (5 à 10)',
		voice: 'Cocon sémantique étendu (15 à 20 pages)',
		authority: 'Continu, ajusté à chaque publication',
	},
	{
		lever: 'SEO technique GEO',
		signal: 'Actions ponctuelles (FAQ schema, sourcing)',
		voice: 'Traitement systématique',
		authority: 'Continu + veille',
	},
	{
		lever: 'Reddit',
		signal: '—',
		voice: 'Présence organique sur les subreddits pertinents',
		authority: 'Surveillance active et réponse rapide sur les threads',
	},
	{
		lever: 'Suivi de visibilité',
		signal: 'Reporting mensuel simple',
		voice: 'Reporting mensuel détaillé',
		authority: 'Reporting + alertes en continu',
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
		body: "Chaque écart constaté devient une action, classée dans une matrice impact/effort. Vous savez ce qui se joue en premier, ce qui attend, et ce que ça coûte.",
	},
	{
		step: '03',
		title: 'Produire',
		body: "On crée et on optimise les contenus pour qu'ils soient extractibles : réponse en tête, structure explicite, sources vérifiables, données structurées cohérentes.",
	},
	{
		step: '04',
		title: 'Faire citer',
		body: "Le maillage interne consolide le sujet côté site. Hors du site, on travaille les sources que les moteurs reprennent réellement — médias, Reddit, référentiels.",
	},
	{
		step: '05',
		title: 'Mesurer',
		body: "On rejoue les mêmes prompts, mois après mois, sur les mêmes moteurs. Le reporting montre ce qui a bougé, sur quelles requêtes, et face à quels concurrents.",
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
			'robots.txt, architecture technique lourde, refonte : cela reste du SEO classique, côté votre équipe ou votre agence. Nous pouvons le cadrer en upsell, jamais le faire passer pour du GEO.',
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
		a: "En rejouant un jeu de prompts stable, défini pendant le Radar, sur les mêmes moteurs et à intervalles réguliers. On relève si votre marque apparaît, dans quel contexte, et quelles sources sont citées. Ce n'est pas un classement au sens du SEO : les réponses varient d'une exécution à l'autre. C'est pour cette raison qu'on travaille sur un panel de prompts et sur une tendance, pas sur une capture isolée.",
	},
	{
		q: 'Vous garantissez d’être cité ?',
		a: "Non, et méfiez-vous de qui le promet. Une réponse générée n'est pas un résultat de recherche : elle dépend du modèle, de sa version, du contexte de la question et des sources disponibles au moment de la génération. Ce sur quoi nous nous engageons : un diagnostic honnête, un plan priorisé, une production régulière et une mesure qui montre le mouvement réel.",
	},
	{
		q: 'Par où commencer ?',
		a: "Par le Radar dans la grande majorité des cas : sans état des lieux, on produit à l'aveugle. Il se termine par une roadmap priorisée et par le palier d'accompagnement recommandé, ce qui vous laisse libre de continuer avec nous ou d'exécuter en interne. Si vous voulez d'abord une lecture rapide avant d'engager 1 500 €, l'exploration sémantique seule remplit ce rôle.",
	},
	{
		q: 'Faut-il s’engager sur la durée ?',
		a: "Non. Les trois paliers sont disponibles sans engagement. Un engagement de 2 à 3 mois donne un tarif réduit, simplement parce qu'il permet de planifier la production et parce que le GEO se juge sur plusieurs cycles de publication, pas sur trois semaines.",
	},
	{
		q: 'Vous vendez un outil ou un dashboard ?',
		a: "Non. Il n'y a pas d'outil propriétaire à vous facturer en licence : le suivi de visibilité est inclus dans les jours d'accompagnement, sous forme de reporting produit par nos soins. Vous ne payez pas un abonnement logiciel en plus des prestations, et en contrepartie il n'y a pas de dashboard temps réel.",
	},
	{
		q: 'Travaillez-vous en marque blanche pour des agences ?',
		a: "Oui. Les missions one-shot comme les paliers récurrents peuvent être opérés pour le compte d'une agence, sous sa marque. Écrivez-nous en précisant le contexte et le volume envisagé pour obtenir les conditions partenaires.",
	},
];
