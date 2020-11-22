<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import Image from 'svelte-image';
	
	import Icon from '../components/Icon.svelte';
	import Portals from '../components/Portals.svelte';
	
	let scrollY: number;

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
	}

	onMount(() => {
		sprungMouse.set ({x: (window.innerWidth / 2), y: 100})
	});

	function handleMousemove(e) {
		sprungMouse.set({ x: e.clientX, y: e.clientY });
	}
</script>

<style lang="scss">
	#section-intro {
		padding-bottom: rem-calc(20);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		@include breakpoint(lg) {
			padding-bottom: rem-calc(40);
		}
	} 
	#section-work {
		position: relative;
		border-top: .5px solid;
		border-bottom: .5px solid;
		padding: 1rem 0 1rem;
		z-index: 100;
		@include breakpoint(lg) {
			p {
				max-width: 80vw;
			}
		}
	}
</style>

<svelte:window bind:scrollY={scrollY}/>
<svelte:body on:mousemove={handleMousemove}/>

<svelte:head>
	<title>Challenge Your Imagination</title>
</svelte:head>

<section id="section-intro" class="section-black grid-container-fluid">
	<h1>Challenge Your Imagination<sup>(Abbr. CYI)</sup> is a creative production studio based in New York City. We create the never-before-thought-possible.</h1>
	<Portals {sprungScroll} {sprungMouse}/>
	<div id="section-work">
		<p class="lede col-lg-9">We’ve tied up 40 audience members in shibari ropes and served them tuna after an aerial duet,
			inflated a 75-foot octopus in the middle of the ocean,
			driven hundreds of guests and 60 performers across London in a parade of vehicles that included a pink firetruck and a stretch limo police car,
			put A$AP Rocky through physical and psychological tests on the sales floor of Sotheby’s,
			made concert halls feel like arenas, and more.
		</p>
	</div>
	<!-- <div style="border-bottom: 1px solid #fff;">
		<span class="nav-link" style="display: inline-block; padding: 1rem 1rem 2rem; margin-left: 3rem; border-left: 1px solid #fff;" href="">Our Work</span>
	</div> -->
</section>
<div class="grid-container-fluid">
	<div class="row">
		<p class="col-9 col-offset-3 col-lg-6 col-lg-offset-6">Our process begins at round tables where all ideas are equal. Our favorite collaborators are multidisciplinary thinkers. Sometimes the most meaningful worlds are crafted from cardboard boxes. We interrogate our instincts, challenge complacency, dissect our fears, and iterate until new forms and stories emerge.  We invite our audiences to embrace the unexpected and illuminate the unfamiliar within themselves.</p>
	</div>
	<div class="row">
		<div class="col-12">
			<p style="font-size: 1.5rem">Our process begins at round tables where all ideas are equal. Our favorite collaborators are multidisciplinary thinkers. Sometimes the most meaningful worlds are crafted from cardboard boxes. We interrogate our instincts, challenge complacency, dissect our fears, and iterate until new forms and stories emerge.  We invite our audiences to embrace the unexpected and illuminate the unfamiliar within themselves.</p>
		</div>
		<div class="col-12 col-lg-6">
			<p>Our process begins at round tables where all ideas are equal. Our favorite collaborators are multidisciplinary thinkers. Sometimes the most meaningful worlds are crafted from cardboard boxes. We interrogate our instincts, challenge complacency, dissect our fears, and iterate until new forms and stories emerge.  We invite our audiences to embrace the unexpected and illuminate the unfamiliar within themselves.</p>
		</div>
		<div class="col-12 col-lg-6">
			<Icon icon={"story"} width={"15%"}/>
			<Icon icon={"design"} width={"15%"}/>
			<Icon icon={"production"} width={"15%"}/>
			<Icon icon={"innovation"} width={"15%"}/>
			<Icon icon={"magic"} width={"15%"}/>
		</div>
	</div>
</div>
<div class="grid-container-fluid">
	<Image src="img/Challenge_Your_Imagination-Footer-1.jpg" alt="A$AP Rocky stands in a glass box during his performance of Lab Rat."/>
</div>

