<script context="module">
  import { useData } from "../../clientUtilities";

  export async function preload() {
    const projects = await useData(this, "work");
    return { projects };
  }
</script>

<script>
	export let projects;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Work</title>
</svelte:head>

<h1>Recent Work</h1>

<ul>
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='work/{project.slug}'>{project.title}</a></li>
	{/each}
</ul>