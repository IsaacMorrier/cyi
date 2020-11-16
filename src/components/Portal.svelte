<script lang="ts">
    export let pos: any;
    export let face: any;
    export let bg: string;
    export let scale: number;
    export let containerHeight: number;
    export let containerWidth: number;
    // export let y;

    let diameter: string, x: string, y: string, z: string;
    $: {
        diameter = containerWidth + 'px';
        x = (containerWidth / 2) * pos.x + 'px';
        y = (containerHeight / 2) * pos.y + 'px';
        z = 100 * pos.z + 'px';
    }

</script>

<style lang="scss">
    .portal {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 540px;

        backface-visibility: hidden;
    }
</style>

<div class="portal" style="
    height: {diameter};
    width: {diameter};
    background: {bg};
    transform:
        translate(-50%, -50%)
        translate3d({x}, {y}, {z})
        scale3d({scale}, {scale}, {scale})
        rotateX({face.x})
        rotateY({face.y});
">
    <div style="margin: auto; text-align: center; padding-top: 20%; font-size: 32px;">
        {diameter}<br>
        {x}, {y}, {z}
    </div>
</div>