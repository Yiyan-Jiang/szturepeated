<style>
::-webkit-scrollbar {
  width: 4px;
  height: 8px;
  background-color: #F5F5F5;
  transition: all 0.3s;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #333;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #E2E2E2;
}

::-webkit-scrollbar:horizontal {
  height: 0;
}

.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.5s ease;
}

.slidedown-enter-from {
  opacity: 0;
  transform: translateY(-100%);
}

.slidedown-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.topnavContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
}
.navbox{
  position: absolute;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;
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
  <MobileWarning :show="showModal" @close="handleModalClose" />
  <div v-if="!isMobile || !showModal" class="main-content">
    <div class="navbox">
      <headnav @updata-title="updatatop" style="z-index: 1000;"></headnav>
    </div>
    <div class="topnavContainer">
      <transition name="slidedown">
        <topnav v-if="!isshowtime"></topnav>
      </transition>
    </div>
    <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
      <a-layout>
        <a-layout-sider
          :style="siderStyle"
          :width="siderWidth">  <!-- 侧边栏 -->
          <sideleft @contract="reviseWidth" :width="siderWidth" style="z-index: 1000;"></sideleft>
        </a-layout-sider>

        <a-layout v-show="shouldShowLayout">
          <a-layout-content :style="contentStyle">
            <concentmap></concentmap> <!-- 轮播图 -->
            <firstmain></firstmain>
            <secondmain></secondmain>
            <div class="scolltop" v-scroll-animate><thirldmain></thirldmain></div>
            <Medianews></Medianews>
          </a-layout-content>
          <a-layout-footer :style="footerStyle">
            <Footer></Footer>
          </a-layout-footer>
        </a-layout>
      </a-layout>
    </a-space>
  </div>
</template>

<script setup>
import { computed, ref , watch , onMounted } from 'vue';
import { useDevice } from './components/useDevice'
import Concentmap from './components/concentmap.vue';
import topnav from './components/topnav.vue';
import sideleft from './components/sideleft.vue';
import Headnav from './components/headnav.vue';
import Firstmain from './components/firstmain.vue';
import Secondmain from './components/secondmain.vue';
import Thirldmain from './components/thirldmain.vue';
import Footer from './components/footer.vue';
import Medianews from './components/medianews.vue';
import MobileWarning from './components/MobileWarning.vue'

const headerStyle = {
  textAlign: 'center',
  color: '#000',
  height: '9vh',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: 'black',
  position: 'relative',
  zIndex: '10',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'transparent',
};

const siderStyle = computed(()=>{
  const base = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
    height: '100vh',
    padding: '0px',
    position: 'fixed',
    transition: 'all 0.3s ease , transform 1s ease-in-out',
    zIndex: '1000',
    left: '0', 
    top: '0'
  }
  if (!isshowtime.value){
    return{
      ...base,
      transform: 'translateX(-100%)',
      left: '-100%', 
    }
  }
  return {
    ...base
  }
})

const siderWidth = ref('4.2vw');

const reviseWidth = (isContractValue) => {
  if (isContractValue) {
    siderWidth.value = '4.2vw';
  } else {
    siderWidth.value = '10vw';
  }
}

const isshowtime = ref(true);
const shouldShowLayout = ref(true)
const updatatop = (value) => {
  isshowtime.value = value;
}

watch(isshowtime, (newVal) => {
  if (!newVal) {
    setTimeout(() => {
      shouldShowLayout.value = false;
    }, 450);
  } else {
    shouldShowLayout.value = true;
  }
});


const { isMobile, unlockScroll } = useDevice()
const showModal = ref(false)
onMounted(() => {
  if (isMobile.value) {
    showModal.value = true
  }
})

const handleModalClose = () => {
  showModal.value = false
  unlockScroll()
}
</script>

