<template>
  <div class="swiper-container swiper-container--news" ref="swiperContainer">
    <div class="swiper swiper--news">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" @click.prevent="gotourl(slide)" :alt="slide.title" />
          <div class="slide-content">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
            <span>{{ slide.date }}</span>
          </div>
          <div class="name" @click="gotourl(news1)">校园新闻</div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination--news"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const slides = ref([
  { 
    image: 'https://www.sztu.edu.cn/__local/F/DA/72/CA14D2CAC1201F123CC6CB7AF59_DD44E28F_1B251.jpeg', 
    title: '谭铁牛院士来深技大讲学，解读全球人工智能发展态势',
    date:'2026/01/26',
    href:'https://www.sztu.edu.cn/info/1003/4201.htm',
    description: `
               1月25日下午，南京大学党委书记、中国科学院院士谭铁牛应邀来访深圳技术大学，以“全球人工智能发展的基本态势”为题作专题报告。深圳技术大学党委书记陈秋明主持报告会，党委委员、副校长明仲，学校各专业教师代表及研究生、本科生等160余人聆听报告。谭铁牛，中国科学院院士、英国皇家工程院...`
  },
  { 
    image: 'https://www.sztu.edu.cn/__local/C/F3/99/9504C6B99AB8251B53766D1473C_C94FF9A4_6F671.jpg', 
    title: '校领导带队开展期末校园安全专项检查',
    date:'2026/01/22',
    href:'https://www.sztu.edu.cn/info/1003/4194.htm',
    description: `
               为保障全校师生的生命财产安全，保证校园秩序平稳，寒假前，校党委书记陈秋明、校长傅继阳、副校长邓元龙带领安全保卫中心、党政办公室、国有资产与实验室管理开发部、后勤部、学生部等相关部门负责人组成专项检查组，深入校园重点区域排查安全隐患，并走访学生社区看望在校学生，现场部署假期...`
  },
  { 
    image: 'https://www.sztu.edu.cn/__local/6/C9/8E/3BCADE0BAABF11B1C1523B19D2F_DF559C89_109276.jpg', 
    title: '红联迎春 墨香满园——深技大举办迎新春写春联活动',
    date:'2026/01/21',
    href:'https://www.sztu.edu.cn/info/1003/4193.htm',
    description: `
               冬日暖阳洒满校园，翰墨飘香喜迎新春。1月20日，校工会联合校书法协会举办“红联迎春·福满校园”主题活动，邀请全校教职工共赴一场浸润着传统文化气息的年味盛宴。校党委书记陈秋明与教职工一同参与活动，沉浸式感受中华传统文化的独特魅力。他指出，贴春联、写福字是中华民族延续千年的春节传...`
  },
  { 
    image: 'https://www.sztu.edu.cn/__local/4/B9/0E/66AC6DDE73772B56BD03FD95347_2C3CEDB4_1CA33.jpg', 
    title: '深技大与深圳市创业投资同业公会等四家单位签署校企合作协议',
    date:'2026/01/14',
    href:'https://www.sztu.edu.cn/info/1003/4192.htm',
    description: `
               近日，“深圳创投日”南方创投网深技大新能源新材料项目专场路演“深圳科创青藤成果转化服务体系探索之旅系列活动”在学校举办。活动现场举行了校企合作签约仪式，深圳技术大学与深圳市创业投资同业公会、深圳市创业服务协会、深圳市高新区投资发展集团有限公司、深圳市润土投资管理有限公司四...`
  }
])

const news1 = {
  href:'https://www.sztu.edu.cn/jdjd/xyxw.htm'
}

const swiperContainer = ref(null)
let swiperInstance = null

const touchMoved = ref(false)
const swipeStartX = ref(0)

const loadSwiper = () => {
  return new Promise((resolve) => {
    if (window.Swiper) {
      resolve(window.Swiper)
      return
    }
    const cssLink = document.createElement('link')
    cssLink.rel = 'stylesheet'
    cssLink.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css'
    document.head.appendChild(cssLink)
    
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
    script.onload = () => {
      console.log('Swiper 加载完成')
      resolve(window.Swiper)
    }
    script.onerror = (error) => {
      console.error('Swiper 加载失败:', error)
      resolve(null)
    }
    document.head.appendChild(script)
  })
}

