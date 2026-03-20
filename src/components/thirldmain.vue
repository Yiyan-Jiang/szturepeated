<style scoped>
*{
  box-sizing: border-box;
}
#thirld{
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  padding-left: 4.2vw;
}
.content{
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  border-bottom: 2px solid transparent;
}
.content::after{
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.589),
    transparent
  );
  z-index: 1;
}
.content .box{
  font-size: 1.3rem;
  line-height: 1.4rem;
  position: absolute;
  left: 50%;
  top: 8rem;
  transform: translateX(-50%);
  z-index: 3;
}
.content .box h1{
  cursor: pointer;
}
.content .box .text{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content .box .text p{
  margin-top: 1rem;
  line-height: 0.3rem;
}
.content .one{
  flex: 1;
  position: relative;
  cursor: pointer;
  z-index: 2;
  transition: all .3s;
}
.content .one .text{
  font-size: 1.8rem ;
  font-weight: bold;
  position: absolute;
  left: 50%;
  bottom: 6rem;
  transform: translateX(-50%);
}
.content .one img{
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translateX(-50%);
}

.onactive{
  background-image: linear-gradient(0deg, rgb(0, 62, 165) 0%, rgba(0, 62, 165, 0));
  border-bottom: 2px solid rgb(242, 165, 0);
}
</style>
<template>
<div id="thirld">
  <div class="content"
  :style="bgci">
    <div class="box">
      <h1 @click="this.$gototheurl('https://www.sztu.edu.cn/hljd.htm')">活力技大</h1>
      <div class="text">
        <p>Campus Life </p>
        <img src="https://www.sztu.edu.cn/images/tit7.png">
      </div>
    </div>
    <div class="one first"
    :class="{onactive:active == 1}"
    @click="this.$gototheurl('https://www.sztu.edu.cn/hljd/jdfg.htm')"
    @mouseenter="active = 1">
      <div class="text">技大风光</div>
      <img src="https://www.sztu.edu.cn/images/h7-xq.png">
    </div>
    <div class="one second"
    :class="{onactive:active == 2}"
    @click="this.$gototheurl('https://www.sztu.edu.cn/hljd/sjjd.htm')"
    @mouseenter="active = 2">
      <div class="text">视觉技大</div>
      <img src="https://www.sztu.edu.cn/images/h7-xq.png">
    </div>
    <div class="one thirld"
    :class="{onactive:active == 3}"
    @click="this.$gototheurl('https://www.sztu.edu.cn/hljd/xyhd/wyhd.htm')"
    @mouseenter="active = 3">
      <div class="text">校园活动</div>
      <img src="https://www.sztu.edu.cn/images/h7-xq.png">
    </div>
    <div class="one fourth"
    :class="{onactive:active == 4}"
    @click="this.$gototheurl('https://v2.brandpano.com/pano/TFp2HDUU')"
    @mouseenter="active = 4">
      <div class="text">VR校园</div>
      <img src="https://www.sztu.edu.cn/images/h7-xq.png">
    </div>
  </div>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';
const active = ref(1)
const bgci = computed(() => {
  const base = {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }
  if(active.value == 1){
    return{
      ...base,
      backgroundImage: `url('https://www.sztu.edu.cn/images/h7-p2.jpg')`
    }
  }else if(active.value == 2){
    return{
      ...base,
      backgroundImage: `url('https://www.sztu.edu.cn/images/h7-p1.jpg')`
    }
  }else if(active.value == 3){
    return{
      ...base,
      backgroundImage: `url('https://www.sztu.edu.cn/images/sy-xyhd02.png')`
    }
  }else{
    return{
      ...base,
      backgroundImage: `url('https://www.sztu.edu.cn/images/sy-vrpic.jpg')`
    }
  }
})
</script>