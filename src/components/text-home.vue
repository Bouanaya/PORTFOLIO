<template>
    <svg viewBox="0 0 960 300">
        <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="80%" class="text-5xl bg-gradient-to-r from-emerald-500 via-green-400 to-fuchsia-600
                        bg-clip-text text-transparent font-sans font-bold">
                Hi!
            </text>
        </symbol>

        <g class="g-ants">
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
            <use xlink:href="#s-text" class="text-copy"></use>
        </g>
    </svg>
</template>

 

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Montserrat);
svg {
    display: block;
    font: 10.5em 'Montserrat';
    width: 960px;
    height: 300px;
    margin: 0 auto;
}

.text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
}

.text-copy:nth-child(1) {
    stroke: #000;
    animation-delay: -1;
}

.text-copy:nth-child(2) {
    stroke: #000;
    animation-delay: -2s;
}

.text-copy:nth-child(3) {
    stroke: #FFF;
    animation-delay: -3s;
}

.text-copy:nth-child(4) {
    stroke: #22C55E;
    animation-delay: -4s;
}

.text-copy:nth-child(5) {
    stroke: #10B981;
    animation-delay: -5s;
}

@keyframes stroke-offset {
    100% {
        stroke-dashoffset: -35%;
    }
}
</style>
 