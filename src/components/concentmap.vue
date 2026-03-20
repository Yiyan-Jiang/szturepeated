<style scoped>
#concentmap {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
}

.map {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: pan-y; /* 防止垂直滚动冲突 */
  cursor: pointer;
}

.slides-container {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.slide {
  flex: 0 0 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* 导航按钮 */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  z-index: 10;
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
}
/* 标题 */
.con{
  background-image: linear-gradient(
    to bottom,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.3) 50%,
    rgba(0,0,0,0.65) 100%
  );
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
.con p{
  font-size: 34px;
  font-weight: bold;
  position: absolute;
  left: 10vw;
  bottom: -25px;
}
/* 指示器 */
.indicators {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 7%;
  display: flex;
  justify-content: right;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.indicator.active {
  background-color: white;
  transform: scale(1.2);
}

.indicator:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* 添加触摸反馈效果 */
.slides-container.dragging {
  transition: none;
}
</style>

<template>
  <div id="concentmap">
    <div class="map"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         @mousedown="handleMouseDown"
         @mousemove="handleMouseMove"
         @mouseup="handleMouseUp"
         @mouseleave="handleMouseLeave">
      
      <!-- 轮播容器 -->
      <div 
        class="slides-container"
        :class="{ dragging: isDragging }"
        :style="{ transform: `translateX(${translateX}px)` }"
        @click="handleSlideClick"
      >
        <!-- 所有图片 -->
        <div 
          v-for="(item, index) in slides" 
          :key="item.id"
          class="slide"
          :style="{ backgroundImage: `url(${item.url})` }"
          :data-tourl="item.tourl"
        >
          <!-- 标题 -->
          <div class="con">
            <p>{{ item.title }}</p>
          </div>      
        </div>
      </div>
      
      <!-- 指示器 -->
      <div class="indicators">
        <div 
          v-for="(item, index) in menu" 
          :key="`indicator-${item.id}`"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import headnav from './headnav.vue';

const menu = ref([
  {
    id: 1,
    url: 'https://www.sztu.edu.cn/images/20260120.jpg',
    tourl :'http://localhost:5173/',
    title :''
  },
  {
    id: 2,
    url: 'https://www.sztu.edu.cn/images/banner20251225.JPG',
    tourl :'https://www.sztu.edu.cn/info/1003/4171.htm',
    title :'深技大半导体微纳加工中心落成，打造大湾区化合物半导体光电产业支撑平台'
  },
  {
    id: 3,
    url: 'https://www.sztu.edu.cn/images/20250602keyan.jpeg',
    tourl: 'https://www.sztu.edu.cn/info/1028/3791.htm',
    title :'深技大科研课题组在量子点探测及成像技术领域取得关键进展'
  },
  {
    id: 4,
    url: 'https://www.sztu.edu.cn/images/2026010702.jpg',
    tourl :'https://www.sztu.edu.cn/',
    title :'冬日校园景致新， 湖光山色映晴空'
  }
]);

// 创建循环的幻灯片数组：在首尾各添加一张图片，实现无缝循环
const slides = computed(() => {
  if (menu.value.length === 0) return [];
  return [
    menu.value[menu.value.length - 1], // 最后一张放在最前面
    ...menu.value,
    menu.value[0], // 第一张放在最后面
  ];
});

// 当前显示的索引（对应原始menu的索引）
const currentIndex = ref(0);
// 容器偏移量（相对于slides数组）
const translateX = ref(0);
// 是否正在拖动
const isDragging = ref(false);
// 拖动开始的位置
const dragStartX = ref(0);
// 拖动开始时的偏移量
const dragStartTranslateX = ref(0);
// 自动轮播计时器
let autoPlayTimer = null;
// 容器宽度（用于计算偏移量）
const containerWidth = ref(0);
// 是否触发滑动（用于区分点击和滑动）
const isSwiped = ref(false);
// 滑动阈值
const swipeThreshold = 30;

// 实际显示的slide索引（对应slides数组）
const actualSlideIndex = computed(() => {
  return currentIndex.value + 1; // 因为有第一张克隆，所以要+1
});

// 初始化容器宽度
const initContainerWidth = () => {
  const mapElement = document.querySelector('.map');
  if (mapElement) {
    containerWidth.value = mapElement.clientWidth;
    // 初始位置设置为实际第一张（不是克隆的第一张）
    translateX.value = -containerWidth.value;
  }
};

// 更新偏移量
const updateTranslateX = () => {
  translateX.value = -actualSlideIndex.value * containerWidth.value;
};

// 跳转到指定幻灯片
const goToSlide = (index) => {
  currentIndex.value = index;
  updateTranslateX();
};

// 自动轮播
const startAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
  }
  autoPlayTimer = setInterval(() => {
    // 直接切换到下一张，不需要特殊处理边界
    currentIndex.value = (currentIndex.value + 1) % menu.value.length;
    updateTranslateX();
    
    // 如果已经滚动到了最后一张（克隆的第一张），立即无动画跳转到真实的第一张
    if (currentIndex.value === 0) {
      // 等待过渡动画完成
      setTimeout(() => {
        // 禁用过渡，瞬间跳转到真实的第一张位置
        isDragging.value = true;
        translateX.value = -containerWidth.value; // 真实第一张的位置
        setTimeout(() => {
          isDragging.value = false;
        }, 10);
      }, 500);
    }
  }, 8000);
};

