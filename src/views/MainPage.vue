<!-- eslint-disable max-len -->
<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!-- eslint-disable max-len -->
<template>

  <HomeTop></HomeTop>
  <LearnComp></LearnComp>
  <AdvantagesComp></AdvantagesComp>
  <WhomComp></WhomComp>
  <ResultComp></ResultComp>
  <ExperienceComp></ExperienceComp>
  <ResultLearn></ResultLearn>
  <AdvantagesBottom></AdvantagesBottom>
  <StatementFooter></StatementFooter>
  </template>
<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HomeTop from '@/components/HomeTop.vue';
import AdvantagesComp from '@/components/AdvantagesComp.vue';
import LearnComp from '@/components/LearnComp.vue';
import WhomComp from '@/components/WhomComp.vue';
import ResultComp from '@/components/ResultComp.vue';
import ExperienceComp from '@/components/ExperienceComp.vue';
import ResultLearn from '@/components/ResultLearn.vue';
import AdvantagesBottom from '@/components/AdvantagesBottom.vue';
import StatementFooter from '@/components/StatementFooter.vue';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: '.home',
    animation: gsap.fromTo('.home', { opacity: 1 }, { opacity: 0 }),
    // pin: true,
    start: '50% 50%',
    end: '80% top',
    scrub: true,
  });
  ScrollTrigger.create({
    trigger: '.advantages',
    animation: gsap.fromTo('.advantages__text_left', { x: -100 }, { x: 0 }),
    // pin: true,
    start: '0% 50%',
    end: '20%',
    scrub: false,
  });
  const itemsL = gsap.utils.toArray('.push-right');
  itemsL.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      animation: gsap.fromTo(item, { x: '-100vw' }, { x: 0 }),
      // pin: true,
      start: '50% 80%',
      end: '60%',
      scrub: false,
    });
  });
});
</script>
<script>

export default {
  components: {
    HomeTop,
    AdvantagesComp,
    LearnComp,
    WhomComp,
    ResultComp,
    ExperienceComp,
    ResultLearn,
    AdvantagesBottom,
    StatementFooter,
  },
};
</script>
  <style>

  </style>
