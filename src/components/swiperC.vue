<style scoped>
* {
  box-sizing: border-box;
}

.swiper-wrapper-outer {
  width: 100%;
  height: 28vh;
  position: relative;
  cursor: pointer;
}

.my-swiper-c {
  width: 100%;
  height: 100%;
  position: relative;
}

.my-swiper-c .swiper-slide {
  border-radius: 1rem;
  overflow: hidden;                 
  position: relative;
}


.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;               
  display: block;                   
  transition: transform 0.45s ease; 
}


.my-swiper-c .swiper-slide:hover .slide-img {
  transform: scale(1.08);           
}

.custom-pagination {
  text-align: end;
  height: 3vh;
  margin-bottom: 3vh;
  padding-right: 1vw;
  min-height: 1.5rem;
  position: absolute;
  z-index: 1;
  margin-top: 3vh;
  top: 0;
}

:deep(.custom-pagination .swiper-pagination-bullet) {
  width: 0.5rem !important;
  height: 0.5rem !important;
  background: transparent !important;
  border: 1px solid rgb(173, 135, 47) !important;
  opacity: 1 !important;
  margin: 0 0.3rem !important;
  border-radius: 50% !important;
  display: inline-block !important;
  vertical-align: middle !important;
  transition: all 0.3s;
}

:deep(.custom-pagination .swiper-pagination-bullet-active) {
  width: 0.5rem !important;
  height: 0.5rem !important;
  background: rgb(173, 135, 47) !important;
  border: 1px solid rgb(173, 135, 47) !important;
  border-radius: 50% !important;
  opacity: 1 !important;
}
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction{
  top: -4.7rem;
  bottom: 100%;
}
</style>

<template>
  <div class="swiper-wrapper-outer">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :pagination="{
        clickable: true,
        el: '.custom-pagination'
      }"
      :autoplay="autoplayOptions"
      class="my-swiper-c"
    >
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
        @click="openurl(slide)"
      >
        <img
          :src="slide.img"
          alt=""
          class="slide-img"
          loading="lazy"           
        />
      </swiper-slide>
    </swiper>
    <div class="custom-pagination"></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination ,Autoplay } from 'swiper/modules'

import 'swiper/css'

const modules = [Pagination,Autoplay]

const slides = [
  {
    title: '1',
    img: 'https://www.sztu.edu.cn/images/20260108zhuanti.png',
    url: 'https://cpc.people.com.cn/GB/67481/461139/index.html'
  },
  {
    title: '2',
    img: 'https://www.sztu.edu.cn/images/25/04/25/1cfmx02vuz/zt-pic01.jpg',
    url: 'https://www.news.cn/zt/xxgczybxgdjsxxjy/index.html'
  }
]

const openurl = (item) => {
  window.open(item.url, '_blank')
}
const autoplayOptions = {
  delay: 6000,
  pauseOnMouseEnter: true,
  waitForTransition: true
}
</script>