import { error } from '@sveltejs/kit';
import { posts } from '$lib/db/data.js';

export function load({ params }) {
  const post = posts.find((post) => post.title.toLowerCase().replace(/\s/g, '-') === params.slug);

  if (!post) throw error(404);

  return {
    post
  };
}
