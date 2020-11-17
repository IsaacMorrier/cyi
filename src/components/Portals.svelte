<script lang="ts">
    import Portal from './Portal.svelte'
    export let scrollY;

    let containerWidth:number = 0,
		containerHeight:number = 0;
		
	const portals = [
		{
			scale: .5,
			pos: { x: -.8, y: -.8, z: -3 },
			face: { x: '-1', y: '1', z: '0', a: '70deg' },
			bg: 'red'
		},{
			scale: .45,
			pos: { x: .8, y: -.75, z: -3 },
			face: { x: '-1', y: '-1', z: '-.5', a: '60deg' },
			bg: 'pink'
		},{
			scale: .25,
			pos: { x: -.15, y: -.2, z: -3 },
			face: { x: '.5', y: '1', z: '0', a: '40deg' },
			bg: 'blue'
		},{
			scale: .45,
			pos: { x: -.65, y: .65, z: -3 },
			face: { x: '1', y: '1', z: '-.3', a: '65deg' },
			bg: 'green'
		},{
			scale: .7,
			pos: { x: .55, y: .8, z: -3 },
			face: { x: '1', y: '-1', z: '.5', a: '60deg' },
			bg: 'purple'
		}
	]


</script>

<style lang="scss">
	#container {
        position: relative;
        height: 50rem;
        perspective: 2000px;
		overflow: visible;
    }
</style>

<div id="container" bind:clientWidth={containerWidth} bind:clientHeight={containerHeight}>
	{containerWidth}, {containerHeight}<br>
	{scrollY}
	{#each portals as portal, i}
		<Portal {containerWidth} {containerHeight} {scrollY} {...portal}/>
	{/each}
</div>