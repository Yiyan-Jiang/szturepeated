 <style scoped>
.swiper-d-container {
  height: 13vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  user-select: none;
  cursor: default;
}

.swiper-d-track {
  display: flex;
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  height: 13vh;
}

.swiper-d-slide {
  flex: 0 0 auto;
  width: v-bind(slideWidth);
  height: 100%;
  padding: 0 12px;
  box-sizing: border-box;
}

.card {
  width: 100%;
  height: 100%;
  background: white;
  color: white;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  display: flex;             
  flex-direction: column;    
  justify-content: flex-end; 
  align-items: center;       
  position: relative;    
  transition: all 0.6s;
  cursor: pointer;
}

.card:hover {
  /* box-shadow: 0 8px 25px rgba(0,0,0,0.55); */
  background-image: url(https://www.sztu.edu.cn/images/h4bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.card:hover p{
  color: white;
}
.card:hover img{
  opacity: 0;
}
.card:hover .activeone{
  display: block;
  opacity: 1;
}
.card img {
  opacity: 1;
}
.card p{
  position: relative;
  color: #333;
  z-index: 10;
  bottom: 0;
  margin: 0.5rem auto;
  line-height: 1.5rem !important;
}
.card .activeone{
  display: none;
  opacity: 0;
}
</style>
<template>
  <div 
    class="swiper-d-container"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    :style="{ height: containerHeight }"
  >
    <div class="swiper-d-track" :style="trackStyle">
      <div v-for="(item, index) in slides" 
      :key="'a-' + index" 
      class="swiper-d-slide"
      >
        <div class="card" @click="this.$gototheurl(item.href)">
          <img :src="item.image" />
          <img :src="item.image2" class="activeone"/>
          <p>{{ item.title }}</p>
        </div>
      </div>

      <!-- beifen -->
      <div v-for="(item, index) in slides" :key="'b-' + index" class="swiper-d-slide">
        <div class="card" @click="this.$gototheurl(item.href)">
          <img :src="item.image" />
          <img :src="item.image2" class="activeone"/>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'


const slides = ref([
  {
    id: 1, 
    title: '质量和标准学院', 
    image: 'https://www.sztu.edu.cn/images/h4-8.png',
    image2:'https://www.sztu.edu.cn/images/h4-8-1.png',
    href:'https://qsa.sztu.edu.cn/'
  },
  { 
    id: 2, 
    title: '药学院', 
    image: 'https://www.sztu.edu.cn/images/h4-9.png' ,
    image2:'https://www.sztu.edu.cn/images/h4-9-1.png',
    href:'https://cop.sztu.edu.cn/'
  },
  { 
    id: 3, 
    title: '研究生院', 
    image: 'https://www.sztu.edu.cn/images/h4-1.png' ,
    image2:'https://www.sztu.edu.cn/images/h4-1-1.png',
    href:'https://gra.sztu.edu.cn/index.htm'
  },
  { 
    id: 4, 
    title: '中德智能制造学院', 
    image: 'https://www.sztu.edu.cn/images/h4-2.png' ,
    image2:'https://www.sztu.edu.cn/images/logo/logo-zdxy02.png',
    href:'https://sgim.sztu.edu.cn/'
  },
  { 
    id: 5, 
    title: '人工智能学院', 
    image: 'https://www.sztu.edu.cn/images/h4-3.png' ,
    image2:'https://www.sztu.edu.cn/images/h4-3-1.png',
    href:'https://ai.sztu.edu.cn/'
  },
  { 
    id: 6, 
    title: '新材料与新能源学院', 
    image: 'https://www.sztu.edu.cn/images/h4-4.png' ,
    image2:'https://www.sztu.edu.cn/images/h4-4-1.png',
    href:'https://nmne.sztu.edu.cn/'
  },
  {
    id: 7,
    title:'城市交通与物流学院',
    image:'https://www.sztu.edu.cn/images/h4-6.png',
    image2:'https://www.sztu.edu.cn/images/h4-6-1.png',
    href:'https://utl.sztu.edu.cn/'
  },
  {
    id: 8,
    title:'健康与环境工程学院',
    image:'https://www.sztu.edu.cn/images/logo/logo-jchj01.png',
    image2:'https://www.sztu.edu.cn/images/logo/logo-jkhj02.png',
    href:'https://hsee.sztu.edu.cn/'
  },
  {
    id: 9,
    title:'工程物理学院',
    image:'https://www.sztu.edu.cn/images/h4-7.png',
    image2:'https://www.sztu.edu.cn/images/h4-7-1.png',
    href:'https://cep.sztu.edu.cn/'
  },
])

const containerHeight = '13vh'
const slideWidth = '230px'
const speed = 50            

const isPaused = ref(false)

const contentWidth = computed(() => {
  return slides.value.length * parseFloat(slideWidth)
})

const translateX = ref(0)
let animationFrame = null
let lastTime = 0

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp

  const delta = timestamp - lastTime
  lastTime = timestamp


  if (!isPaused.value) {
    translateX.value -= (speed * delta) / 1000

 
    if (translateX.value <= -contentWidth.value) {
      translateX.value += contentWidth.value
    }
  }

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  if (slides.value.length > 0) {
    animationFrame = requestAnimationFrame(animate)
  }
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})

const trackStyle = computed(() => ({
  transform: `translate3d(${translateX.value}px, 0, 0)`,
  transition: 'transform 0.04s linear'
}))

</script>

