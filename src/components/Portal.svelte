<script lang="ts">
    export let pos: any;
    export let face: any;
    export let bg: string;
    export let scale: number;
    export let containerHeight: number;
    export let containerWidth: number;
    export let scrollY: number;

    let diameter: string, x: string, y: string, z: string, i: number, j: number, k: number, t: string;
    $: {
        diameter = containerWidth * (((0.5 - 1) / (2560-375)) * (containerWidth - 375) + 1) + 'px'; // make portals appropriate base size for screen width: 1x screen width at 375px, 0.5x screen width at 2560px
        x = (containerWidth / 2) * pos.x + 'px';
        y = (containerHeight / 2) * pos.y + (.1 * scrollY) + 'px';
        z = 100 * pos.z + 'px';
        i = face.x;
        j = face.y;
        k = face.z;
        t = face.a;
    }

</script>

<style lang="scss">
    .portal {
        position: absolute;
        top: 50%;
        left: 50%;

        backface-visibility: hidden;
        transition: box-shadow .3s;
        &:hover {
            box-shadow: 0 0 50px 10px white;
        }
    }
</style>

<div class="portal" style="
    height: {diameter};
    width: {diameter};
    border-radius: {diameter};
    background: {bg};
    transform:
        translate(-50%, -50%)
        translate3d({x}, {y}, {z})
        scale3d({scale}, {scale}, {scale})
        rotate3d({i}, {j}, {k}, {t})
">
    <div style="margin: auto; text-align: center; padding-top: 20%; font-size: 32px;">
        <!-- {diameter}<br>
        {x}, {y}, {z} -->
    </div>
</div>