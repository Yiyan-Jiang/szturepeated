<style scoped>
#second{
  background-image: url(https://www.sztu.edu.cn/images/hbg4.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 1204px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
#second::before{
  content: '';
  background-color: red;
  background-image: linear-gradient(to top, #ffffff, #F3F3F4);;
  width: 100%;
  height: 15vh;
  position: absolute;
  bottom: -15vh;
  z-index: 1;
} 
.gotosztu{
  height: 15vh;
  width: 100%;
  margin: 5vh 0;
  margin-bottom: 0;
  position: relative;
}
.gotosztu .pre{
  position: absolute;
  left: 0;
  background-color: #F6F8FA;
  min-height: 100%;
  min-width: 5%;
  z-index: 100;
}
.gotosztu .next{
  position: absolute;
  right: 0;
  background-color: #F6F8FA;
  min-height: 100%;
  min-width: 1%;
  z-index: 100;
}
.gotosztutitle h1{
  justify-self: center;
  width: 12vw;
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 0px;
  cursor: pointer;
  color: #333;
  line-height: 6rem;
}
.gotosztutitle .text{
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 3vh;
}
.gotosztutitle .text span{
  color: rgb(182, 207, 235);
  font-size: 1.4rem;
  line-height: 0rem;
}
.gotosztutitle .text img{
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
}
.numberbigbox{
  margin: 110px 0;
  margin-bottom: 20px;
  min-width: 90vw;
  min-height: 50vh;
  position: relative;
}
.numberbigbox .numberbox1,
.numberbigbox .numberbox2,
.numberbigbox .numberbox3,
.numberbigbox .numberbox4,
.numberbigbox .numberbox5,
.numberbigbox .numberbox6,
.numberbigbox .numberbox7{
  height: 15rem;
  width: 10rem;
  position: absolute;
  line-height: 1rem;
  display: flex;
  flex-direction: column;
}
.numberbigbox span{
  font-size: 2.9rem;
  font-weight: 600;
  line-height: 3.2rem;
  color: rgb(7, 64, 152);
  margin-bottom: 0.5rem;
}
.numberbigbox p{
  color: rgb(7, 64, 152);
  font-size: 1.1rem;
  line-height: 1.4rem;
  font-weight: 600;
}
.numberbigbox .numberbox1{
  top: 0;
  left: 0;
}
.numberbigbox .numberbox2{
  top: 15%;
  left: 15%;
}
.numberbigbox .numberbox3{
  top: 30%;
  left: 30%;
}
.numberbigbox .numberbox4{
  top: 45%;
  left: 49.9%;
  transform: translateX(-50%);
  z-index: 1;
}
.numberbigbox .numberbox5{
  top: 30%;
  right: 30%;
}
.numberbigbox .numberbox6{
  top: 15%;
  right: 15%;
}
.numberbigbox .numberbox7{
  top: 0;
  right: 0;
}
.swbtnbox{
  min-width: 20vw;
  min-height: 6vh;
  display: flex;
  justify-content: space-around;
  z-index: 1;
}
.swbtnbox .tecbtn,
.swbtnbox .stubtn{
  margin-top: 4vh;
  min-width: 9rem;
  height: 6vh;
  background-color: white;
  border-radius: 2rem;
  color: rgb(7, 64, 152);/* rgb(255, 194, 64);*/
  font-size: 1.2rem;
  line-height: 6vh;
  border: 1px solid rgb(7, 64, 152);
  transition: all 0.3s;
  cursor: pointer;
}
.swiperF{
  height: 60vh;
  width: 95.8vw;
  margin-left: 4.2vw;
  background-color: #fff;
  z-index: 10;
}

/* 动画css */
.scolltop{
  opacity: 0;
  transform: translateY(120px);
  transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.scollleft{
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.scollright{
  opacity: 0;
  transform: translateX(100px);
  transition: all 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}
.waterbox.in-view,
.underwater.in-view ,
.upbox.in-view,
.scollleft.in-view,
.scollright.in-view,
.scolltop.in-view{
  opacity: 1 !important;
  transform: translateY(0) ;
}
</style>

<template>
  <div id="second">
    <div class="gotosztutitle scolltop" v-scroll-animate>
      <h1>入读技大</h1>
      <div class="text">
        <span>Admissons</span>
        <img src="https://www.sztu.edu.cn/images/tit.png">
       </div>
    </div>
    <div class="gotosztu scollright" v-scroll-animate>
      <div class="pre"></div>
      <SwiperD></SwiperD>
    </div>
    <div class="gotosztu scollleft" v-scroll-animate>
      <div class="next"></div>
      <SwiperE></SwiperE>
    </div>
    <div class="numberbigbox scolltop" v-scroll-animate>
      <div class="numberbox1">
        <div><img src="https://www.sztu.edu.cn/images/h4-line.png"></div>
        <Count :target="258"></Count>
        <p>与258家行业<br>龙头、知名企业签约</p>
      </div>
      <div class="numberbox2">
        <div><img src="https://www.sztu.edu.cn/images/h4-line.png"></div>
        <Count :target="17"></Count>
        <p>学院</p>
      </div>
      <div class="numberbox3">
        <div><img src="https://www.sztu.edu.cn/images/h4-line.png"></div>
        <Count :target="110"></Count>
        <p>与110所境外<br>高校、机构签约</p>
      </div>
      <div class="numberbox4">
        <div><img src="https://www.sztu.edu.cn/images/h4-line.png"></div>
        <Count :target="2018"></Count>
        <p>11月经教育部批准<br>正式设立</p>
      </div>
      <div class="numberbox5">
        <div><img src="https://www.sztu.edu.cn/images/h4-line.png"></div>
        <Count :target="40"></Count>
        <p>专业</p>
      </div>
      <div class="numberbox6">
        <div><img src="https://www.sztu.edu.cn/images/h4-line.png"></div>
        <Count :target="18"></Count>
        <p>省市级各类<br>科研平台</p>
      </div>
      <div class="numberbox7">
        <div><img src="https://www.sztu.edu.cn/images/h4-line.png"></div>
        <Count :target="49"></Count>
        <p>校企联合共建<br>实验室</p>
      </div>
    </div>
    <div class="swbtnbox scolltop" v-scroll-animate>
      <div class="tecbtn" :style="btnstyle(choosebtn)" @click="choosebtn = true">师资力量</div>
      <div class="stubtn" :style="btnstyle(!choosebtn)" @click="choosebtn = false">学生风采</div>
    </div>
  </div>
  <!-- <Transition> -->
    <div class="swiperF"><SwiperF v-if="choosebtn" class="scolltop" v-scroll-animate></SwiperF><SwiperG v-else></SwiperG></div>
  <!-- </Transition> -->
  <Upanddown></Upanddown>
</template>

<script setup>
import { ref } from 'vue';
import Count from './Count.vue';
import SwiperD from './swiperD.vue';
import SwiperE from './swiperE.vue';
import SwiperF from './swiperF.vue';
import SwiperG from './swiperG.vue';
import Upanddown from './upanddown.vue';


const choosebtn = ref(true)
const btnstyle = (btn) => {
  if(btn){
    return{
      color: 'rgb(255, 194, 64)',
      backgroundImage: `url('https://www.sztu.edu.cn/images/h8-t.png')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }
  }
  return {
    opacity:'1'
  }
}
</script>