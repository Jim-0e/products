<template>
<div>
    <div class="login">
        <a href="#" class="log">ВОЙТИ</a>
        <a href="#" v-on:click="log" class="reg">Регистрация</a>
    </div>

    <div class="nav">
        <li>Продукты</li>
        <li>Контакты</li>
        <li><router-link to="/korzina">Корзина</router-link></li>
        
        
    </div>
</div>
    
    
</template>

<script>

export default {
    
}
</script>

<style >
    * {
        font-family: Arial, Helvetica, sans-serif;
    }
</style>
<style scoped>
.log{
    /* position: relative; */
    background-color: rgba(11, 48, 38, 0.646);
    padding: 10px;
    border-radius: 15px;
    backdrop-filter: blur(5px);
}
.login{
    position: absolute;
    display: flex;
    width: max-content;
    align-items: center;
    padding: 4px 4px;
    font-size: 12px;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    left: 90%;
    box-shadow: 0px 3px 10px  black;
    transform: translateX(-90%);
    background: linear-gradient( rgba(35, 111, 81, 0.995) 15%,   rgba(65, 121, 116, 0.963) 100%);
}
a{
    display: block;
    margin-left: 5px;
    letter-spacing: 2px;
    color: white;
    text-decoration: none;
}
    .nav{
        position: fixed;
        z-index: 3;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 0rem 5rem;
        display: flex;
        border-radius: 20px 20px 0 0 ;
        background-color: rgba(73, 166, 144, 0.664);
        backdrop-filter: blur(5px);
        justify-content: space-around;
    }
    li{
        list-style-type: none;
        padding: 1rem 1rem;
        margin-left: 1rem;
        padding-bottom: 1.5rem;
        width: max-content;
        /* background-color: rgb(59, 97, 81); */
    }
    span{
        position: relative;
        right: -4rem;
    }
</style>