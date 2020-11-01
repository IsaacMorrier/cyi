<script lang="ts">
    import { cubicIn, cubicOut } from 'svelte/easing';
    let duration = 200
    let delay = duration

    const transitionIn = () => ({
        duration,
        delay,
        easing: cubicIn,
        css: (t) => `
            opacity: ${t};
        `,
    })

    const transitionOut = () => ({
        duration,
        delay: 0,
        easing: cubicOut,
        css: (t) => `
            opacity: ${t};
        `,
    })
</script>

<style>
    div {
        position: relative;
    }
</style>

<div in:transitionIn out:transitionOut>
    <slot></slot>
</div>