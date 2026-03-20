<template>
  <div class="swiper-container">
    <swiper
      :modules="modules"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :speed="500"
      effect="fade"
      :loop="true"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    >
      <!-- 使用 v-for 动态渲染 slides -->
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="slide" />
      </swiper-slide>
    </swiper>

    <!-- 分页和箭头容器保持不变 -->
    <div class="swiper-pagination swiper-pagination-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// 假设图片列表（你可以从 props、API、store 等地方获取）
const images = ref([
  'img/fade1.jpg',
  'img/fade2.jpg',
  'img/fade3.jpg',
  'img/fade4.jpg',
  'img/fade5.jpg',
  // 可以继续加更多：'img/fade6.jpg', ...
])
// 或者更推荐的写法：从外部传入
// const props = defineProps<{ images: string[] }>()

const modules = [Autoplay, Pagination, Navigation, EffectFade]
</script>

<style>
html, body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  width: 100%;
  height: auto;
  min-height: 100%;
  transition: 1s linear 2s;
  transform: scale(1.1, 1.1);
  object-fit: cover;        /* 建议加上，防止图片变形 */
}
.swiper-slide-active img,
.swiper-slide-duplicate-active img {
  transition: 6s linear;
  transform: scale(1, 1);
}
</style>