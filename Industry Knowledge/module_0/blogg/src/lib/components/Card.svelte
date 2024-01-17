<script>
	export let sumarized;
  const slug = sumarized.title.toLowerCase().replace(/\s/g, '-');
</script>

<div>
	<a href="/blog/{slug}">go to:</a>
	<h2>{sumarized.title}</h2>
	<img src={sumarized.image} alt={sumarized.alt} />
</div>

<style>
	div {
		border: 1px solid black;
		padding: 1rem;
		margin: 1rem;
		width: 8rem;
	}
</style>
