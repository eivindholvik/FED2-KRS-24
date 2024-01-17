<script>
  import { page } from '$app/stores';
  import gsap from 'gsap';  
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';

	export let data;

  onMount(() => {
		gsap.registerPlugin(ScrollTrigger)
    });
</script>

<p>{$page.params.slug}</p>
<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
{#each data.post.images as image}
	<img src={image.url} alt={image.alt} />
{/each}
