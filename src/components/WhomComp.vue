<!-- eslint-disable vuejs-accessibility/mouse-events-have-key-events -->
<template>
  <section id="whom">
    <div class="whom">
      <div class="whom__phone"></div>
              <div class="circle">
        <p class="circle__text">КОМУ ПОДОЙДЁТ ТРЕЙНИГ</p>
        <span class="circle__arrow"></span>
      </div>
      <div class="run-line-container">
        <div class="wrap">
  <div class="items-wrap">
    <div class="items marquee">
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>

    </div>
    <div aria-hidden="true" class="items marquee">
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item marquee2">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
      <div class="item">ВРЕМЯ ДЕЙСТВОВАТЬ</div>
    </div>
  </div>

</div>
      </div>
    </div>
    <div class="parallax-wrap" @mousemove="Parallax" @mouseleave="ParallaxStart">
    <div class="whom-circles">
      <ul class="circles" >
        <li class="circle-item" value="-2">
            <div class="circle-inside">
                <h4 class="circle-whow__header">Новички в трейдинге</h4>
            <p class="circle-whow__text">Получите точку входа в трейдинг,
                 изучив главные азы системной и безубыточной торговли
            </p>
            </div>
          <div class="circle-whow">
            <ul class="circle-item__text">
            </ul>
        </div>
        </li>
        <li class="circle-item"  value="-1">
            <div class="circle-inside">
                <h4 class="circle-whow__header">Предприниматели</h4>
            <p class="circle-whow__text">Обретите новый источник дохода,
                 диверсифицировав свой капитал
            </p>
            </div>
          <div class="circle-whow">
            <ul class="circle-item__text">
            </ul>
        </div>
        </li>
        <li class="circle-item"  value="2">
            <div class="circle-inside">
                <h4 class="circle-whow__header">Топ-менеджеры</h4>
            <p class="circle-whow__text">Освойте новую, независимую профессию,
                 которая даст новые возможности
            </p>
            </div>
          <div class="circle-whow">
            <ul class="circle-item__text">
            </ul>
        </div>
        </li>
        <li class="circle-item"  value="-3">
            <div class="circle-inside">
                <h4 class="circle-whow__header">Трейдеры с опытом</h4>
            <p class="circle-whow__text">Отточите свои навыки и знания в трейдинге,
                 чтобы повысить уровень своей торговли
            </p>
            </div>
          <div class="circle-whow">
            <ul class="circle-item__text">
            </ul>
        </div>
        </li>
      </ul>
    </div>
  </div>
  </section>
</template>
<script>
export default {
  methods: {
    Parallax(event) {
      const mobileWidthMediaQuery = window.matchMedia('(min-width: 800px)');
      if (mobileWidthMediaQuery.matches) {
        document.querySelectorAll('.circle-item').forEach((item) => {
          const position = item.getAttribute('value');
          const d = document.querySelector('.parallax-wrap');
          const x = (window.innerWidth - event.pageX * position) / 90;
          const y = (window.innerWidth - (event.pageY - d.offsetTop) * position) / 90;
          // eslint-disable-next-line no-param-reassign
          item.setAttribute('style', `transition: all 0.5s lineral; transform: translate(${x}px, ${y}px);`);
        });
      }
    },
    ParallaxStart() {
      document.querySelectorAll('.circle-item').forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.setAttribute('style', 'transition: all 2s ease-in-out; transform: translate(0px, 0px);');
      });
    },
  },
};
</script>
<style>
.whom {
  position: relative;
  overflow: hidden;
}

.circle {
  display: flex;
  height: 200px;
  width: 200px;
  border: 10px solid #ff1818;
  border-radius: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 900;
  font-size: 24px;
  position: absolute;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 170px;
  text-align: center;
  background-color: black;
}
.circle__arrow
{
  background-image: url('@/assets/img/arrow.png');
  height: 30px;
  width: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  animation: arrow 3s infinite linear;
}
@keyframes arrow {
  0%{
    transform: translateY(5px);
  }
  50%{
    transform: translateY(20px);
  }
  100%{
    transform: translateY(5px);
  }
}
.marquee2
{
  -webkit-text-stroke:2px rgb(255, 0, 0);
  -webkit-text-fill-color:transparent;
}
.whom__phone {
  margin-top: 62px;
  height: 225px;
  background-image: url("@/assets/img/phones.png");
  z-index: 8;
  position: relative;
  top: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  background-position: center 50px;
}
.line {
  width: 100vw;
  border-top: 6px solid white;
  margin-bottom: 24px;
}
.run-line-container {
  overflow: hidden;
  display: flex;
  position: relative;
  margin-bottom: 140px;
  border-top: 8px solid white ;
  padding-top: 20px;
  z-index: 5;
  max-width: 100vw;
  overflow: hidden;
}

