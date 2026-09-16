/**
 * Contenu editorial centralise du site.
 * Aucun tarif ni offre packagee n'est publie : le chiffrage se fait au devis.
 */

export const SITE_NAME = 'Quoted';
export const SITE_URL = 'https://quoted.fr';
export const SITE_TAGLINE = 'Agence GEO, Generative Engine Optimization';

/**
 * Boite de contact du site, affichee dans le footer, les mentions legales et
 * la politique de confidentialite. Elle sert aussi de repli au formulaire.
 * Redirection entrante active depuis le 16/09/2026 : MX Forward Email poses
 * sur la zone Hetzner (mx1/mx2.forwardemail.net) + TXT `forward-email`, les
 * messages retombent dans la boite personnelle. Aucun envoi sortant depuis
 * cette adresse : elle ne recoit, elle n'expedie pas.
 */
export const CONTACT_EMAIL = 'contact@quoted.fr';

/**
 * Cle d'acces Web3Forms. Le site etant statique (GitHub Pages), un service
 * tiers est necessaire pour recevoir les envois du formulaire.
 * A obtenir sur web3forms.com : on saisit une adresse de reception, la cle
 * arrive par mail. Aucun compte a creer, gratuit.
 *
 * Tant que cette constante est vide, le formulaire reste affiche mais bascule
 * sur un mailto pre-rempli vers CONTACT_EMAIL, qui est desormais relevee.
 * Une fois la cle posee : retirer le noindex de /scan (pages/scan.astro) et
 * l'exclusion de /scan du sitemap (astro.config.mjs).
 */
export const FORM_KEY = '20803be5-f4d1-4099-83d7-eb1b08b9eeb1';

/* -------------------------------------------------------------------------
   Ce qu'on fait : capacites, sans packaging commercial ni prix
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
			'Votre site n\'est qu\'une source parmi celles que le moteur consulte. Ce qui se dit ailleurs pèse souvent davantage, et c\'est là que se gagnent les citations.',
		features: [
			'Médias réellement cités dans votre secteur',
			'Présence organique sur Reddit',
			'Wikipédia et Wikidata, via partenaire spécialisé',
		],
	},
];

/* -------------------------------------------------------------------------
   Expertises : la grille facon astrak, GEO + tout ce qui existe reellement.
   ⚠️ A VALIDER : ne garder que ce qui est reellement vendu. `via` signale
   ce qui passe par un partenaire plutot que par nous.
   ------------------------------------------------------------------------- */

export interface Expertise {
	name: string;
	note: string;
	/** Cle de pictogramme, voir ICONS dans components/v2/Page.astro. */
	icon: string;
	core?: boolean;
	via?: string;
}

export const EXPERTISES: Expertise[] = [
	{
		name: 'Audit de visibilité IA',
		icon: 'radar',
		note: 'Le relevé de ce que les moteurs répondent déjà, et de qui ils citent.',
		core: true,
	},
	{
		name: 'Cartographie de prompts',
		icon: 'prompt',
		note: 'Les questions réelles de votre marché, par intention, en panel rejouable.',
		core: true,
	},
	{
		name: 'Contenu GEO',
		icon: 'doc',
		note: 'Des pages dont un moteur peut extraire une réponse autonome et sourcée.',
		core: true,
	},
	{
		name: 'Maillage et cocon sémantique',
		icon: 'nodes',
		note: 'Rattacher vos pages pour que le sujet soit traité comme un ensemble.',
		core: true,
	},
	{
		name: 'SEO technique',
		icon: 'gear',
		note: 'Indexation, structure, données structurées : le socle que les moteurs doivent pouvoir lire.',
	},
	{
		name: 'Rédaction SEO',
		icon: 'pen',
		note: 'Le contenu classique, pensé pour la recherche autant que pour la lecture.',
	},
	{
		name: 'Netlinking',
		icon: 'link',
		note: 'Liens éditoriaux pour l’autorité, et médias que les moteurs citent réellement.',
	},
	{
		name: 'Reddit et forums',
		icon: 'chat',
		note: 'Présence organique sur les espaces massivement repris par les moteurs.',
		core: true,
	},
	{
		name: 'Wikipédia et Wikidata',
		icon: 'book',
		note: 'Les référentiels d’entités que tous les moteurs consultent.',
		via: 'Partenaire',
	},
	{
		name: 'Suivi de visibilité',
		icon: 'chart',
		note: 'Le même panel rejoué chaque mois, avec un score et une part de voix.',
		core: true,
	},
];

