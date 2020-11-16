<script lang="ts">
	import Icon from '../components/Icon.svelte';
	import Portals from '../components/Portals.svelte';

	let y: number;
</script>

<style lang="scss">
</style>

<svelte:window bind:scrollY={y}/>

<svelte:head>
	<title>Challenge Your Imagination</title>
</svelte:head>

<div style="background: #000; color: #fff; padding-top: .5rem; padding-bottom: 1.5rem;" class="grid-container-fluid">
	<h1>Challenge Your Imagination<sup>(Abbr. CYI)</sup> is a creative production studio based in New York City. We create the never-before-thought-possible.</h1>
	<Portals/>
	<div style="border-top: 1px solid #fff; border-bottom: 1px solid #fff;" class="row">
		<div class="col-lg-9">
			<p class="lede" style="margin-top: 2rem;">We’ve tied up 40 guests in lorem ipsum dolor sit amet consetetur sadipscing elitr,<sup>01</sup> sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,   sed diam voluptua, sadipscing elitr lorem ipsum dolor sit amet consetetur sadipscing elitr,   sed diam nonumy eirmod tempor invidunt ut labore et dolore…</p>
		</div>
	</div>
	<!-- <div style="border-bottom: 1px solid #fff;">
		<span class="nav-link" style="display: inline-block; padding: 1rem 1rem 2rem; margin-left: 3rem; border-left: 1px solid #fff;" href="">Our Work</span>
	</div> -->
</div>
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

