<script lang="ts">
    import Portal from '../components/Portal.svelte';
    // export let y;

    let containerWidth:number = 0,
		containerHeight:number = 0;
		
	const portals = [
		{
			scale: .4,
			pos: { x: -.8, y: -.8, z: 0 },
			face: { x: '10deg', y: '-10deg', z: 0 },
			bg: 'red'
		},{
			scale: .35,
			pos: { x: .8, y: -.75, z: 0 },
			face: { x: '10deg', y: '15deg', z: 0 },
			bg: 'pink'
		},{
			scale: .2,
			pos: { x: -.15, y: -.2, z: 0 },
			face: { x: '-29deg', y: '-16deg', z: 2 },
			bg: 'blue'
		},{
			scale: .35,
			pos: { x: -.65, y: .65, z: 0 },
			face: { x: '-15deg', y: '-15deg', z: 0 },
			bg: 'green'
		},{
			scale: .6,
			pos: { x: .55, y: .8, z: 0 },
			face: { x: '-20deg', y: '12deg', z: 0 },
			bg: 'purple'
		}
	]


</script>

<style lang="scss">
	#container {
        position: relative;
        height: 50rem;
        perspective: 500px;
		overflow: visible;
    }
</style>

<div id="container" bind:clientWidth={containerWidth} bind:clientHeight={containerHeight}>
	{containerWidth}, {containerHeight}
	{#each portals as portal, i}
		<Portal {containerWidth} {containerHeight} {...portal}/>
	{/each}
</div>