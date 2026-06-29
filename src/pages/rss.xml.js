import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { BLOG_DESCRIPTION, BLOG_TITLE } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: BLOG_TITLE,
		description: BLOG_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