// 停止自动轮播
const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// 下一张
const nextSlide = () => {
  stopAutoPlay();
  
  currentIndex.value = (currentIndex.value + 1) % menu.value.length;
  updateTranslateX();
  
  // 如果已经滚动到了最后一张（克隆的第一张），立即无动画跳转到真实的第一张
  if (currentIndex.value === 0) {
    setTimeout(() => {
      isDragging.value = true;
      translateX.value = -containerWidth.value;
      setTimeout(() => {
        isDragging.value = false;
        startAutoPlay();
      }, 10);
    }, 500);
  } else {
    startAutoPlay();
  }
};

// 上一张
const prevSlide = () => {
  stopAutoPlay();
  
  currentIndex.value = (currentIndex.value - 1 + menu.value.length) % menu.value.length;
  updateTranslateX();
  
  // 如果已经滚动到了第一张（克隆的最后一张），立即无动画跳转到真实的最后一张
  if (currentIndex.value === menu.value.length - 1) {
    setTimeout(() => {
      isDragging.value = true;
      translateX.value = -(slides.value.length - 2) * containerWidth.value;
      setTimeout(() => {
        isDragging.value = false;
        startAutoPlay();
      }, 10);
    }, 500);
  } else {
    startAutoPlay();
  }
};

// 触摸开始
const handleTouchStart = (e) => {
  stopAutoPlay();
  isDragging.value = true;
  isSwiped.value = false;
  dragStartX.value = e.touches[0].clientX;
  dragStartTranslateX.value = translateX.value;
};

// 触摸移动
const handleTouchMove = (e) => {
  if (!isDragging.value) return;
  
  e.preventDefault();
  const currentX = e.touches[0].clientX;
  const diffX = currentX - dragStartX.value;
  
  // 如果滑动距离超过阈值，标记为滑动操作
  if (Math.abs(diffX) > swipeThreshold) {
    isSwiped.value = true;
  }
  
  // 实时更新偏移量
  translateX.value = dragStartTranslateX.value + diffX;
};

// 触摸结束
const handleTouchEnd = (e) => {
  if (!isDragging.value) return;
  
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - dragStartX.value;
  const threshold = containerWidth.value * 0.2; // 20%的滑动阈值
  
  // 判断滑动方向
  if (Math.abs(diffX) > threshold) {
    // 如果是滑动操作，阻止点击跳转
    isSwiped.value = true;
    if (diffX > 0) {
      // 向右滑动，显示上一张
      prevSlide();
    } else {
      // 向左滑动，显示下一张
      nextSlide();
    }
  } else {
    // 滑动距离不够，回弹到当前位置
    updateTranslateX();
    startAutoPlay();
  }
  
  isDragging.value = false;
  
  // 延迟重置滑动标记，确保不会触发点击事件
  setTimeout(() => {
    isSwiped.value = false;
  }, 100);
};

// 鼠标按下
const handleMouseDown = (e) => {
  stopAutoPlay();
  isDragging.value = true;
  isSwiped.value = false;
  dragStartX.value = e.clientX;
  dragStartTranslateX.value = translateX.value;
};

// 鼠标移动
const handleMouseMove = (e) => {
  if (!isDragging.value) return;
  
  const currentX = e.clientX;
  const diffX = currentX - dragStartX.value;
  
  // 如果滑动距离超过阈值，标记为滑动操作
  if (Math.abs(diffX) > swipeThreshold) {
    isSwiped.value = true;
  }
  
  // 实时更新偏移量
  translateX.value = dragStartTranslateX.value + diffX;
};

// 鼠标抬起
const handleMouseUp = (e) => {
  if (!isDragging.value) return;
  
  const endX = e.clientX;
  const diffX = endX - dragStartX.value;
  const threshold = containerWidth.value * 0.2; // 20%的滑动阈值
  
  // 判断滑动方向
  if (Math.abs(diffX) > threshold) {
    // 如果是滑动操作，阻止点击跳转
    isSwiped.value = true;
    if (diffX > 0) {
      // 向右滑动，显示上一张
      prevSlide();
    } else {
      // 向左滑动，显示下一张
      nextSlide();
    }
  } else {
    // 滑动距离不够，回弹到当前位置
    updateTranslateX();
    startAutoPlay();
  }
  
  isDragging.value = false;
  
  // 延迟重置滑动标记，确保不会触发点击事件
  setTimeout(() => {
    isSwiped.value = false;
  }, 100);
};

// 鼠标离开
const handleMouseLeave = () => {
  if (isDragging.value) {
    // 如果鼠标离开时正在拖动，回弹到当前位置
    updateTranslateX();
    isDragging.value = false;
    isSwiped.value = false;
    startAutoPlay();
  }
};

// 处理幻灯片点击事件
const handleSlideClick = (e) => {
  // 如果检测到滑动操作，阻止跳转
  if (isSwiped.value || isDragging.value) {
    return;
  }
  
  // 获取点击的幻灯片元素
  const slideElement = e.target.closest('.slide');
  if (!slideElement) return;
  
  // 获取对应的URL
  const tourl = slideElement.dataset.tourl;
  if (tourl) {
    // 在当前页跳转
    window.location.href = tourl;
  }
};

// 监听窗口大小变化
const handleResize = () => {
  initContainerWidth();
  updateTranslateX();
};

onMounted(() => {
  initContainerWidth();
  startAutoPlay();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  stopAutoPlay();
  window.removeEventListener('resize', handleResize);
});
</script>