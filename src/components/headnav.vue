<style scoped>

#topnav{
  transform: translateY(-100%);
}
*{
  box-sizing: border-box;
}
li{
  list-style: none;
}
#headnav{
  position: absolute;
  top: 42%;
  right: 0;
  display: flex;
  background-color: transparent;
  height: 5%;
  width: 100%;
  z-index: 100;
}
.nav{
  display: flex;
  position: absolute;
  height: 100%;
  right: 0;
}
.nav .left{
  display: flex;
  align-items: center;
  height: 100%;
}
.nav .left li{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.9vh;
  /* width: 4vw; */
  padding: 0px 0.8vw;
  border-right: 2px solid white;
  background-color: transparent;
  cursor: pointer;
}
.nav .left li:last-child{
  border-right: none;
}
.nav .left li a{
  line-height: 3vh;
  color: white;
  font-size: 15px;
}
.nav .right{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1vw;
  margin-right: 1.6vw;
  cursor: pointer;
}
.nav .right img{
  display: block;
  margin-right: 0.5vw;
}
.nav .right span{
  font-size: 1.1rem;
}
.showright{
  align-self: center;
  margin-left: 3.2vw;
  position: relative;
  background-color: #fff;
  height: 4.2vh;
  width: 3.2vw;
  cursor: pointer;
}
.showright::before{
  background-color: #fff;
  position: absolute;
  left: -29%;
  top: 50%;
  transform: translateY(-50%);
  content: '';
  width: 4.22vh;
  height: 4.22vh;
  border-radius: 50%;
}
.showright i{
  color: #007aff;
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  display: inline-block;
  
}

</style>

<template>
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <div id="headnav">
    <div class="nav">
      <ul class="left">
        <li v-for="item in navmenu"
        @click="openhref(item.href)">
          <a>{{ item.title }}</a>
        </li>
      </ul>
      <div class="right" v-if="showtop" @click="updataTitle">
        <img src="https://www.sztu.edu.cn/images/menu.png" alt="">
        <span @click="showmeun = !showmeun">站内导航</span>
      </div>
      <div class="showright" v-else @click="updataTitle">
        <i class="ri-close-line"></i>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import { ref,Transition } from 'vue';
import Topnav from './topnav.vue';
const emit = defineEmits(['updata-title'])


const navmenu = ref([
  {
    id:1 ,
    title:'学生' ,
    href:'https://www.sztu.edu.cn/xs.htm'
  },
  {
    id:2 ,
    title:'教职工' ,
    href:'https://www.sztu.edu.cn/jzg.htm'
  },
  {
    id:3 ,
    title:'本科招生' ,
    href:'https://zs.sztu.edu.cn/'
  },
  {
    id:4 ,
    title:'研究生招生' ,
    href:'https://gra.sztu.edu.cn/zsxx/zsz.htm'
  },
  {
    id:5 ,
    title:'EN' ,
    href:'https://english.sztu.edu.cn/'
  }
])
const openhref = (tohref)=>{
  window.open(tohref,'_blank')
}

let showmeun = ref(false)
const showtop = ref(true)
const updataTitle = () => {
  showtop.value = !showtop.value
  emit('updata-title', showtop.value)
}
</script>