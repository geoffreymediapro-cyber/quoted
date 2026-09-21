import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_NAME, SITE_URL } from '../../data/site';

/** Flux du blog, distinct de celui du guide : l'un est chronologique, l'autre non. */
export async function GET(context) {
	const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

	return rss({
		title: `${SITE_NAME}, le blog`,
		description:
			"Ce qu'on observe sur les moteurs de réponse : relevés, changements de comportement des modèles, et ce que ça change pour la visibilité d'une marque.",
		site: context.site ?? SITE_URL,
		trailingSlash: true,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/blog/${post.id}/`,
			categories: [post.data.tag],
		})),
		customData: '<language>fr-fr</language>',
	});
}
