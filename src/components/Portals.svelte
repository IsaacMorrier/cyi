<script lang="ts">
    import Portal from './Portal.svelte'
    export let scrollY;

    let containerWidth:number = 0,
		containerHeight:number = 0;
		
	const portals = [
		{
			title: "Lab Rat — A$AP Rocky",
			scale: .45,
			pos: { x: -.8, y: -.8, z: -2.5 },
			face: { x: '-1', y: '1', z: '0', a: '70deg' },
			bg: 'https://source.unsplash.com/user/erondu'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .45,
			pos: { x: .8, y: -.75, z: -2.5 },
			face: { x: '-1', y: '-1', z: '-.5', a: '60deg' },
			bg: 'https://source.unsplash.com/user/wsanter'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .25,
			pos: { x: -.15, y: -.25, z: -4 },
			face: { x: '.5', y: '1', z: '0', a: '40deg' },
			bg: 'https://source.unsplash.com/user/insungyoon'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .45,
			pos: { x: -.65, y: .55, z: -3 },
			face: { x: '1', y: '1', z: '-.3', a: '65deg' },
			bg: 'https://source.unsplash.com/user/dominikreallife'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .6,
			pos: { x: .55, y: .7, z: -2 },
			face: { x: '1', y: '-1', z: '.5', a: '60deg' },
			bg: 'https://source.unsplash.com/user/marekpiwnicki'
		}
	]


</script>

<style lang="scss">
	#container {
        position: relative;
        height: 50rem;
        perspective: 2000px;
		overflow: visible;
		z-index: 0;
    }
</style>

<div id="container" bind:clientWidth={containerWidth} bind:clientHeight={containerHeight}>
	{containerWidth}, {containerHeight}<br>
	{scrollY}
	{#each portals as portal, i}
		<Portal {containerWidth} {containerHeight} {scrollY} {...portal}/>
	{/each}
</div>