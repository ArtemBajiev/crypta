<template>
    <section id="result-learn">
        <h2 class="result-learn__header">РЕЗУЛЬТАТЫ ОБУЧЕНИЯ</h2>
        <div class="container">
            <div class="result-learn">
                <ul class="result-learn-all">
                    <li class="result-learn-item"
                    v-for="result in results" :key="result.headerResult">
                        <h4 class="result-learn-item__header">{{ result.headerResult }}</h4>
                        <p class="result-learn-item__text">{{ result.textResult }}</p>
                        <span class="result-learn-item__header-vertical">
                          {{ result.headerResult }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
      results: [
        {
          headerResult: 'НАВЫК',
          textResult: `Освоили навык торговли
криптовалютой по концепту
«умные деньги / Smart Money»`,
        },
        {
          headerResult: 'РАЗБОР',
          textResult: `Получили поддержку менторов
и разбор ваших вопросов
в режиме лайв`,
        },
        {
          headerResult: 'ПОНИМАНИЕ',
          textResult: `Получили понимание структуры и механики
рынка, научились анализировать монеты
для внутридневной торговли`,
        },
        {
          headerResult: 'СДЕЛКИ',
          textResult: `Провели свои первые сделки
в трейдинге криптовалют
и вышли в плюс`,
        },
        {
          headerResult: 'МАТЕРИАЛЫ',
          textResult: `Получили аналитику, видеозаписи уроков
и все дополнительные материалы`,
        },
        {
          headerResult: 'ПРОФЕЛЬ',
          textResult: `Научились и знаете как отбирать
монеты в свой портфель на долгий
и короткий срок`,
        },
      ],
    };
  },
};
</script>
<style scoped>
.result-learn__header{
    padding: 4vw;
    border: 2px solid rgb(255, 255, 255);
    border-left: 0px;
    display: block;
    font-size: 4vw;
    font-weight: 900;
    margin-right: 25px;
    position: relative;
    text-align: end;
    margin-right: 25vw;
}
.result-learn__header::before{
    content: "";
    width: 3vw;
    height: 20px;
    background-color: black;
    position: absolute;
    bottom: -10px;
    left: 0px;
}
.result-learn-all
{
    display: flex;
    flex-wrap: wrap;
    border-left: 3px solid white;
    padding-top: 5px;
    border-bottom: 3px solid white;
    padding-bottom: 20px;
    max-width: 94vw;
    margin: 0px auto;
}
.result-learn-item
{
    background-color: rgba(157, 157, 157, 1);
    width: 42vw;
    height: 42vw;
    margin: 2vw;
    position: relative;
    padding: 5px;
}

.result-learn-item__header
{
  font-size: 4.8vw;
    text-align: center;
    padding: 15px 0px 0px 0px;
    color: black;
    margin-bottom: 5px;

}
.result-learn-item__text
{
  font-size: 3vw;
    padding: 10px 7px;
    color: black;
}
.result-learn-item__header-vertical
{
  font-size: 15vw;
    display: block;
    color: red;
    transform: rotate(90deg);
    position: absolute;
    font-size: 2.5vw;
  top: 20px;
  right: 0px;
  width: 1px;
}
.result-learn-item:nth-child(1), .result-learn-item:nth-child(2)
{
  background-color: red;
}
.result-learn-item:nth-child(1) .result-learn-item__header-vertical,
 .result-learn-item:nth-child(2) .result-learn-item__header-vertical
 {
  color: white;
 }
 .result-learn-item:nth-child(3), .result-learn-item:nth-child(4)
{
  background-color: rgb(255, 255, 255);
}
.result-learn-item:nth-child(3) .result-learn-item__header-vertical,
 .result-learn-item:nth-child(4) .result-learn-item__header-vertical
 {
  color: rgba(157, 157, 157, 1);
;
 }
@media (min-width: 800px) {
  .result-learn-item
  {
    width: 27vw;
    height: 27vw;
    background-color: rgba(157, 157, 157, 1) !important;
    transition: background-color 1s ease ;
  }
  .result-learn-item:hover
  {
    background-color: red !important;
  }
  .result-learn-item__header-vertical{
    color: rgb(255, 0, 0) !important;
    transition: color 1s ease;
  }
  .result-learn-item:hover .result-learn-item__header-vertical
  {
    color: white !important;
  }
  .result-learn-item__text
{
  font-size: 2.3vw !important;
}
.result-learn-item__header
{
  font-size: 3vw;

}
.result-learn-item__text
{
  font-size: 1.8vw;
}
.result-learn__header
{
  font-size: 3.8vw;
}

}
</style>
