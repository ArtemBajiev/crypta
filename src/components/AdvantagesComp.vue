<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template >
  <section id="advantages">
    <div class="container">
      <div class="advantages">
        <div class="advantages__text_left">
          <span class="advantages__text_left-red">Преимущества трейдинга</span
          ><span class="advantages__text_left-white">Преимущества</span>
        </div>
        <div class="advantages__text__right">

        <h2 class="advantages__header">Преимущества трейдинга</h2>
          <div class="slide">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="slide in slider" :key="slide.id"
                ><div class="swipe-item">
                  <div class="swipe-item__header-number">
                    <span class="swipe-item__number">{{ slide.id }} - </span>
                    <h3 class="swipe-item__header">{{ slide.header }}</h3>
                  </div>
                  <p class="swipe-item__text">
                    {{ slide.text }}
                  </p>
                </div></swiper-slide
              >

              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <div class="advantages__wrapper"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
// style (Swiper v6+)
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      slider: [
        {
          text: ` На бирже можно заработать большие деньги без ограничений, если сравнивать со
                средними зарплатами в компаниях, где есть потолок, выше которого не заплатят даже за
                качественную работу.`,
          header: 'ДОХОД',
          id: 1,
        },
        {
          text: `Работать можно из любой точки мира, хоть на пляже, если есть ноутбук и интернет.
Свободный график. Трейдер сам устанавливает комфортный режим работы и проводит торги, например, по утрам или, наоборот, вечером. А если не спится ночью или хочется подзаработать в выходные, можно выбрать рынок криптовалюты, который работает 24/7.`,
          header: 'НЕТ ОГРАНИЧЕНИЙ ЛОКАЦИИ',
          id: 2,
        },
        {
          text: ` На бирже можно заработать большие деньги без ограничений, если сравнивать со
                средними зарплатами в компаниях, где есть потолок, выше которого не заплатят даже за
                качественную работу.`,
          header: 'СВОБОДНЫЙ ГРАФИК',
          id: 3,
        },
        {
          text: 'Никто не контролирует, не ограничивает, не оценивает. Сам себе ставишь задачу, сам выполняешь, сам критикуешь или хвалишь',
          header: 'СВОБОДА ДЕЙСТВИЙ',
          id: 4,
        },
        {
          text: 'Не нужно строить или арендовать офис, склад, искать сотрудников, выстраивать логистику, заниматься рекламой и прочей производственно-хозяйственной деятельностью.',
          header: 'ДЛЯ СТАРТА ТРЕБУЮТСЯ ТОЛЬКО ДЕНЬГИ',
          id: 5,
        },
      ],
    };
  },
};
</script>
<style scoped>
.advantages {
  display: flex;
  border-left: 6px solid white;
  border-top: 6px solid white;
  justify-content: flex-start;
  min-height: 320px;
  padding-bottom: 20px;
}
#advantages {
  overflow: hidden;
}
.advantages__text__right
{

  border-left: 3px solid red;
  border-bottom: 3px solid red;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

}
.advantages__wrapper
{
  width: 2px;
}
.slide
{
  width: 80%;
  cursor: pointer;

}
.advantages__text_left {
  display: flex;
  flex-direction: column;
  transform: rotate(-90deg);
  max-width: 80px;
  position: relative;
  left: 4px;
  top: 230px;
  max-width: 40px;
  max-height: 60px;
}
.advantages__text_left-red {
  color: rgba(255, 0, 0, 1);
  font-size: 21px;
  font-weight: 900;
  white-space: nowrap;
}
.advantages__text_left-white {
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 2px;
  top: -15px;
  white-space: nowrap;
}
.advantages__header::after {
  content: "";
  display: block;
  position: absolute;
  height: 15px;
  background-color: black;
  border-bottom: 3px solid white;
  width: 99vw;
  top: -5px;
  right: -98.991vw;
  overflow: hidden;
  border-radius: 0px 0px 0px 3px;
}
.advantages__header {
  margin-top: 4vw;
  font-size: 5vw;
  line-height: 24px;
  font-weight: 900;
margin-bottom: 20px;
  position: relative;
  padding-left: 15px;
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  display: inline;
  white-space: nowrap;
  min-width: 250px;
  margin-right: auto;
  margin-left: 40px;
  padding-bottom: 10px;
  padding-right: 20px;
  width: 70vw;
}

.advantages__text_left-red {
  color: rgba(255, 0, 0, 1);
  font-size: 21px;
  font-weight: 900;
}
.advantages__text_left-white {
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 2px;
  top: -15px;
}

.swipe-item {
  width: 80%;
}
.swipe-item__header {
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: 700;
  min-width: 100%;
}
.swipe-item__text {
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  font-style: normal;
  color: rgba(255, 255, 255, 1);
  margin-left: 30px;
}

.swipe-item__header-number {
  display: flex;
  min-width: 100%;
}
.swipe-item__number {
  font-size: 24px;
  font-weight: 900;
  color: rgba(229, 36, 41, 1);
  white-space: nowrap;
  margin-right: 5px;
}

@media (min-width: 800px ) {
  .swipe-item__header {
    font-size: calc( (100vw - 1rem)/(80 - 70) * (1.5 - 1) + 1rem);
  line-height: calc( (100vw - 1rem)/(80 - 70) * (1.5 - 1) + 1rem);
}

.advantages__header
{
  font-size: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
  max-width: 870px;
  padding-bottom: 20px;
  padding-right: 20px;
  margin-left: 40px;
}
.advantages__text__right
{
  padding-left: 40px;
}
.swipe-item__number
{
  font-size: calc( (100vw - 1rem)/(80 - 70) * (1.5 - 1) + 1rem);
  line-height: calc( (100vw - 1rem)/(80 - 70) * (1.5 - 1) + 1rem);
}
.advantages__text_left{
  top: 820px;
  left: -105px;
  min-width: 150px;
}
.advantages__text_left-white
{
  font-size: 128px;
  top: -50px;
}
.advantages__text_left-red
{
  font-size: 78px;
}
.advantages
{
  border-left: 72px solid white;
  border-top: 72px solid white;
}
.swipe-item__text
{
  font-size: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
  line-height: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
max-width: 90%;
}
.slide
{
  margin-top: 50px;
}

}

</style>
