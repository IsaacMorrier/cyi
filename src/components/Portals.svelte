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
			title: "Hello Bi+ches Tour — CL",
			scale: .45,
			pos: { x: .2, y: .1, z: -2.5 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '-1', y: '1', z: '0', a: '60' },
			bg: ['/img/Challenge_Your_Imagination-Hello_Bi+ches_Tour-CL.jpg']
		},{
			title: "Scarlet Night London — Virgin Voyages",
			scale: .45,
			pos: { x: .85, y: .1, z: -2.5 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '-1', y: '-1', z: '-.5', a: '60' },
			bg: ['/img/Challenge_Your_Imagination-Scarlet_Night_London-Virgin_Voyages.jpg']
		},{
			title: "Fairgrounds — Big Apple Circus",
			scale: .25,
			pos: { x: .5, y: .4, z: -2.5 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '.5', y: '1', z: '0', a: '80' },
			bg: ['/img/Challenge_Your_Imagination-Fairgrounds-Big_Apple_Circus.jpg']
		},{
			title: "Lux — Yale University",
			scale: .45,
			pos: { x: .25, y: .8, z: -3 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '1', y: '1', z: '-.3', a: '60' },
			bg: ['/img/Challenge_Your_Imagination-Lux-Yale_University.jpg']
		},{
			title: "Lab Rat	— Sotheby's × A$AP Rocky",
			scale: .6,
			pos: { x: .8, y: .9, z: -2 },
			face: { x: 0, y: 0, z: 0, a: 80 },
			// face: { x: '1', y: '-1', z: '.5', a: '60' },
			bg: ['/img/Challenge_Your_Imagination-Lab_Rat-ASAP_Rocky.jpg']
		}
	]


</script>

<style lang="scss">
	#container {
        position: relative;
        height: 26rem;
        perspective: 2000px;
		overflow: visible;
		z-index: 0;
		@include breakpoint(md) {
			height: 46rem;
		}
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