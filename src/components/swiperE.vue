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
  /* padding: 0 0.3rem; */
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
.card:hover img:nth-child(1){
  opacity: 0 !important;
}
.card:hover .activeone{
  display: block;
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
  display: none ;
  opacity: 0 ;
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
          <img :src="item.image"  :style="specialstyle(item)"/>
          <img :src="item.image2" class="activeone" :style="activespecialstyle(item)"/>
          <p>{{ item.title }}</p>
        </div>
      </div>

      <!-- beifen -->
      <div v-for="(item, index) in slides" 
           :key="'b-' + index" 
           class="swiper-d-slide"
      >
        <div class="card" @click="this.$gototheurl(item.href)">
          <img :src="item.image" :style="specialstyle(item)"/>
          <img :src="item.image2" class="activeone" :style="activespecialstyle(item)"/>
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const slides = ref([
  { id: 1, 
    title: '体育与艺术学院', 
    image: 'https://www.sztu.edu.cn/images/logo/logo-tyxy01.png', 
    image2: 'https://www.sztu.edu.cn/images/h4-5.png', 
    href: 'https://tusports.sztu.edu.cn/' 
  },
  { id: 2, 
    title: '马克思主义学院', 
    image: 'https://www.sztu.edu.cn/images/logo/logo-mks01.png', 
    image2: 'https://www.sztu.edu.cn/images/logo/logo-mks02.png', 
    href: 'https://www.sztu.edu.cn/zzjg/jxdw/mkszyxy_rwskxy_.htm' ,
    special: true
  },
  { id: 3, 
    title: '外国语学院', 
    image: 'https://www.sztu.edu.cn/images/h4-13.png', 
    image2: 'https://www.sztu.edu.cn/images/h4-13-1.png', 
    href: 'https://sfl.sztu.edu.cn/' 
  },
  { id: 4, 
    title: '商学院', 
    image: 'https://www.sztu.edu.cn/images/h4-12.png', 
    image2: 'https://www.sztu.edu.cn/images/h4-12-1.png', 
    href: 'https://bs.sztu.edu.cn/' ,
    specialone:true
  },
  { id: 5, 
    title: '创意设计学院', 
    image: 'https://www.sztu.edu.cn/images/h4-11.png', 
    image2: 'https://www.sztu.edu.cn/images/h4-11-1.png', 
    href: 'https://design.sztu.edu.cn/' 
  },
  { id: 6, 
    title: '未来技术学院', 
    image: 'https://www.sztu.edu.cn/images/h4-10.png', 
    image2: 'https://www.sztu.edu.cn/images/h4-10-1.png', 
    href: 'https://futuretechnologyschool.sztu.edu.cn/' 
  },
  { id: 7, 
    title: '集成电路与光电芯片学院', 
    image: 'https://www.sztu.edu.cn/images/logo/logo-jcdl01.png', 
    image2: 'https://www.sztu.edu.cn/images/logo/logo-jcdl02.png', 
    href: 'https://icoc.sztu.edu.cn/' 
  },
  { id: 8, 
    title: '音乐学院', 
    image: 'https://www.sztu.edu.cn/images/logo/logo-yyxy01.png', 
    image2: 'https://www.sztu.edu.cn/images/logo/logo-yyxy02.png', 
    href: 'https://musicyyds.sztu.edu.cn/' 
  },
  { id: 9, 
    title: '口腔学院', 
    image: 'https://www.sztu.edu.cn/images/logo/logo-kqyy01.png', 
    image2: 'https://www.sztu.edu.cn/images/logo/logo-kqyy02.png', 
    href: 'https://cop.sztu.edu.cn/' 
  },
])

const containerHeight = '13vh'
const slideWidth = '230px'
const speed = 50

const isPaused = ref(false)

const contentWidth = computed(() => slides.value.length * parseFloat(slideWidth))

const translateX = ref(0)
let animationFrame = null
let lastTime = 0

function animate(timestamp) {
  if (!lastTime) lastTime = timestamp

  const delta = timestamp - lastTime
  lastTime = timestamp

  if (!isPaused.value) {
    translateX.value += (speed * delta) / 1000

    if (translateX.value >= 0) {
      translateX.value -= contentWidth.value
    }
  }

  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  if (slides.value.length > 0) {
    translateX.value = -contentWidth.value
    animationFrame = requestAnimationFrame(animate)
  }
})

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame)
})

const trackStyle = computed(() => ({
  transform: `translate3d(${translateX.value}px, 0, 0)`,
  transition: 'transform 0.04s linear'
}))

const specialstyle = (item) =>{
  if('special' in item){
    return {
      height:'5rem',
      weight:'5rem',
      opacity: '1'
    }
  }else if('specialone' in item){
    return{
      height:'4rem',
      weight:'4rem',
      opacity: '1'
    }
  }
  return {
    opacity: '1'
  }
}
const activespecialstyle = (item) =>{
  if('special' in item){
    return {
      height:'5rem',
      weight:'5rem',
    }
  }else if('specialone' in item){
    return{
      height:'4rem',
      weight:'4rem',
    }
  }
  return {
  }
}
</script>