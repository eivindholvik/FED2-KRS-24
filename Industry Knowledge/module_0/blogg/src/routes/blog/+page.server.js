import { posts } from '$lib/db/data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			image: post.images[0]?.url || '/images/placeholder.png',
			alt: post.images[0]?.alt || 'placeholder'
		}))
	};
}
