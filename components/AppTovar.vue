<template>
    <div class="center">
        <form  action="" @click.prevent="">
            <input  class="search" v-model="search" type="text">
            <button @click="findTovar" class="btn-search color">Поиск</button>
        </form>

            <!-- <h3>{{titleTovar}}</h3>
            <h3>ref: {{inputref}}</h3> -->
    <div >
    <h3 align="center">ДОМАШНЕЕ</h3>
<h1 >{{search}}</h1> 
    <div  class="wrapper">
        
        <!-- <div class="card" v-for="item in tovars" :key="item">
            <div class="img">
                <img width="80%" height="100%" :src="item.url" alt="">
            </div>
            <div class="desc">
                <h3>{{item.title}}</h3>
                <p>{{ item.price}} Рyб.</p>
                <button  class="btn-search">В Корзину</button>

            </div>
            
        </div> -->

        <div  class="card" v-for="prod in filtr" :key="prod">
            <div class="img">
                <img width="80%" height="100%" :src="prod.url" alt="">
            </div>
            <div class="desc">
                <h3>{{prod.title}}</h3>
                <p>{{ prod.price}} Рyб.</p>
                <button  class="btn-search">В Корзину</button>

            </div>

        </div>

    </div>
    

        

    </div> 
        
    </div>

</template>

<script>

export default {
    data(){
        return{
            titleTovar: '',
            findTov: '',
            search: '',
            noteProduct: 'Note',
        }
    },
    computed:{
        filtr(){
            return this.tovars.filter((p)=>{
                
                return p.title.toLowerCase().includes(this.search.toLowerCase())
               
            })
        }
    },
    inject: ['tovars'],

}
</script>

<style scoped >
input{
    margin-top: 15px;
}
.color{
    padding: 6px 7px !important;
    background-color: rgb(195, 212, 224) !important;
}
.wrapper{
    display: grid;
    grid-template-columns:  repeat(auto-fit, minmax(300px, 1fr));;
    gap: 30px;
}
.desc{
    padding-left: 1rem;
}
.img{
    /* position: absolute; */
    width: 100%;
    height: 50%;
}
.card{
    position: relative;
    width: 300px;
    height: 300px;
    border:1px solid rgb(196, 196, 196);
    box-shadow: 0px 0px 3px gray;
    margin-top: 1rem;
}
    .center{
        width: 50%;
        position: relative;
        top: 4rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .search{
        width: 80%;
        border: 1px solid green;
        padding: 10px;
        border-radius: 20px;
    }
    .btn-search{
        background-color: rgb(49, 186, 145);
        padding: 5px;
        border-radius: 10px;
        border: none;
        margin-left: 5px;
    }

</style>