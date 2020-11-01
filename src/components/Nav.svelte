<script lang="ts">
	import Logo from '../components/Logo.svelte';
</script>

<style lang="scss">
	nav {
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
		text-align: right;
	}

	li {
		display: inline-block;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<Logo />

<nav>
	<ul>
		<li><a class="nav-link" href="#about-us">About Us</a></li>
		<li><a class="nav-link" href="#work">Our Work</a></li>
		<li><a class="nav-link" href="#contact-us">Contact Us</a></li>
	</ul>
</nav>
