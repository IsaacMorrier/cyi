<script>
  export let title, description, tags;
</script>

<style>
  h1 {
    color: red !important;
  }
  p {
    font-style: italic;
  }
</style>

<h1>{title}</h1>
<p>{description}</p>
<p>{#each tags as tag, i}{#if i}, {/if}{tag}{/each}</p>

<slot></slot>