/* -------------------------------------------------------------------------
   Stack : outils du metier (conserve pour la home en ligne)
   ⚠️ A CONFIRMER : ne laisser que les outils reellement utilises. Annoncer
   la maitrise d'un outil qu'on n'a pas est une fausse declaration.
   ------------------------------------------------------------------------- */

export interface Tool {
	code: string;
	name: string;
	use: string;
}

export const TOOLS: Tool[] = [
	{ code: 'GPT', name: 'ChatGPT', use: 'Relevés de réponses' },
	{ code: 'PPX', name: 'Perplexity', use: 'Réponses & sources' },
	{ code: 'GEM', name: 'Gemini', use: 'Relevés de réponses' },
	{ code: 'CLA', name: 'Claude', use: 'Relevés de réponses' },
	{ code: 'GSC', name: 'Search Console', use: 'Indexation & requêtes' },
	{ code: 'BWT', name: 'Bing Webmaster', use: 'Indexation Bing / Copilot' },
	{ code: 'SF', name: 'Screaming Frog', use: 'Crawl & extraction' },
	{ code: 'SEM', name: 'Semrush', use: 'Données de marché' },
	{ code: 'AH', name: 'Ahrefs', use: 'Autorité & médias' },
	{ code: 'SCH', name: 'Schema Validator', use: 'Données structurées' },
	{ code: 'IDX', name: 'IndexNow', use: 'Soumission d’URL' },
	{ code: 'LKR', name: 'Looker Studio', use: 'Reporting' },
];

/* -------------------------------------------------------------------------
   Le consultant
   ⚠️ A COMPLETER : nom complet exact et intitule a confirmer.
   Les cinq ans portent sur le perimetre execute en propre, pas sur ce qui
   est confie a un partenaire : c'est la distinction demandee.
   ------------------------------------------------------------------------- */

export const CONSULTANT = {
	name: 'Geoffrey',
	role: 'Fondateur de Quoted',
	points: [
		"Cinq ans d'expérience en référencement, sur le périmètre que j'exécute moi-même",
		'Un seul interlocuteur, du premier relevé au reporting',
		'Les relevés sont faits à la main, pas délégués à un junior',
		'Ce qui dépasse le périmètre est confié à un partenaire, et vous le savez',
	],
};

/* -------------------------------------------------------------------------
   Process en 4 etapes, presente en onglets sur la home.
   ------------------------------------------------------------------------- */

export interface Step {
	id: string;
	tab: string;
	title: string;
	body: string;
	points: string[];
	when: string;
}

export const PROCESS: Step[] = [
	{
		id: 'releve',
		tab: 'Relevé',
		title: 'On regarde tout, on ne suppose rien.',
		body: "Avant de toucher à quoi que ce soit, on mesure : ce que les moteurs répondent déjà sur vos sujets, qui ils citent, et ce que votre site leur donne à lire.",
		points: [
			'Panel de prompts construit sur vos intentions réelles',
			'Relevé sur ChatGPT, Perplexity, Gemini, Claude et les AI Overviews',
			'Lecture technique de ce qui rend vos pages citables',
		],
		when: 'Semaine 1 à 2',
	},
	{
		id: 'priorite',
		tab: 'Priorisation',
		title: 'Un plan classé par impact.',
		body: "Pas de feuille de route de quarante pages. Chaque écart constaté devient une action, classée par effort et par gain attendu, arbitrée avec vous.",
		points: [
			'Matrice impact / effort sur les écarts constatés',
			'Ce qui se joue en premier, ce qui attend',
			'Périmètre et volumes arrêtés noir sur blanc',
		],
		when: 'Semaine 3',
	},
	{
		id: 'production',
		tab: 'Production',
		title: 'On produit, vous suivez.',
		body: "Contenus, maillage, données structurées, présence hors site. Vous voyez ce qui avance, sans jargon, et vous validez avant publication.",
		points: [
			'Contenus conçus pour être repris et cités',
			'Maillage et données structurées cohérents',
			'Médias, Reddit et référentiels travaillés en parallèle',
		],
		when: 'En continu',
	},
	{
		id: 'mesure',
		tab: 'Mesure',
		title: 'Des chiffres, pas des impressions.',
		body: "Le même panel rejoué dans les mêmes conditions, mois après mois. Vous voyez ce qui a bougé, sur quelles questions, et face à quels concurrents.",
		points: [
			'Score de visibilité et sa variation',
			'Présence, citation et part de voix suivies séparément',
			'Version de chaque moteur consignée à chaque campagne',
		],
		when: 'Chaque mois',
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