.run-line::after {
  content: "ВРЕМЯ ДЕЙСТВОВАТЬ";
  position: absolute;
  right: -50%;
}

@keyframes runLine1 {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(-100vw);
  }
}
@keyframes runLine2 {
  0% {
    transform: translateX(100vw);
  }

  100% {
    transform: translateX(-100vw);
  }
}

.circles
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   padding: 35px;
   padding-bottom: 0px;
   overflow: hidden;

}
.circle-whow {
  display: flex;
  border-radius: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 900;
  font-size: 24px;
  z-index: 3;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  animation: circleText 13s infinite linear;
    transform-origin: center;
}
.circle-item
{
    position: relative;
    align-items: center;
    animation: swimcircle 13s infinite ease-in-out;

}
/* 1 */
.circle-item:nth-child(1){
margin-left: 100px;
z-index: 6;

}
.circle-item:nth-child(1) .circle-whow {
    background-color: #FF0F00;
    height: 230px;
  width: 230px;
  right: 200px;
  animation-delay: 1s;
}
.circle-item:nth-child(1) .circle-item__text
{
    background-image: url('@/assets/img/beginner.png');
    width: 150px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0px -20px;
    left: -35px;
    top: -25px;
}
.circle-item:nth-child(1) .circle-inside{
    top: 48px;
}
/* 2 */
.circle-item:nth-child(2){
    margin-right: 100px;
    top: -40px;
z-index: 6;
animation-delay: 4s;
}

.circle-item:nth-child(2) .circle-whow {
    background-color: rgb(141, 138, 138);
    height: 220px;
  width: 220px;
  right: 200px;
  animation-delay: 6s;
}
.circle-item:nth-child(2) .circle-item__text
{
    background-image: url('@/assets/img/newtext.png');
    width: 290px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -10px 0px;
    top: -30px;
    left: -37px;
}
.circle-item:nth-child(2) .circle-inside{
    top: 68px;
}
/* 3 */

.circle-item:nth-child(3){
    margin-left: 100px;
z-index: 8;
top: -80px;
animation-delay: 10s;
}
.circle-item:nth-child(3) .circle-whow {
    background-color: rgb(255, 255, 255);
    height: 190px;
  width: 190px;
  right: 200px;
  animation-delay: 14s;
}
.circle-item:nth-child(3) .circle-item__text
{
    background-image: url('@/assets/img/TOPm.png');
    width: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -52px -30px;

}
.circle-item:nth-child(3) .circle-inside{
    top: 58px;
}
/* 4 */
.circle-item:nth-child(4){
    margin-right: 0px;
z-index: 10;
top: -100px;
animation-delay: 3s;
}
.circle-item:nth-child(4) .circle-whow {
    background-color: #BD0E0E;
    height: 190px;
  width: 190px;
  right: 200px;
  animation-delay: 2s;
}
.circle-item:nth-child(4) .circle-item__text
{
    background-image: url('@/assets/img//TREYD.png');
    width: 330px;
    height: 300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -52px -41px;
    left: -38px;
    top: -48px;

}

.circle-whow__header
{
    font-size: 20px;
    font-weight: 700;
    color: rgb(0, 0, 0);
    max-width: 200px;

}
.circle-whow__text
{
    font-weight: 400;
    font-size: 14px;
    color: rgb(0, 0, 0);
    margin-top: 5px;
    max-width: 200px;
}
.circle-item__text{
    min-height: 130%;
    position: absolute;
    display: flex;
}
.circle-item__text-letter{
    position: absolute;
    top: 0px;
    transform-origin: center;
    min-height: 100%;
    right: -8px;
    font-size: 32px;
}
.circle-inside
{
width: 100%;
top: 45px;
z-index: 5;
text-align: center;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;

}
.wrap {
 width: 100%;
  margin: auto;
}
.items-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  max-width: 100vw;
}

