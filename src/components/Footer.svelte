<script lang="ts">
	export let color;
</script>

<style lang="scss">
    footer {
        color: $background-color;
        -webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
        padding: 0 rem-calc(16) rem-calc(96);
        font-size: rem-calc(14);
        > * {
           display: inline-block;
           margin-top: 1rem;
           margin-right: 2rem;
        }
        a {
            text-decoration: none;
        }
    }
    .gray {
        opacity: .4;
    }
    #footer-email, #footer-copyright {
        margin-top: 12rem;
        @include breakpoint(lg) {
            margin-top: 0;
        }
    }
    #footer-copyright,
    #footer-colophon {
        text-align: right;
        display: block;
        @include breakpoint(lg) {
            text-align: left;
            display: inline-block;
        }
    }

</style>

<footer style="background: rgb({color})">
    <a id="footer-email"href="mailto:hi@cyi.studio">hi@cyi.studio</a>
    <span id="footer-location">New York City</span>
    <span id="footer-copyright" class="gray">&copy;2020 Challenge Your Imagination</span>
    <span id="footer-colophon" class="gray"><a href="http://isaacmorrier.com" target="_blank">Branding and website by Isaac Morrier</a></span>
</footer>