<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
   <section id="form">
    <div class="container">
        <div class="statement">
            <div class="statement__header-and-free">
               <h2 class="statement__header">Запишитесь на тренинг и в скором времени мы
             отправим вам письмо, где будет ссылка на тренинг</h2>
        <span class="statement__header-free">Стоимость тренинга: бесплатно</span>
    </div>
<form class="statement__form">
    <div class="statement__form__input-item">
    <label class="statement__form__label" for="name">Имя</label>
        <input class="statement__form__input" name="name" id="name" type="text" >
        </div>
        <div class="statement__form__input-item">
    <label for="email" class="statement__form__label">E-Mail</label>
        <input name="email" class="statement__form__input" id="email" type="text">
        </div>
    <button class="statement__form__btn">Записаться</button>
</form>
</div>
      </div>
   </section>
</template>
<script>
export default {

};
</script>
<style>
.statement__header-and-free
{
    width: 70vw;
margin: 0px auto;
margin-top: 20px;
}
.statement{
    padding-bottom: 40px;
}
.statement__header
{
    margin-bottom: 10px;
}
.statement__header-free
{
    width: 60vw;
    color: red;
    font-size: 16px;
    font-weight: 900;
}
.statement__form
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    min-width: 319px;
    min-height: 146px;
    width: 70vw;
    height: 30vw;
    border-radius: 10px;
    padding: 16px;
    margin: 0px auto;
    margin-top: 8vw;
    box-shadow: -5vw -5vw 0px 0px rgba(189, 14, 14, 1) ;
}
.statement__form__input
{
min-height: 20px;
height: 5vw;
border-color: transparent;
border-radius: 6px;
width: 70%;
background-color: #D9D9D9;
margin-left: auto;
}
.statement__form__label{
    color:rgba(157, 157, 157, 1) ;
    white-space: nowrap;
    font-weight: 700;
    width: 30%;
    text-align: right;
    padding-right: 10px;
    height: 5vw;
    font-size: 5vw;

}
.statement__form__input
{
    font-size: 20px;
    color: black;
    font-weight: 700;
}
.statement__form__input-item
{
    display: flex;
    margin-bottom: 9px;

}
.statement__form__btn
{
    background-color: red;
    color: black;
    min-width: 132px;
    margin-left: auto;
    margin-top: 20px;
    margin-right: 16px;
    min-height: 25px;
    border: 0px solid transparent;
    border-radius: 20px;
    font-weight: 700;
    font-size: 16px;
}
@media (min-width:800px)
{
    .statement__header-and-free
    {
        margin: 5vw auto;
    }
    .statement__header
    {
        font-size: 3vw;
    }
    .statement__header-free
    {
        font-size: 2vw;
    }
    .statement__form__btn
    {
        padding: 2vw 5vw;
        font-size: 2vw;
    }
    .statement__form__input
    {
        font-size: 3vw;
        padding: .5vw;
    }
}
</style>
