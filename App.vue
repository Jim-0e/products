<template>
    <div>
    <the-header ></the-header>
    <app-tovar-vue></app-tovar-vue>
    </div>
</template>

<script>

import AppTovarVue from './components/AppTovar.vue'
import TheHeader from './navs/TheHeader.vue'
export default {
  components: { TheHeader, AppTovarVue},
  data() {
    return {
        tovars: [
            {id: 1, title:'Пельмени', price: 34, url: 'img/pelmeni.jpg'},
            {id: 2, title:'Сметана', price: 400, url: 'img/smetana.jpg'},
            {id: 3, title:'Молоко', price: 35, url: 'img/milk.jpg'},
            {id: 4, title:'Котлеты', price: 120, url: 'img/kotlets.jpg'},
            {id: 5, title:'Сыр', price: 440, url: 'img/sur.jpg'},
        ],
        isAuth: false,
    }
  },
  provide(){
    return{
        tovars: this.tovars
    }
  }
}
</script>