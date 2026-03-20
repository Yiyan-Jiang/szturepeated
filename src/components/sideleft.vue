<style scoped>
@import url(../font_5098300_7kjn80zi6qq/iconfont.css);

#Leftside {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: visible; 
  z-index: 1;
}

.leftside {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 1;
}
.leftside *{
  z-index: 99999;
}
.logoBox {
  margin: 1.5vh;
  padding: 0px;
  display: flex;
  justify-content: center;
}

.context {
  height: 70vh;
  background-color: #fff;
  margin-bottom: 10vh;
}

.content {
  width: 80%;
  height: 100%;
  position: relative;
}

.contentx {
  width: 100%;
  height: 100%;
  position: relative;
}

.content .mixBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-15%, 50%);
  height: 5vh;
  width: 100%;
}

.content .top {
  background-color: rgb(7, 64, 152);
  height: 2px;
  width: 40%;
  margin: 0.5vh;
}

.content .middle {
  background-color: rgb(7, 64, 152);
  height: 2px;
  width: 30%;
  margin: 0.5vh;
}

.contentx .pre {
  margin: 6vh 0px;
  padding: 0;
}

.contentx .pre li {
  list-style: none;
  text-align: center;
  height: 5vh;
  width: 100%;
  color: #ffc240;
  background: white;
  line-height: 5vh;
  cursor: pointer;
  position: relative;
}

.contentx .pre li a {
  color: #000;
  font-size: 1rem;
  line-height: 0.54rem;
  width: 100%;
  height: 5vh;
}

.contentx .pre li i {
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translate(50%, -50%) rotate(90deg) scale(0.5);
  z-index: 100;
  opacity: 0;
}

