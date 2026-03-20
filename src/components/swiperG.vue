<style scoped>
.mySwiper {
  width: 100%;
  height: 600px;
  padding: 20px 0;
}

.swiper-slide {
  text-align: start;
  font-size: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.swiper-slide .bgcimg{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  object-fit:cover;
  transition: all 0.4s;
  z-index: -1;
  object-position: center 0;
}
.swiper-slide:hover .bgcimg{
  transform: scale(1.08);
}
.mySwiper .swiper-slide{
  height: 320px;
  cursor: pointer;
}
.swiper-slide-active{
  height: 450px !important;
}
.swiper-slide::before{
  content: '';
  position: absolute;
  bottom: 0;
  height: 40%;
  width: 100%;
  background-image: linear-gradient(
    0deg, 
    rgba(0, 0, 0, 0.5) 0%, 
    rgba(2, 57, 148, 0) 100%);
  border-radius: 0px 0px 12px 12px;
}
.swiper-slide-active::before{
  background-image: linear-gradient(
    0deg, 
    rgba(2, 57, 148, 0.7) 0%, 
    rgba(2, 57, 148, 0) 100%);
}
.swiper-slide-active h3{
  bottom: 1vh !important;
  line-height: 1rem;
  margin-bottom: 2vh !important;
}
.swiper-slide h3{
  color: white;
  line-height: 1rem;
  margin-bottom: 3vh;
}
.swiper-slide img{
  position: absolute;
  left: -1vw;
  top: -1vh;
}
p{
  font-size: 0.75rem;
  line-height: 1rem;
  display: none ;
}
.swiper-slide-active p{
  display: block;
  white-space: pre-line;

}
.text{
  position: absolute;
  bottom: 0;
  left: 1vw;
  width: 100%;
  display: flex;
  flex-direction: column;
}
button{
  height: 4rem;
  width: 4rem;
  background-color: transparent;
  outline: none;
  border: 1px solid rgb(7, 64, 152);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}
.custom-navigation{
  position: absolute;
  bottom: 5rem;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 28%;
  transform: translateX(-50%);
}
.custom-navigation i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color:rgb(7, 64, 152) ;
  font-size: 1.3rem;
}
</style>


<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <swiper
    :slides-per-view="5"
    :space-between="25"
    :centered-slides="true"
    :modules="modules"
    :loop="true"
    :autoplay="autoplayOptions"
    :navigation="{
      prevEl: '.custom-prev',
      nextEl: '.custom-next'
    }"
    class="mySwiper"
  >
    <swiper-slide 
    v-for="item in menu"
    @click = 'this.$gototheurl(item.href)' 
    :key="n"
    >
    <img :src="item.img" class="bgcimg">
    <div class="text">
       <div style="width: 13px; height: 25px; background-image: url(https://www.sztu.edu.cn/images/h8-i.png); position: absolute; left: -1rem; top: -.5rem;"></div>
      <!-- <img src="https://www.sztu.edu.cn/images/h8-i.png" alt=""> -->
      <h3>{{ item.Name }}</h3>
      <p>{{ item.introduction }}</p>
    </div>
    </swiper-slide>
    <div class="custom-navigation">
      <button class="custom-prev"><i class="fas fa-chevron-left"></i></button>
      <button class="custom-next"><i class="fas fa-chevron-right"></i></button>
    </div>
  </swiper>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'   
import 'swiper/css/navigation'

import { Autoplay ,Navigation} from 'swiper/modules'

const modules = [Autoplay,Navigation]

const autoplayOptions = {
  delay: 5000,                    
  disableOnInteraction: false,    
  pauseOnMouseEnter: true,       
  reverseDirection: false        
}

