<template>
 <section id="learn">
    <div class="container">
      <div class="learn__header__block">
        <div class="learn__header"><h2>ЧЕМУ ВЫ НАУЧИТЕСЬ</h2></div>
      </div>
      <ul class="learn-list">
        <li class="learn-item push-right">Строить свою стратегию торговли</li>
        <li class="learn-item push-right">
          Фильтровать новостные источники и видеть важную информацию</li>
        <li class="learn-item push-right">
          Рассчитывать и контролировать риски, учитывая психологический аспект
        </li>
        <li class="learn-item push-right">Анализировать стратегии других трейдеров</li>
        <li class="learn-item push-right">Работать с торговыми терминалами</li>
        <li class="learn-item push-right">Соблюдать баланс собственных и заёмных средств</li>
        <li class="learn-item push-right">
          Оценивать торговые инструменты с помощью фундаментального и технического анализа
        </li>
        <li class="learn-item push-right">
          Оценивать торговые инструменты с помощью фундаментального и технического анализа
        </li>
        <li class="learn-item push-right">
          Составлять торговый план трейдера
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {

};
</script>
<style>
.learn__header {
  display: inline-block;
  border: 6px solid #ff0000;
  border-width: 6px 10px;
  border-radius: 80px 4px 80px 4px;
  padding: 5px 3px;
  margin-bottom: 52px;
  animation-name: anomBorder;
  animation-duration: 4s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}
.learn__header__block {
  text-align: center;
}
@keyframes anomBorder {
  0% {
    border-radius: 100px 4px 100px 4px;
  }
  25% {
    border-radius: 5px 5px 5px 5px;
  }
  50% {
    border-radius: 4px 100px 4px 100px;
  }
  75% {
    border-radius: 5px 5px 5px 5px;
  }
  100% {
    border-radius: 100px 4px 100px 4px;

  }
}
.learn-list {
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 60px;
}
.learn-item:not(:last-child) {
  margin-bottom: 15px;
}
.learn-item {
  padding: 0px 20px;
}
@media (min-width: 1000px) {
  .learn__header{
    margin-top: 260px;
    font-size: 3vw;
    border-width:25px 48px !important;
  }
  .learn__header h2{
    transform: scale(1.05);
  }
  .learn-list {
    margin: 0px auto;
    max-width: 80vw;
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 200px;
    margin-top: 160px;
  }
  .learn-item
  {
    padding-bottom: 40px;
    font-size: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
    line-height:calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem) ;
  }
}
</style>
