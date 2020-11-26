<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import Image from 'svelte-image';
	import interpolateRGB from 'interpolate-rgb';
	
	import Icon from '../components/Icon.svelte';
	import Portals from '../components/Portals.svelte';
	import Footer from '../components/Footer.svelte';
import type { copyFile } from 'fs';
	
	let h = 0;
	let scrollY = 0;
	let colors = [
		[0, 0, 0],
		// [26, 33, 255],
		[65, 13, 147],
		// [255, 37, 32],
		// [255, 3, 193],
		// [62, 203, 255],
		// [0, 253, 98]
	];
	export let color = colors[0];
	let colorSectionHeight = 100;
	let firstColor = 0;
	let secondColor = 1;
	let colorInterpolation = 0;

	let sprungScroll = spring({y: 0}, {
		stiffness: 0.03,
		damping: 0.65
	});
	let sprungMouse = spring({ x: 0, y: 100 }, {
		stiffness: 0.03,
		damping: 0.65
	});

	$: {
		sprungScroll.set({y: scrollY});
	};

	$: {
		colorSectionHeight = h / (colors.length - 1);
		firstColor = Math.floor(scrollY / colorSectionHeight);
		secondColor = firstColor + 1;
		colorInterpolation = (scrollY - (firstColor * colorSectionHeight)) / colorSectionHeight;
		color = interpolateRGB(colors[firstColor], colors[secondColor], colorInterpolation);
	}

	onMount(() => {
		sprungMouse.set ({x: (window.innerWidth / 2), y: 100});
	});

	function handleMousemove(e) {
		sprungMouse.set({ x: e.clientX, y: e.clientY });
	}
</script>

<style lang="scss">
	#section-intro {
		padding-bottom: rem-calc(20);
		// -webkit-font-smoothing: antialiased;
		// -moz-osx-font-smoothing: grayscale;
		@include breakpoint(lg) {
			padding-bottom: rem-calc(40);
		}
	} 
	#section-work {
		position: relative;
		border-top: .5px solid;
		border-bottom: .5px solid;
		z-index: 100;
		@include breakpoint(lg) {
			p {
				max-width: 64vw;
				padding-right: 8vw;
				border-right: .5px solid;
			}
		}
	}
	#section-icons {
		margin-top: 3rem;
		@include breakpoint(lg) {
			margin-top: 0;
		}
	}

</style>

<svelte:window bind:scrollY={scrollY}/>
<svelte:body on:mousemove={handleMousemove}/>

<svelte:head>
	<title>Challenge Your Imagination</title>
</svelte:head>

<div id="page" bind:clientHeight={h} style="color:rgb({color})">
	<div style="position:fixed; display:inline-block; background: white; top: 0">
		scrollY: {scrollY}<br>
		colorSectionHeight: {colorSectionHeight}<br>
		firstColor: {firstColor}<br>
		secondColor: {secondColor}<br>
		colorInterpolation: {colorInterpolation}<br>
		color: {color}</div>
	<section id="section-intro" class="grid-container-fluid">
		<h1>Challenge Your Imagination<sup>(Abbr. CYI)</sup> is a creative production studio based in New York City. We create the never-before-thought-possible.</h1>
		<Portals {sprungScroll} {sprungMouse} {color}/>
		<div id="section-work">
			<p class="lede col-lg-9">We’ve tied up 40 audience members in shibari ropes and served them tuna,
				inflated a 75-foot octopus in the middle of the Atlantic Ocean,
				driven hundreds of guests and 60 performers across London in a parade of vehicles that included a pink firetruck and a stretch limo police car,
				put A$AP Rocky through physical and psychological tests on the sales floor of Sotheby’s,
				made concert halls feel like arenas, and more.
			</p>
		</div>
	</section>
	<div class="grid-container-fluid">
		<div class="row">
			<p class="col-9 col-offset-3 col-lg-6 col-lg-offset-6 space-top space-bottom">Our process begins at round tables where all ideas are equal. Our favorite collaborators are multidisciplinary thinkers. Sometimes the most meaningful worlds are crafted from cardboard boxes. We interrogate our instincts, challenge complacency, dissect our fears, and iterate until new forms and stories emerge.  We invite our audiences to embrace the unexpected and illuminate the unfamiliar within themselves.</p>
		</div>
		<div class="row">
			<div class="col-12" style="border-top: .5px solid">
				<p class="lede">Our process begins at round tables where all ideas are equal. Our favorite collaborators are multidisciplinary thinkers. Sometimes the most meaningful worlds are crafted from cardboard boxes. We interrogate our instincts, challenge complacency, dissect our fears, and iterate until new forms and stories emerge.  We invite our audiences to embrace the unexpected and illuminate the unfamiliar within themselves.</p>
			</div>
			<div class="col-12 col-lg-6">
				<p>Our process begins at round tables where all ideas are equal. Our favorite collaborators are multidisciplinary thinkers. Sometimes the most meaningful worlds are crafted from cardboard boxes. We interrogate our instincts, challenge complacency, dissect our fears, and iterate until new forms and stories emerge.  We invite our audiences to embrace the unexpected and illuminate the unfamiliar within themselves.</p>
			</div>
			<div id="section-icons" class="col-12 col-lg-6">
				<Icon {color} icon={"story"} width={"15%"}/>
				<Icon {color} icon={"design"} width={"15%"}/>
				<Icon {color} icon={"production"} width={"15%"}/>
				<Icon {color} icon={"innovation"} width={"15%"}/>
				<Icon {color} icon={"magic"} width={"15%"}/>
			</div>
		</div>
	</div>
	<div class="grid-container-fluid space-top">
		<Image src="img/Challenge_Your_Imagination-Footer-1.jpg" alt="A$AP Rocky stands in a glass box during his performance of Lab Rat."/>
	</div>
	<div id="section-contact" class="grid-container-fluid">
		<h2 class="h1">Let’s start dreaming</h2>
		<div class="row" style="border-top: .5px solid;">
			<p class="col-4 col-offset-8" style="border-left: .5px solid;"><a href="mailto:info@cyi.studio">Contact Us</a></p>
		</div>
	</div>
	<Footer {color}/>
</div>