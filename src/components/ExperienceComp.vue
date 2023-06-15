<template>
  <section id="experience">
    <div class="experience__line-and-arrow">
        <div class="line"></div>
        <div class="experience__arrow"></div>
    </div>
    <div class="container">
      <div class="experience">
        <h2 class="experience__header">Какой опыт должен быть на старте?</h2>
        <div class="experience__img-one"><img src="@/assets/img/disp.jpg" alt="">
          <div class="experience__img-two"><img src="@/assets/img/disp2.jpg" alt=""></div></div>
        <div class="experience__block">
        <p class="experience__text">Тренинг рассчитан как на людей без опыта, так и для
             тех, кто знаком с трейдингом. Вы получите все основные навыки и знания для
             самостоятельной торговли и управлением своим капиталом.</p>
      </div>
        </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.experience
{
  margin-bottom: 120px;
}
.experience__header {
  max-width: 50vw;
  margin: 0px auto;
  text-align: center;
  font-size: 4vw;
  margin-top: 6vw;
}
.experience__img-one{
  width: 50%;
  position: relative;
  margin-bottom: 30px;
  margin-left:auto;
  top: 84px;
  margin-top: 0px;

}
.experience__img-two{
  width: 50%;
  position: relative;
  margin-bottom: 30px;
  margin-left: auto;
    border-radius: 20px;
    top: -50px;
}
.experience__img-one img{
  width: 70%;
  position: relative;
  margin-bottom: 30px;
  margin: 0px;
  top: 0px;
  border-radius: 20px;

}
.experience__img-two img{
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  margin: 0px;
  top: 0px;

}
.experience__block
{
    max-width: 70%;
    margin-left: 27px;
    position: relative;
}
.experience__text
{
display: inline-block;
position: relative;
}
.experience__block::before
{
  content: "";
  width: 50%;
  height: 5px;
  background-color: red;
  position: absolute;
  top: -35px;
  left: 0;
}
.experience__block::after
{
  content: "";
  width:5px;
  height:  60%;
  background-color: red;
  position: absolute;
  right: -15px;
  bottom: 0;
}
.experience__line-and-arrow
{
    position: relative;
}
.experience__arrow
{
    position: absolute;
    width: 56px;
    height: 56px;
    background-color: red;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    border-radius: 50%;
    top: -27px;
    background-image: url('@/assets/img/arrowCircle.png');
    background-position: center;
    background-size: 103%;
    background-repeat: no-repeat;
    border-radius: 50%;
}
.experience__line
{
    height: 4px;
    background-color: red;
    width: 125px;
    margin-bottom: 30px;
}
.experience__line-vertical
{
    width: 4px;
    background-color: red;
    height: 52px;
    margin-bottom: 30px;
    position: absolute;
    right: 0px;
    bottom: -20px;
}

@media (min-width: 800px) {
  .experience__text{
    font-size: calc( (100vw - 1rem)/(80 - 60) * (1.5 - 1) + 1rem);
  }
  .experience__img-one{
  top: 154px;

}
.experience__arrow
{
  transform: scale(2);
}
}
</style>