.items {
  flex-shrink: 0;
  display: flex;
  counter-reset: item;
  justify-content: space-around;
  min-width: 100%;
}
.item {
  flex: 0 0 auto;
  font-size: 25px;
  color: #ffffff;
  margin:0px 5px ;
  font-weight: 900;
  font-size: 21px;
}
.marquee {
  animation: scroll 20s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}

@keyframes circleText {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

@keyframes swimcircle {
    0%{
        transform: translate(0px, 0px);
    }
    25%{
        transform: translate(-15px, 12px);
    }
    50%{
        transform: translate(15px, -12px);
    }
    75%{
        transform: translate(-15px, -12px);
    }
    100%{
        transform: translate(0px, 0px);
    }
}
@media (min-width: 800px) {
  .circle-whow {

  animation: none;

}
.circle-item{
  animation: none;
  transform: none;
  transition: all .2s linear;

}
  .circle{
    transform: scale(2);
    top: 550px;
    position: relative;
    top:50px;
  }
  .whom__phone
  {
    margin-top: 0px;
    background-size: 1200px;
    height: 500px;
    top: 208px;
    background-position: center 0px;
  }
  .whom{
    padding-bottom: 0px;
  }
  .circles{
    flex-direction: row;
    padding: 0px 40px;
  }

  .circle-item:nth-child(1)
  {
    margin: 0px;
    margin-top: 0px;
    left: 0px;
    z-index: 1;
  }
  .circle-item:nth-child(2)
  {
    margin: 0px;
    margin-top: 200px;
    left: 0px;
    z-index: 2;
  }
  .circle-item:nth-child(3)
  {
    margin: 0px;
    margin-top: 150px;
    right: 0px;
    z-index: 3;
  }
  .circle-item:nth-child(4)
  {
    margin: 0px;
    margin-top: 350px;
    right: 0px;
    z-index: 2;
  }
  .circle-item__text
  {
    display: none;
  }
  .circle-inside
  {
       display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    top: 0px !important;
  }
  .circle-whow__header
  {
    font-size: 2.4vw;
    max-width: none;
  }
  .circle-whow__text
  {
    font-size: 1.7vw;
    max-width: 100%;
    padding: 0px 15%;

  }
  .circle-item:nth-child(1) .circle-whow__text
  {
    font-size: 2.3vw !important;
    padding: 0 2.5vw;
  }
  .circle-item:nth-child(2) .circle-whow__text
  {
    font-size: 2vw !important;
    padding: 0 2.5vw;
  }
  .circle-item:nth-child(4) .circle-whow__text
  {
    font-size: 2.2vw !important;
    padding: 0 2.5vw;
  }
  .circles
  {
    padding: 10vw 0px;
  }
  .circle-item:nth-child(1)
  {
    top: 1vw;
    left: 6vw;
  }
  .circle-item:nth-child(2)
  {
    top: 3vw;
    left:18vw;
  }
  .circle-item:nth-child(3)
  {
    top: -13vw;
    left: -25vw;

  }
  .circle-item:nth-child(4)
  {
    top: -15vw;
    left: -10vw;
  }
  .circle-item:nth-child(1) .circle-whow
  {
    height: 35vw !important;
    width: 35vw !important;
    background-color: white;
  }
  .circle-item:nth-child(2) .circle-whow
  {
    height: 28vw !important;
    width: 28vw !important;
  }
  .circle-item:nth-child(3) .circle-whow
  {
    height: 24vw !important;
    width: 24vw !important;
    background-color: #BD0E0E;
  }
  .circle-item:nth-child(4) .circle-whow
  {
    height: 30vw !important;
    width: 30vw !important;
    background-color: red;
  }
  .circles
  {
    justify-content: space-around;
  }
  @keyframes swimcircle {
    0%{
        transform: translate(0px, 0px) scale(1.2);
    }
    25%{
        transform: translate(-15px, 12px) scale(1.2);
    }
    50%{
        transform: translate(15px, -12px) scale(1.2);
    }
    75%{
        transform: translate(-15px, -12px) scale(1.2);
    }
    100%{
        transform: translate(0px, 0px) scale(1.2);
    }
}
}
</style>
