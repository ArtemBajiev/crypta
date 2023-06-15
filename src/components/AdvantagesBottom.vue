<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <section id="advantages-bottom">
     <div class="container">
         <h2 class="advantages-bottom__header">Преимущества</h2>
         <div class="advantages-bottom__text-and-circle">
         <ul class="advantages-bottom__list">
             <li class="advantages-bottom__list-item">
              <strong>1</strong>  Записи с вами навсегда</li>
             <li class="advantages-bottom__list-item">
              <strong>2</strong> Нужно будет
                  освежить в памяти лекции?
                   Не проблема. Записи занятий будут всегда доступны в личном кабинете.</li>
             <li class="advantages-bottom__list-item">
              <strong>3</strong>  План развития в профессии</li>
             <li class="advantages-bottom__list-item">
              <strong>4</strong>На бесплатном курсе вы получите
                  полезный практический навык, а также поймете, как
                  можно продолжить развитие в выбранном направлении. Мы вам в этом поможем</li>
         </ul>
         <div class="img-and-circle">
<div class="advantages-bottom__circle-block">
         <div class="advantages-bottom__circle"></div>
         </div>
         </div>
         </div>
     </div>
    </section>
 </template>
<script>

export default {

  data() {
    return {

    };
  },
};
</script>
 <style scoped>
 .advantages-bottom__header
 {
     text-align: center;
     margin-top: 75px;
     margin-bottom: 34px;
 }
 .advantages-bottom__list
 {
     margin-left: auto;
     min-width: 300px;
     border-radius: 50%;
     line-height: 20px;
     margin-bottom: 16px;
     width: 50vw;
     padding-left: 20px;
     position: relative;
 }
 .advantages-bottom__list-item strong
 {
     display: flex;

     display: inline-block;
     min-height: 20px;
     min-width: 20px;
     border-radius: 50%;
 box-shadow: -1px 1px 0px 2px red;
 text-align: center;
 padding-top: 2px;
 position: absolute;
 left: -4vw;
 top: -3px;
 }
 .advantages-bottom__text-and-circle
 {
  display: flex;
  align-items: center;
 }
 .img-and-circle
 {
     display: flex;
     max-width: 100%;
     align-items: center;
     overflow: hidden;
     justify-content: space-between;
     margin-top: 5vw;
 }
 .swipe-img
 {
     display: block;
     width: 100%;
     background-position: center;
     background-repeat: no-repeat;
     border-radius: 20px;
     border: 1px solid black;
     background-size: 110%;
     height: 40vw;

 }

.swipe-img img
{
    width: 100%;
    border-radius: 70px;
}
.advantages-bottom__list-item
  {
    margin-bottom: 1vw;
    position: relative;
    padding-left: 10px;
    margin-bottom: 2vw;
  }
 .advantages-bottom__circle-block{
    width: 50vw;
     height: 50vw;
     position: relative;
     right: -20vw;
     margin-left: -20vw;
 }
 .advantages-bottom__circle
 {
     display: block;
     width: 100%;
     height: 100%;
     background-image: url('@/assets/img/Group.png');
     background-size: contain;
     background-position: center;
     position: relative;
     background-repeat: no-repeat;
     animation: circleText 20s infinite linear;

 }
 @media (min-width: 800px) {
  .advantages-bottom__list-item
  {
    font-size: 3vw;
    line-height: 3vw;
  }
  .advantages-bottom__list-item strong
  {
width: 3vw;
height: 3vw;
 }
 .advantages-bottom__list
 {
width: 50vw;
 }
 .advantages-bottom__header
 {
  font-size: 3vw;
 }
}
 </style>
