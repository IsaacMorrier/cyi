<script lang="ts">
import { onMount } from 'svelte';

    import Portal from './Portal.svelte'
	export let sprungScroll;
	export let sprungMouse;

    let containerWidth = 0,
		containerHeight = 0,
		containerY = 0;

	function offset(el) {
		var rect = el.getBoundingClientRect(),
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return rect.top + scrollTop;
	}

	onMount(() => {
		containerY = offset(document.querySelector('#container'));
	});

	const portals = [
		{
			title: "Lab Rat — A$AP Rocky",
			scale: .45,
			pos: { x: .1, y: .1, z: -2.5 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '-1', y: '1', z: '0', a: '60' },
			bg: 'https://source.unsplash.com/user/erondu'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .45,
			pos: { x: .9, y: .2, z: -2.5 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '-1', y: '-1', z: '-.5', a: '60' },
			bg: 'https://source.unsplash.com/user/wsanter'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .25,
			pos: { x: .4, y: .4, z: -4 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '.5', y: '1', z: '0', a: '80' },
			bg: 'https://source.unsplash.com/user/insungyoon'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .45,
			pos: { x: .2, y: .7, z: -3 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '1', y: '1', z: '-.3', a: '60' },
			bg: 'https://source.unsplash.com/user/dominikreallife'
		},{
			title: "Lab Rat — A$AP Rocky",
			scale: .6,
			pos: { x: .7, y: .7, z: -2 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '1', y: '-1', z: '.5', a: '60' },
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
	svg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%
	}
	circle { fill: #ff3e00 }
</style>

<div id="container" bind:clientWidth={containerWidth} bind:clientHeight={containerHeight} bind:offsetHeight={containerY}>
	<!-- {containerY}<br>
	w: {containerWidth}, h: {containerHeight}<br>
	mouse.x = {$sprungMouse.x}, mouse.y = {$sprungMouse.y}<br>
	{$sprungScroll.y} -->
	{#each portals as portal, i}
		<Portal {containerWidth} {containerHeight} {containerY} {sprungScroll} {sprungMouse} {...portal}/>
	{/each}
	<!-- <svg>
		<circle cx={$sprungMouse.x} cy={$sprungMouse.y} r="20"/>
	</svg> -->
</div>