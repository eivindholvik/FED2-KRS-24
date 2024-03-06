<script>
	import Card from '$lib/components/Card.svelte';
	export let data;
</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title, image, alt }}
		<li><Card sumarized={{ slug, title, image, alt }} /></li>
	{/each}
</ul>
