<script lang="ts">
	import Nav from '../components/Nav.svelte';
</script>

<style lang="scss" global>
	@import '../styles/global.scss';
</style>

<Nav/>

<main>
	<slot></slot>
</main>
