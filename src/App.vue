<template>
  <div class="global-container">
   <router-view/>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: '.header-text',
    animation: gsap.fromTo('.home', { opacity: 1 }, { opacity: 0 }),
    // pin: true,
    start: '50% 50%',
    scrub: true,
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
