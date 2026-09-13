import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_URL } from '../data/site';

export async function GET(context) {
	const entries = (await getCollection('guide', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.updated.valueOf() - a.data.updated.valueOf(),
	);

	return rss({
		title: `${SITE_NAME}, guide GEO`,
		description:
			"Le guide du Generative Engine Optimization : comprendre, appliquer et mesurer la visibilité d'une marque dans les réponses générées par l'IA.",
		site: context.site ?? SITE_URL,
		trailingSlash: true,
		items: entries.map((entry) => ({
			title: entry.data.title,
			description: entry.data.description,
			pubDate: entry.data.updated,
			link: `/guide/${entry.id}/`,
			categories: [entry.data.chapter],
		})),
		customData: '<language>fr-fr</language>',
	});
}
