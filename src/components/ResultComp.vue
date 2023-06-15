<template>
  <section id="result">
    <div class="container">
    <div class="result">
      <h2 class="result__header">Ваш результат после тренинга</h2>
      <div class="block-result">
      <div class="red-shadow"></div>
      <ul class="all-result">
        <li class="result-item push-right">
          <strong>1</strong> Освоите 4 основополагающих
           столпа трейдинга: <br> Уровни<br> Энергия рынка
           <br>Точка входа<br>
          Направление рынка
        </li>
        <li class="result-item push-right">
          <strong>2</strong> Создадите свой первый базовый
           алгоритм – чек-лист с пошаговыми действиями при торговле
          на финансовых рынках
        </li>
        <li class="result-item push-right"> <strong>3</strong> Узнаете как распоряжаться своим
             капиталом и эффективно преувеличивать свой доход</li>
        <li class="result-item push-right"><strong>4</strong> Поймете как торговать с
             правильным соотношением риска и прибыли</li>
        <li class="result-item push-right"><strong>5</strong> Обретете навыки трейдинга:
             сможете совершать сделки</li>
      </ul>
      <div class="red-shadow-big"></div>
      </div>
    </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
.result
{
  padding-top: 60px;
    padding-bottom: 60px;
    overflow: hidden;

}
.red-shadow
{
    display: block;
    position: relative;
    border-radius: 50%;
    height: 4px;
    width: 4px;
    left: -10px;
    top: -10px;
    box-shadow: 0px 0px 78px 69px rgba(255, 0, 0, 0.582) ;
    background-color: rgba(255, 0, 0, 0.582);
}
.red-shadow-big
{
    display: block;
    position: absolute;
    border-radius: 50%;
    height: 4px;
    width: 4px;
    right: -10px;
    top: 170px;
    box-shadow: 0px 0px 168px 129px rgb(255, 0, 0) ;
    background-color: rgba(255, 0, 0, 0.788);
    z-index: 0;
}
.block-result
{
    position: relative;
}
.all-result
{
    color: rgba(255, 255, 255, 1);
    padding: 0px 20px;
    font-size: 20px;
    font-weight: 500;
    position: relative;
    z-index: 20;
    margin-left: 5px;
    max-width: 80vw;
    margin: 0px auto;

}
.result__header
{
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    margin: 0px auto;
    margin-bottom: 60px;
    z-index: 10;
}
.result-item
{
line-height: 20px;
z-index: 20;
}
.result-item:not(:last-child)
{
margin-bottom: 20px;
}
.result-item strong
{
    display: inline-block;
    text-align: center;
box-shadow: 0px 0px 8px 9px rgba(255, 0, 0, 0.582);
border-radius: 50%;
height: 20px;
padding: 1px 5px;
}
@media (min-width: 800px ) {
  .result__header
  {
    font-size: calc( (100vw - 1rem)/(80 - 70) * (1.5 - 1) + 1rem);
  }
  .result-item
  {
    font-size: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
    line-height: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
    margin-bottom: 40px !important;
  }
  .result-item strong
  {
    height: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
    width: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
   padding: 8px;
  }
}
</style>