const menu = [
  {
    Name:'周思彤',
    introduction:`城市交通与物流学院
2024届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/Qx6-aJTBzX4DNbmU74H9fA',
    img:'https://www.sztu.edu.cn/__local/0/0D/A5/168512B1128F69DB4C50807125D_CA9AB38F_645F1.png'
  },
  {
    Name:'赖思通',
    introduction:`大数据与互联网学院
2024届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/zmHQGeRzk5hEmNovJlkSbA',
    img:'https://www.sztu.edu.cn/__local/B/83/3C/8793CE362F299E1890601037A1F_8BE413F7_30D41.png'
  },
  {
    Name:'李思迪',
    introduction:`中德智能制造学院
2022届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/kFEq2fgqEtDhJJbcjs65eQ',
    img:'https://www.sztu.edu.cn/__local/4/ED/37/0A362E761D83B2892083A22CE1C_6A53DFEF_3DF02.png'
  },
  {
    Name:'李天绘',
    introduction:`研究生院
2024届硕士毕业生`,
    href:'https://mp.weixin.qq.com/s/zKX5vCTdo0_AAJsLupAmXg',
    img:'https://www.sztu.edu.cn/__local/4/8D/73/C32118CD2060EE672C1D8DF965B_924C3D26_63826.png'
  },
  {
    Name:'谭海怡',
    introduction:`商学院
2023届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/IfkXImvF2vIF9qwDzgS_mQ',
    img:'https://www.sztu.edu.cn/__local/3/E1/39/9BCFC94BA98D69F51B8A089FE67_7093D177_40EEF.png'
  },
  {
    Name:'张国平',
    introduction:`新材料与新能源学院
2024届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/5gyZ53TSNMH12sKFR4DItw',
    img:'https://www.sztu.edu.cn/__local/1/2D/96/0C92D2A5636D4AC3362A675EEC4_BB7E35F7_63D1E.png'
  },
  {
    Name:'张锐添',
    introduction:`大数据与互联网学院
2025届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/Z2Pu4o1MS7lkHeJBUcxwzA',
    img:'https://www.sztu.edu.cn/__local/D/86/94/4038538945748CF381EFB9D4BB5_810081FC_9E10.jpg'
  },
  {
    Name:'周思彤',
    introduction:`城市交通与物流学院
2024届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/Qx6-aJTBzX4DNbmU74H9fA',
    img:'https://www.sztu.edu.cn/__local/0/0D/A5/168512B1128F69DB4C50807125D_CA9AB38F_645F1.png'
  },
  {
    Name:'赖思通',
    introduction:`大数据与互联网学院
2024届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/zmHQGeRzk5hEmNovJlkSbA',
    img:'https://www.sztu.edu.cn/__local/B/83/3C/8793CE362F299E1890601037A1F_8BE413F7_30D41.png'
  },
  {
    Name:'李思迪',
    introduction:`中德智能制造学院
2022届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/kFEq2fgqEtDhJJbcjs65eQ',
    img:'https://www.sztu.edu.cn/__local/4/ED/37/0A362E761D83B2892083A22CE1C_6A53DFEF_3DF02.png'
  },
  {
    Name:'李天绘',
    introduction:`研究生院
2024届硕士毕业生`,
    href:'https://mp.weixin.qq.com/s/zKX5vCTdo0_AAJsLupAmXg',
    img:'https://www.sztu.edu.cn/__local/4/8D/73/C32118CD2060EE672C1D8DF965B_924C3D26_63826.png'
  },
  {
    Name:'谭海怡',
    introduction:`商学院
2023届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/IfkXImvF2vIF9qwDzgS_mQ',
    img:'https://www.sztu.edu.cn/__local/3/E1/39/9BCFC94BA98D69F51B8A089FE67_7093D177_40EEF.png'
  },
  {
    Name:'张国平',
    introduction:`新材料与新能源学院
2024届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/5gyZ53TSNMH12sKFR4DItw',
    img:'https://www.sztu.edu.cn/__local/1/2D/96/0C92D2A5636D4AC3362A675EEC4_BB7E35F7_63D1E.png'
  },
  {
    Name:'张锐添',
    introduction:`大数据与互联网学院
2025届本科毕业生`,
    href:'https://mp.weixin.qq.com/s/Z2Pu4o1MS7lkHeJBUcxwzA',
    img:'https://www.sztu.edu.cn/__local/D/86/94/4038538945748CF381EFB9D4BB5_810081FC_9E10.jpg'
  },
]
const swiperRef = ref(null)

onMounted(() => {
  setTimeout(() => {
    if (swiperRef.value?.swiper) {
      swiperRef.value.swiper.navigation.update()
      swiperRef.value.swiper.navigation.init()
    }
  }, 300)
})
</script>

