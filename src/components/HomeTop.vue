<template>
      <section id="home">
    <div class="container">
      <div class="home">
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
    </div>
  </section>
</template>
<script>
export default {

};
</script>
<style>
.home {
  background-image: url("@/assets/img/human.jpg");
  background-size: 100%;
  background-position: 0px 0px;
  width: 100%;
  min-height: 85vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
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
@media (min-width: 500px) {
  .home {
  background-image: url("@/assets/img/humanPC.jpg");
  background-size: 100%;
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