.contentx .pre li:hover,
.contentx .pre li.active {
  background-image: url(https://www.sztu.edu.cn/images/navbg.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.contentx .pre li:hover a,
.contentx .pre li.active a{
  color: #ffc240;
}

.contentx .pre li:hover::after,
.contentx .pre li.active::after {
  background-color: #2355C5;
  background-position: 0 0;
  opacity: 1;
  z-index: 100;
}


.contentx .pre li:hover i ,
.contentx .pre li.active i{
  opacity: 1;
  color: #ffc240;
  z-index: 1000;
}
.contentx .pre li:nth-child(6):hover i,
.contentx .pre li:nth-child(6).active i,
.contentx .pre li:nth-child(7):hover i,
.contentx .pre li:nth-child(7).active i,
.contentx .pre li:nth-child(9):hover i,
.contentx .pre li:nth-child(9).active i{
  opacity: 0;
}
.contentx .pre li::after {
  background-color: white;
  content: '';
  height: 5vh;
  width: 3vh;
  position: absolute;
  right: -0.8vw;
  transform: translatex(40%);
  border-radius: 0px 1.5rem 1.5rem 0px;
  opacity: 0;
  box-shadow: 5px 0 8px -2px rgba(51, 51, 51, 0.3),
    8px 0 12px -4px rgba(51, 51, 51, 0.2);
}

.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0rem;
  padding: 1rem 0;
}

.bottom > div {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bottom a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background: transparent !important;
}

.bottom a img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  cursor: pointer;
}
/* 悬浮窗 */
.hoverContent {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 100%;
  top: 0;
  height: 100vh;
  width: 15vw;
  min-width: 200px; 
  background-color: #F0F0F0;
  z-index: 0; 
  border-left: 1px solid #eaeaea;
  opacity: 0;
  transform: translateX(-20px);
  visibility: hidden;
  padding: 0px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
}
.hoverContent.show {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.hoverContent ul {
  list-style: none;
  padding: 0 15px 20px;
  width: 100%;
  margin: 0 auto;
}
.hoverContent li {
  border-radius: 4px;
  transition: all 0.2s ease;
  cursor: pointer;
  margin: 0px;
  height: 5vh;
  padding: 0px;
}
.hoverContent li:hover {
  background-color:rgb(7, 64, 152);
}
.hoverContent li a {
  color: #333;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  margin: 0px;
  font-weight: 700;
  line-height: 5vh;
}
.hoverContent li a:hover {
  color: white;
}
@media (max-width: 768px) {
  .hoverContent {
    width: 200px;
    min-width: unset;
  }
  
  .contentx .pre li {
    height: 45px;
    line-height: 45px;
  }
}
.contentx .pre li a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search {
  position: fixed;
  top: -100vh; 
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.search.show {
  top: 0; 
}

.search .searchbox {
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  height: 7vh;
  width: 42vw;
  background-color: #fff;
  border-radius: 3rem;
  transform: translateY(20vh); 
  opacity: 0;
  transition: all 1s ;
}
.search.show .searchbox {
  transform: translateY(-1.5rem); 
  opacity: 1;
}

.search .searchbox img {
  margin-right: 0.6vw;
}

.search .searchbox input {
  height: 7vh;
  width: 27vw;
  outline: none;
  border: none;
  color: #333;
  background-color: white;
}

.search .searchbox button {
  margin-left: 4vw;
  border: none;
  background-color: rgb(2, 57, 148);
  height: 6vh;
  width: 7vw;
  border-radius: 3rem;
  color: white;
  line-height: 5vh;
  font-size: 1rem;
  cursor: pointer;
}

.search .searchclose {
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 3rem;
  width: 3rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
}

.search .searchclose i {
  background-image: url(https://www.sztu.edu.cn/images/close-btn.svg);
  background-repeat: no-repeat;
  background-size: cover;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 1rem;
  width: 1rem;
  transform-origin: 50% 50%;
  transition: all 0.6s;
}

.search .searchclose:hover i {
  transform: translate(-50%, -50%) rotate(180deg);
}

.mainbox{
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: 100vh;
  width: 90vw;
  display: flex;
}
.mainbox.active{
  right: -90vw;
}
.mainbox .student{
  position: relative;
  height: 100%;
  flex: 0.3333;
  background-image: url(https://www.sztu.edu.cn/images/pbg1.jpg);
  background-repeat: no-repeat;
  background-size: 111%;
  background-position: center center;
  transition: all 0.6s;
}
.mainbox .teacher{
  position: relative;
  height: 100%;
  flex: 0.3333;
  background-image: url(https://www.sztu.edu.cn/images/pbg2.jpg);
  background-repeat: no-repeat;
  background-size: 111%;
  background-position: center center;
  transition: all 0.6s;
}
.mainbox .stu{
  height: 100%;
  flex: 0.3333;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mainbox .smallstu{
  position: relative;
  flex: 0.5;
  height: 50%;
  width: 100%;
  background-image: url(https://www.sztu.edu.cn/images/pbg3.jpg);
  background-repeat: no-repeat;
  background-size: 111%;
  background-position: center center;
  transition: all 0.6s ;
}
.mainbox .bigstu{
  position: relative;
  flex: 0.5;
  height: 50%;
  width: 100%;
  background-image: url(https://www.sztu.edu.cn/images/pbg4.jpg);
  background-repeat: no-repeat;
  background-size: 111%;
  background-position: center center;
  transition: all 0.6s;
}
.mainbox .student:hover,
.mainbox .teacher:hover,
.mainbox .smallstu:hover,
.mainbox .bigstu:hover{
  background-size: 121%;
  cursor: pointer;
}
.mainbox .student p,
.mainbox .teacher p,
.mainbox .smallstu p,
.mainbox .bigstu p{
  font-size: 1.7rem;
  writing-mode: vertical-lr;
  position: absolute;
  top: 7vh;
  left: -1vw;
}
.mainbox .student ,
.mainbox .teacher ,
.mainbox .smallstu ,
.mainbox .bigstu,
.mainbox{
  transition: all 0.3s;
}
.closemainshow{
  height: 70%;
  width: 100%;
  position: relative;
}
.closemainshow .closebutton{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  cursor: pointer;
}
</style>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <div class="search" :class="{show: searchshow}">
    <div class="searchbox">
      <form @submit.prevent="search">
        <img src="https://www.sztu.edu.cn/images/ser2.png">
        <input type="text" v-model="keyword" placeholder="输入搜索的问题" ref="searchInputRef">
        <button type="submit">搜索</button>
      </form>
    </div>
    <div class="searchclose" @click="closesearch">
      <i></i>
    </div>
  </div>
  <div class="mainbox" v-if="mainshow">
    <div class="student" @click="allcanopen('https://www.sztu.edu.cn/xs.htm')">
      <p>学
        生</p>
    </div>
    <div class="teacher" @click="allcanopen('https://www.sztu.edu.cn/jzg.htm')">
      <p>教
        职
        工</p>
    </div>
    <div class="stu">
      <div class="smallstu" @click="allcanopen('https://zs.sztu.edu.cn/')">
        <p>本
          科
          生
          招
          生</p>
      </div>
      <div class="bigstu" @click="allcanopen('https://gra.sztu.edu.cn/zsxx/zsz.htm')">
        <p>研
          究
          生
          招
          生</p>
      </div>
    </div>
  </div>
  <div id="Leftside">
    <div class="leftside"
    @mouseleave="postContract">
      <div class="logoBox" @click="allcango('http://localhost:5173/')">
        <img :src="reviseLogo()" 
        alt="深圳技术大学" :style="logostyle">
      </div>
      <div class="context" width="props.width" v-if="!mainshow">
        <div class="content" 
        v-if="Iscontract"
        @mouseenter="postContract">
          <div class="mixBox">
            <div class="top"></div>
            <div class="middle"></div>
            <div class="top"></div>
          </div>
        </div>
        <div class="contentx" v-else>
          <ul class="pre">
            <li :class="{'active':activeMenuItem && item.id === activeMenuItem.id}"
            v-for="item in menuItems" 
            :key="item.id"
            @mouseenter="handleMenuItemHover(item)"
            @mouseleave="handleMenuItemLeave"
            @click="gotourl(item)"
            :data-no-hover="[6, 7, 9].includes(item.id)">
            <a>{{ item.title }}<i class="iconfont icon-jinru"></i></a>
          </li>
          </ul>
        </div>
      </div>
      <div class="closemainshow" v-else>
        <div class="closebutton" @click="closemain">
          <img src="https://www.sztu.edu.cn/images/gb.png">
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom" :style="bottomStyle">
        <div :style="bottomLogostyle">
          <a @click="tomain"><img src="https://www.sztu.edu.cn/images/per.png" alt=""></a>
        </div>
        <div :style="bottomLogostyle">
          <a @click="toEN"><img src="https://www.sztu.edu.cn/images/dq.png" alt=""></a>
        </div>
        <div :style="bottomLogostyle">
          <a @click="opensearch"><img  src="https://www.sztu.edu.cn/images/ser.png" alt=""></a>
        </div>
      </div>
    </div>

    <!-- 悬浮窗 -->
    <div 
      class="hoverContent" 
      :class="{ show: isHoveringMenuItem }"
      @mouseenter="handleHoverContentEnter"
      @mouseleave="handleHoverContentLeave"
    >
      <template v-if="activeMenuItem">
        <ul>
          <li v-for="func in activeMenuItem.functions" :key="func">
            <a href="#" @click.prevent="handleFunctionClick(func)">
              {{ func.title }}
            </a>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref ,computed, nextTick } from 'vue';

const Iscontract = ref(true);
const emit = defineEmits(['contract']);

const isHoveringMenuItem = ref(false);
const activeMenuItem = ref(null);
let hoverTimer = null; 

// 菜单数据
const menuItems = ref([
  { 
    id: 1, 
    title: '学校概况', 
    functions: [
      {
        title:'学校简介',
        url : 'https://www.sztu.edu.cn/xxgk/xxjj.htm'
      }, 
      {
        title:'学校领导',
        url : 'https://www.sztu.edu.cn/xxgk/xxld/xrld.htm'
      }, 
      {
        title:'校园地图',
        url : 'https://www.sztu.edu.cn/xxgk/xydt.htm'
      }, 
      {
        title:'校园风光',
        url : 'https://www.sztu.edu.cn/xxgk/xyfg.htm'
      },
      {
        title:'学校校历',
        url : 'https://www.sztu.edu.cn/xxgk/xxxl/a2025___2026xnd.htm'
      }
    ],
    href:'https://www.sztu.edu.cn/xxgk/xxjj.htm'
  },
  { 
    id: 2, 
    title: '人才培养', 
    functions: [
      {
        title:'本科生教育',
        href : 'https://jw.sztu.edu.cn/'
      }, 
      {
        title:'研究生教育',
        href : 'https://gra.sztu.edu.cn/'
      }
    ] ,
    href:'https://www.sztu.edu.cn/rcpy.htm'
  },
  { 
    id: 3, 
    title: '科研实训', 
    functions: [
      {
        title :'校企合作',
        url : 'https://www.sztu.edu.cn/kysx/xqhz.htm'
      }, 
      {
        title:'科学研究',
        url : 'https://www.sztu.edu.cn/kysx/kxyj.htm'
      }, 
      {
        title:'分析测试中心',
        href : 'https://fxcszx.sztu.edu.cn/'
      },{
        title:'医工交叉创新研究院',
        url : 'https://ime.sztu.edu.cn/'
      }
    ] ,
    href:'https://www.sztu.edu.cn/kysx.htm'
  },
  { 
    id: 4, 
    title: '对外交流', 
    functions: [
      {
        title:'国际交流',
        url :'https://www.sztu.edu.cn/dwjl/gjjl.htm'
      }, 
      {
        title:'学生镜境外交流',
        url :'https://www.sztu.edu.cn/dwjl/xsjwjl.htm'
      }
    ] ,
    href:'https://www.sztu.edu.cn/dwjl.htm'
  },
  { 
    id: 5, 
    title: '招生就业', 
    functions: [
      {
        title :'本科生招生',
        href : 'https://zs.sztu.edu.cn/'
      }, 
      {
        title :'研究生招生',
        href : 'https://gra.sztu.edu.cn/zsxx/zsz.htm'
      }, 
      {
        title :'学生就业指导',
        href : 'https://jyzd.sztu.edu.cn/'
      }
    ] ,
    href:'https://www.sztu.edu.cn/zsjy.htm'
  },
  { 
    id: 6, 
    title: '师资力量', 
    functions: [''] ,
    href:'https://www.sztu.edu.cn/szll.htm'
  },
  { 
    id: 7, 
    title: '人才招聘', 
    functions: [''] ,
    href:'https://zp.sztu.edu.cn/#/app/szjsdx/szjd-recruit/zpwz/RECRUIT'
  },
  { 
    id: 8, 
    title: '活力技大', 
    functions: [
      {
        title :'技大风光',
        url :'https://www.sztu.edu.cn/hljd/jdfg.htm'
      }, 
      {
        title:'视觉技大',
        url : 'https://www.sztu.edu.cn/hljd/sjjd.htm'
      }, 
      {
        title:'校园活动',
        url:'https://www.sztu.edu.cn/hljd/xyhd/wyhd.htm'
      },
      {
        title:'VR校园',
        url:'https://v2.brandpano.com/pano/TFp2HDUU'
      }
    ] ,
    href:'https://www.sztu.edu.cn/hljd.htm'
  },
  { 
    id: 9, 
    title: '图书馆', 
    functions: [''] ,
    href:'https://lib.sztu.edu.cn/'
  },
  { 
    id: 10, 
    title: '内网系统', 
    functions: [
      {
        title:'统一门户',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      }, 
      {
        title:'OA系统',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      }, 
      {
        title:'内部网',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      },
      {
        title:'教师邮箱',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      },
      {
        title:'学生邮箱',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      },
      {
        title:'教务系统',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      },
      {
        title:'科研管理',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      },
      {
        title:'后勤服务',
        href:'https://webvpn.sztu.edu.cn/?redirect_uri=https%3A%2F%2Fhome-sztu-edu-cn-s.webvpn.sztu.edu.cn%3A8118%2Fbmportal'
      },
    ] ,
    href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
  }
]);

const allcango = (url) => {
  window.location.href = url
}
const allcanopen = (url) =>{
  window.open(url,'_blank')
}
const gotourl = (item) =>{
  if(item.id != 6 && item.id != 9 &&item.id != 10){
    window.location.href = item.href
  }else{
    window.open(item.href,'_blank')
  }
}

const handleMenuItemHover = (item) => {
  const noHoverItems = [6, 7, 9];
  if (noHoverItems.includes(item.id)) {
    return
  }
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  isHoveringMenuItem.value = true
  if (Iscontract.value) {
    Iscontract.value = false
    emit('contract', Iscontract.value)
  }
  activeMenuItem.value = item
};

const handleMenuItemLeave = () => {
  if(mainshow.value){
    return
  }
  hoverTimer = setTimeout(() => {
    isHoveringMenuItem.value = false
    activeMenuItem.value = null
  }, 10)
};

const handleHoverContentEnter = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  isHoveringMenuItem.value = true
};

const handleHoverContentLeave = () => {
  hoverTimer = setTimeout(() => {
    isHoveringMenuItem.value = false
    activeMenuItem.value = null
    Iscontract.value = true
    emit('contract', Iscontract.value)
  }, 10);
};

const handleFunctionClick = (func) => {
  if('url' in func){
    window.location.href = func.url
  }else{
    window.open(func.href,'_blank')
  }
};

const logostyle = computed(() => {
  return {
    width: Iscontract.value ? '4vw' : '10vw',
    height: Iscontract.value ? '3vw' : '10vh',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
  };
});

const bottomLogostyle = computed(() => {
  return {
    height: '23px',
    width: '26px',
    padding: '0px',
    margin: Iscontract.value ? '1vh 1.2vw' : '0px auto',
  };
});

const bottomStyle = computed(() => {
  if (Iscontract.value) {
    return {
      display: 'flex',
      flexWrap: 'wrap',
    };
  } else {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      position: 'absolute',
      bottom: '0px',
      margin: '0px auto',
      transform: 'translateY(-180%)',
      justifyContent: 'space-around',
      width: '10vw',
      height: '30px'
    };
  }
});

const props = defineProps({
  width: {
    type: String,
  }
});

const postContract = () => {
  if (searchshow.value || mainshow.value) {
    return;
  }
  if (!isHoveringMenuItem.value) {
    Iscontract.value = !Iscontract.value;
    emit('contract', Iscontract.value);
  }
};

const reviseLogo = () => {
  if (!Iscontract.value) {
    return 'https://www.sztu.edu.cn/images/logo.svg';
  } else {
    return 'https://www.sztu.edu.cn/images/log.svg';
  }
};


const toEN = () => {
  window.open('https://english.sztu.edu.cn/','_blank')
}

const mainshow = ref(false)


let mainenter = 0
let mainleave = 0
const tomain = () => {
  clearTimeout(mainleave)
  mainshow.value = true
  Iscontract.value = false
  emit('contract', Iscontract.value);
  mainenter = setTimeout(() => {
    window.document.querySelector('.mainbox').classList.add('active');
  }, 10)
}

const closemain = () => {
  window.document.querySelector('.mainbox').classList.remove('active');
  clearTimeout(mainenter)
  mainleave = setTimeout(() => {
    mainshow.value = false
    Iscontract.value = true
    emit('contract', Iscontract.value)
  }, 200);
}
const searchInputRef = ref(null)
const searchshow = ref(false)

const opensearch = () => {
  if(mainshow.value){
    mainshow.value = true
    Iscontract.value = false
    emit('contract', Iscontract.value)
  }else{
    Iscontract.value = true
    emit('contract', Iscontract.value)
  }
  searchshow.value = true
  nextTick(() => {
    searchInputRef.value?.focus()
  });
}
const closesearch = () => {
  searchshow.value = false
}

const keyword = ref('')

const search = () => {
  const kw = keyword.value.trim()
  if (!kw) {
    alert('请输入搜索内容！')
    return
  }

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://www.sztu.edu.cn/ssjg.jsp?wbtreeid=1001';
  form.style.display = 'none';
  document.body.appendChild(form)

  const encoded = btoa(encodeURIComponent(kw))   //转码


  const fields = {
    lucenenewssearchkey: encoded,
    _lucenesearchtype: '1',
    searchScope: '0'
  };

  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement('input')
    input.type = 'hidden'
    input.name = name
    input.value = value
    form.appendChild(input)
  });

  form.submit();
  document.body.removeChild(form)


  searchshow.value = false
  keyword.value = ''
};
  

</script>