const initSwiper = async () => {
  const Swiper = await loadSwiper()
  
  if (!Swiper || !swiperContainer.value) {
    console.error('Swiper 加载失败或容器不存在')
    return
  }
  
  swiperInstance = new Swiper(swiperContainer.value.querySelector('.swiper--news'), {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination--news",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    preventClicks: false,
    preventClicksPropagation: false,
    
    on: {
      init: function () {
        console.log('Swiper 初始化成功')
      },
      
      
      touchStart: (swiper, event) => {
        touchMoved.value = false
        swipeStartX.value = event.touches 
          ? event.touches[0].clientX 
          : event.clientX
      },
      touchMove: (swiper, event) => {
        if (!event.touches) return
        const currentX = event.touches[0].clientX
        if (Math.abs(currentX - swipeStartX.value) > 10) {
          touchMoved.value = true
        }
      },
      
      touchEnd: () => {
        setTimeout(() => {
          touchMoved.value = false
        }, 150)
      },
      slideChange: () => {
        touchMoved.value = true
        setTimeout(() => {
          touchMoved.value = false
        }, 300)
      }
    }
  })
  
  console.log('Swiper 实例:', swiperInstance)
}

const gotourl = (item) => {
  if (touchMoved.value) {
    return
  }
  window.open(item.href, "_blank")
}

onMounted(() => {
  initSwiper()
})

onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy()
    swiperInstance = null
  }
})
</script>

<style scoped>
.swiper-container--news {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
}

.swiper--news {
  width: 100%;
  height: 100%;
  position: relative;
}

.swiper--news .swiper-slide {
  position: relative;
  background-position: center;
  background-size: cover;
  overflow: hidden;               
}

.swiper--news .swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease; 
}

.swiper--news .swiper-slide:hover img {
  transform: scale(1.08);
}

.swiper--news .slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 10px 20px;
  z-index: 2;

  background: linear-gradient(0deg,
    rgba(2, 57, 148, 0.9) 0%,
    rgba(2, 57, 148, 0) 100%) ;
}

.swiper--news .slide-content h3 {
  font-size: 1.7rem;
  margin-bottom: 8px;
  font-weight: bold;
  z-index: 2;
}

.swiper--news .slide-content p {
  font-size: 0.78rem;
  opacity: 0.9;
  line-height: 1.5rem;
  border-bottom: 1px rgba(255, 255, 255, 0.5) solid;
  padding-bottom: 0.8rem;
  z-index: 2;
}

.swiper--news .slide-content span{
  display: block;
  font-size: larger;
  font-weight: bold;
  margin: 0;
  z-index: 2;
}

.swiper-pagination--news {
  --swiper-pagination-color: rgb(173, 135, 47);  /*  active bullet  */
  --swiper-pagination-bullet-inactive-color: transparent; /*bullet */
  --swiper-pagination-bullet-inactive-opacity: 1; 
  --swiper-pagination-bullet-opacity: 1;
  position: absolute !important;
  bottom: 1rem !important;         
  right: 1rem !important;           
  left: auto !important;            
  width: auto !important;           
  text-align: right;                
  display: flex;
  justify-content: flex-end;       
  align-items: center;                     
}

:deep(.swiper-pagination--news .swiper-pagination-bullet) {
  border: 1px solid rgb(173, 135, 47) !important;
  box-sizing: border-box;  
}

.swiper--news .name{
  position: absolute;
  left: 1rem;
  top: 1rem;
  background-color: #fff;
  height: 4vh;
  width: 7vw;
  border-radius: 2rem;
  color: rgb(0, 62, 165);
  border: 1px solid #003ea5;
  text-align: center;
  line-height: 4vh;
  font-size: 1.1rem;
  z-index: 100;
}
</style>