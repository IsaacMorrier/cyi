<script lang="ts">
    export let title: string;
    export let pos: any;
    export let face: any;
    export let bg: string;
    export let scale: number;
    export let containerHeight: number;
    export let containerWidth: number;
    export let containerY: number;
    export let sprungScroll;
    export let sprungMouse;

    let diameter: number, x: number, y: number, z: number, i: number, j: number, k: number, t: number, dx: number, dy: number, shadow: number;
    $: {
        diameter = containerWidth * (((0.5 - 1) / (2560-375)) * (containerWidth - 375) + 1); // make portals appropriate base size for screen width: 1x screen width at 375px, 0.5x screen width at 2560px
        x = containerWidth * pos.x;
        z = 100 * pos.z;
    }
    $: {
        y = containerHeight * pos.y - (.05 * (5 + pos.z) * $sprungScroll.y); // add a bit of scroll parallax based on z position
        dx = ($sprungMouse.x - x) / (containerWidth); // difference between horizontal mouse position and portal location, all over width
        dy = ($sprungMouse.y - y - containerY + $sprungScroll.y) / (containerHeight); // difference between vertical mouse position and portal location, all over width
        i = - dy;
        j = 2 * dx;
        k = dx;
        t = face.a * Math.sqrt(dx ** 2 + dy ** 2);
        shadow = Math.max(
            .8, // minimum of .8 brightness
            (
                1
                - dy // mouse below decreases brightness
                - Math.sqrt(dx ** 2 + dy ** 2) // mouse far away decreases brightness
                + (pos.z + 2) // farther z decreases brightness
            )
        );
    }

</script>

<style lang="scss">
    .portal-container {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0;
        backface-visibility: hidden;
        &:hover {
            text {
                opacity: 1;
            }
        }
    }
    .portal-type {
        width: 100%;
        height: 100%;
        text { 
            fill: $background-color;
            text-anchor: middle;
            font-size: 32px;
            opacity: 0;
            transition: all .2s ease-out;
        }
    }
    .portal {
        position: absolute;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 80%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .svg-image {
        
    }

</style>

<div class="portal-container" style="
    height: {diameter}px;
    width: {diameter}px;
    border-radius: {diameter}px;
    opacity: {shadow};
    transform:
        translate(-50%, -50%)
        translate3d({x}px, {y}px, {z}px)
        scale3d({scale}, {scale}, {scale})
        rotate3d({i}, {j}, {k}, {t}deg)
">
    <div>
        <!-- {diameter}<br>
        {x}, {y}, {z} -->
        <!-- {dx} -->
        <svg xmlns="http://www.w3.org/2000/svg" class="portal-type" viewBox="0 0 500 500">
            <defs>
                <path
                    id="text-circle"
                    d="M250,10C117.452,10,10,117.452,10,250S117.452,490,250,490,490,382.548,490,250,382.548,10,250,10"
                    transform="rotate(0 250 250)"
                />

                <filter id="svg-blur" >
                    <feGaussianBlur stdDeviation="15" in="SourceGraphic" result="blurred"/>
                    <feTurbulence id="turbulence" type='fractalNoise' baseFrequency='1' stitchTiles='stitch' result="noise"/>
                    <feBlend in="blurred" in2="noise" mode="screen"/>
                </filter>

                <clipPath id="svg-mask">
                    <circle cx="250" cy="250" r="200" />
                </clipPath>
            </defs>

            <image width="500" height="500" xlink:href="{bg}/500x500" filter="url(#svg-blur)" clip-path="url(#svg-mask)" />

            <text>
                <textPath xlink:href="#text-circle" startOffset="50%">{title}</textPath>
            </text>
            
          </svg>
          <div class="portal" style="
            border-radius: {diameter};
            background-image: rgba(255,255,255,0.5);
          "></div>          
    </div>
</div>