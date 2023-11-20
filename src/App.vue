<template>
  <div class="global-container">
    <div class="contentSmooth">
      <router-view/>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

// eslint-disable-next-line import/extensions
import { ScrollTrigger } from '@/assets/gsap/ScrollTrigger.min.js';
// eslint-disable-next-line import/extensions
import { gsap } from '@/assets/gsap/gsap.min.js';
// eslint-disable-next-line import/extensions
import { ScrollSmoother } from '@/assets/gsap/ScrollSmoother.min.js';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
      wraper: '.global-container',
      content: '.contentSmooth',
      smooth: 1.8,
      effects: true,
    });
  }
  ScrollTrigger.create({
    trigger: '.header-text',
    animation: gsap.fromTo('.home', { opacity: 1 }, { opacity: 0 }),
    // pin: true,
    start: '50% 50%',
    scrub: true,
  });
  document.addEventListener('mousemove', (e) => {
    Object.assign(document.documentElement, {
      style: `
    --move-Y: ${(e.clientX - window.innerWidth / 2) * -0.002}deg;
    --move-X: ${(e.clientY - window.innerHeight / 2) * -0.003}deg;
    `,
    });
  });
});
</script>
<style>
*{
  box-sizing: border-box;
  font-family: Muller ;
  font-style: normal;
  color: white;
  margin: 0px;
  padding: 0px;
  /* outline: 1px solid red; */
}
ul{
  list-style: none;
}
@font-face {
  font-family: "Muller";
  src: url('@/assets/fonts/MullerRegular.woff2');
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Muller";
  src: url('@/assets/fonts/MullerExtraBold.woff2');
  font-style: bold;
  font-weight: 700;
}
@font-face {
  font-family: "Muller";
  src: url('@/assets/fonts/MullerBlack.woff');
  font-style: bold;
  font-weight: 900;
}
.container
{
  margin: 0px auto;
  padding: 0px 0px;
}

body{
  background-color: black;
  overflow-x: hidden;
}
.swiper-wrapper
{
  width: 300px;
}
/* scroll Bar */
/* W3C standard
   сейчас только для Firefox */
* {
    scrollbar-width: thin;
    scrollbar-color: rgb(133, 133, 133) rgb(255, 255, 255);
}

/* для Chrome/Edge/Safari */
*::-webkit-scrollbar {
    width: 5px;
}

*::-webkit-scrollbar-track {
    background: #353535;
}

*::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.253);
    border-radius: 5px;
}

</style>
