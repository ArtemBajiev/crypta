<template>
      <section id="home">
    <div data-speed="1.7" class="container contain__hom">
      <div class="home">
      </div>
      <div class="layer"></div>
      <div class="home__text-and-img">
        <div class="header-text">
          <p class="header-text__left">ВРЕМЯ НАЧАТЬ <br />ПРЯМО</p>
          <p class="header-text__right">
            ЗАРАБАТЫВАТЬ<br />
            СЕЙЧАС
          </p>
        </div>
        <span class="img__now"></span>
        </div>
    </div>
  </section>
</template>
<script>
export default {

};
</script>
<style>

.contain__hom
{
  transform-style: preserve-3d;
  will-change: transform;
    transition: transform 2s cubic-bezier(0.050, 0.500, 0.000, 1.000);
  transform: rotateX(var(--move-X)) rotateY(var(--move-Y));
}
.home {
  background-image: url("@/assets/img/human.jpg");
  background-size: 100%;
  background-position: 0px 0px;
  width: 100%;
  min-height: 85vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  transform: translateZ(0px);
}
.layer
{
  position: absolute;
  width: 100%;
  height: 100vh;
  background-size: 30%;
  background-position: 45% 100%;
  background-repeat: no-repeat;
  inset: 0px;
  background-attachment: fixed;
  display: flex;
  transform: translateZ(300px);

}
.home__text-and-img
{
  transform: translateZ(100px);
  position: absolute;
  top: 10vw;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header-text {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 54px;
  line-height: 20px;
  font-size: 20px;
  z-index: 10;
}
.header-text__left {
  text-align: right;
  color: rgba(255, 0, 0, 1);
}
.header-text * {
  margin: 3px;
}
.img__now {
  display: block;
  background-image: url("@/assets/img/Now.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 54px;
  width: 133px;
  margin: 0px auto;
}
@media (min-width: 800px) {
  #home
{
  perspective: 1000px;
  overflow: hidden;
}
.layer
{

  background-image: url('../assets/img/sloy1.png');
}
  .home {
  background-image: url("@/assets/img/humanPC.png");
  background-size: 110%;
  background-position: top;
    min-height: 100vh;
}
.header-text {

  position: absolute;
  bottom: 59px;
}
.img__now {
  position: absolute;
  bottom: 0px;
}
.home__text-and-img{
  right: 19.5vw;
  position: absolute;
  width: 400px;
  bottom: 40px;
  right: 15vw;
  height: 500px;
  display: flex;
  justify-content: center;
}
}
</style>
