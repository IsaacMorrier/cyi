<script lang="ts">
    export let title: string;
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
        y = (containerHeight / 2) * pos.y - (.05 * (5 + pos.z) * scrollY) + 'px';
        z = 100 * pos.z + 'px';
        i = face.x;
        j = face.y;
        k = face.z;
        t = face.a;
    }

</script>

<style lang="scss">
    .portal-container {
        position: absolute;
        top: 50%;
        left: 50%;
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
            opacity: .2;
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
    height: {diameter};
    width: {diameter};
    border-radius: {diameter};
    transform:
        translate(-50%, -50%)
        translate3d({x}, {y}, {z})
        scale3d({scale}, {scale}, {scale})
        rotate3d({i}, {j}, {k}, {t})
">
    <div>
        <!-- {diameter}<br>
        {x}, {y}, {z} -->
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