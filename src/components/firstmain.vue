<style scoped>
*{
  box-sizing: border-box;
}
li{
  list-style: none;
  margin: 0px;
}
ul{
  margin: 0;
  padding: 0;
}
.vidiobox{
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(1px);
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
}
.vidiobox video{
  position: absolute;
  display: block;
  height: 75vh;
  width: 70vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.vidiobox .close{
  position: relative;
  top: 10vh;
  /* right: 0vw; */
  left: 85vw;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
}
.vidiobox .close i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 1.8rem;
  transition: all 0.6s;
  cursor: pointer;
}

.vidiobox .close:hover i{
  transform: translate(-50%,-50%) rotate(180deg);
}

#first{
  background-image: url(https://www.sztu.edu.cn/images/hbg1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 2904px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.title{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 20vh;
  margin-left: 2vw;
  margin-bottom: 10vh;
}
.waterbox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 6vh;
  width: 50vw;
  height: 10vh;
}

.underwater{
  margin-top: 7vh;
  height: 8vh;
  width: 11vw;
  background:linear-gradient(90deg,
  rgb(255, 255, 255) 0%,
  rgb(181, 198, 238) 100%);
  border-radius: 30rem;
  box-shadow: rgba(11, 88, 159, 0.09) 0px 0px 0.3rem 0px;
  border: 1px solid rgb(197, 207, 233);
  display: flex;
  align-items: center; 
  justify-content: center; 
  cursor: pointer;
}
.underwater span{
  text-align: center;
  color: rgb(2, 57, 148);
  font-weight: bold;
  font-size: 1rem;
}
.aboutus{
  color: #333;
  line-height: normal;
}
.aboutus h1,
.sztufocus h1,
.lastbox h1{
  justify-self: center;
  width: 12vw;
  margin-top: 8vh;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.8vh;
  cursor: pointer;
}
.aboutus span,
.sztufocus span,
.lastbox span{
  color: rgb(182, 207, 235);
  font-size: 1.4rem;
}
.aboutus .aboutustext{
  display: flex;
  justify-content: space-between;
  width: 82vw;
  height: 12vh;
  position: relative;
  margin-top: 3vh;
}
.aboutus .aboutustext p:nth-child(1) {
  font-size: 1.4rem;
  text-align: start;
  display: block;
  height: 20vh;
  width: 66vw;
}
.aboutus .aboutustext p:nth-child(2) {
  margin-left: 5rem;
  text-align: start;
  font-size: 1rem;
}
.aboutusbottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0.6rem;
  height: 3vh;
  width: 6vw;
  color: rgb(2, 57, 148);
  cursor: pointer;
}
.aboutusbottom img{
  height: 1.3vh;
  text-align: center;
  align-self: center;
}

.aboutimg{
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
  width: 84vw;
  height: 49vh;
}
.aboutimg div{
  background-image: url(https://www.sztu.edu.cn/images/n-p1.jpg);
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: center center;
  border-radius: 1rem;
  height: 49vh;
  width: 54vw;
  position: relative;
  transition: all 0.3s ;
  cursor: pointer;
}
.aboutimg div:hover{
  background-size: 130%;
}
.aboutimg div::before{
  content: '';
  background: linear-gradient(to top,
   #000000,
    transparent);
  border-radius: 0px 0px 1rem 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12vh;
}
.aboutimg div img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: 4rem;
  width: 4rem;
  transition: all 0.3s;
}
.aboutimg div:hover img{
  transform: translate(-50%,-50%) scale(1.1);
}
.aboutimg div p{
  font-size: 1.66rem;
  font-weight: bold;
  line-height: 5vh;
  position: absolute;
  bottom: -1rem;
  left: 1rem;
}
.sztufocus{
  margin-top: 3rem;
  margin-left: 3vw;
  position: relative;
  height: 60vh;
  width: 85vw;
  color: #333;
  line-height: normal;
  text-align: left;
  
}
.sztufocus h1{
  align-self: start;
  justify-self: start;
  line-height: 1rem;
  font-size: 2.6rem;
}
.sztufocus .text,
.lastbox .text{
  margin-top: 1.3rem;
  text-align: center;
  display: flex;
  align-items: center;
}
.sztufocus .text span,
.lastbox .text span{
  margin-left: 0.5rem;
}
.sztufocus .news{
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
}
.sztufocus .news .new{
  height: 60vh;
  width: 63%;
}
.sztufocus .focus{
  width: 35%;
  position: relative;
}
.sztufocus .focus .focu,
.sztufocus .focus .nextfocu{
  position: absolute;
  left: 0rem;
  top: 0rem;
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
.sztufocus .focus .focu{
  cursor: pointer;
}
.sztufocus .focus .focusshow{
  margin-top: 6vh;
  width: 100%;
  height: 40%;
}
.sztufocus .focus .focusshow ul{
  width: 100%;
  height: 100%;
}
.sztufocus .focus .focusshow li{
  margin-left: 0%;
  padding: 1rem;
  display: block;
  width: 100%;
  height: 33.333%;
  background-color: #F4F7FB;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: #003ea5;
  font-size: small;
  transition: all 0.3s ,border-radius 0s ;
  border-bottom: rgba(0, 0, 0, 0.2) 1px solid;
  cursor: pointer;
}
.sztufocus .focus .focusshow li:hover{
  background-color: #003ea5;
  color: white;
  border-radius: 0.5rem;
}
.sztufocus .focus .focusshow li:hover p{
  color: white;
}
.sztufocus .focus .focusshow li h4{
  font-weight: 700;
}
.sztufocus .focus .focusshow li p{
  color: #333;
  font-size: 1.2rem;
  font-weight: normal;
  transition: all 0.4s;
}
.sztufocus .focus .nextfocu{
  top: 36vh;
}
.sztufocus .focus .webfocus{
  margin-top: 8vh;
  width: 100%;
  height: 40%;
}
.lastbox{
  margin-top: 42vh;
  margin-left: 2vw;
  display: flex;
  justify-content: space-around;
  min-height: 75vh !important;
  width: 86vw;
  z-index: 1;
  line-height: 2rem;
}
.lastbox .pre{
  height: 100%;
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.lastbox .next{
  height: 100%;
  width: 47%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.lastbox h1{
  color: #333;
  text-align: start;
  margin: 0%;
  line-height: 3.2rem;
}
.lastbox .text{
  margin-top: 0px;
}
.lastbox .list{
  margin-top: 1.7rem;
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.lastbox .list .first{
  width: 48%;
  height: 60%;
  cursor: pointer;
}
.lastbox .list .first:hover .firstimg{
  background-size: 110%;
}
.lastbox .list .first:hover .firsttext,
.lastbox .list .second:hover{
  background-image: url('https://www.sztu.edu.cn/images/news-hover.png');
  color: white;
}
.lastbox .list .first .firstimg{
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 1rem 1rem 0 0;
  background-position: center center;
  width: 100%;
  height: 55%;
  transition: all 0.5s;
}
.lastbox .list .first .firsttext,
.lastbox .list .second{
  padding: 1.5rem;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  height: 45%;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  border-radius: 0 0 1rem 1rem;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3rem 3rem 0px;
  transition: all 0.3s;
}
.lastbox .list .second{
  background-color: white;
  width: 48%;
  height: 30%;
  border-radius: 1rem;
  border: rgba(0, 0, 0, 0.1) 0px 0px 3rem 0px;
  cursor: pointer;
}
.lastbox .next .list{
  justify-content: space-around;
  flex-direction: column;
}
.lastbox .next .list .research{
  display: flex;
  width: 100%;
  height: 30%;
  position: relative;
  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;
}
.lastbox .next .list .research img{
  position: absolute;
  top: 1.5rem;
  left: 0rem;
  z-index: 3;
}
.lastbox .next .list .research .text{
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: white;
  border-radius: 0.5rem 0 0 0.5rem;
  width: 55%;
  align-items: flex-start;
  padding: 1.5rem 1.6rem;
  transition: all 0.3s;
  z-index: 2;
}
.lastbox .next .list .research .text span{
  color: rgb(2, 57, 148);
  font-size: 0.9rem;
  transition: all 0.3s;
  
}
.lastbox .next .list .research .text p{
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s;
}
.lastbox .next .list .research .researchimg{
  flex: 1;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  z-index: 1;
  /* border-radius: 0 0.5rem 0.5rem 0; */
  transition: transform 0.5s;
  z-index: 1;
}
.lastbox .next .list .research .researchimg::after{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background-color: transparent;
  background-image: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0));
  height: 100%;
  width:60%;
  z-index: 2;
}
.lastbox .next .list .research:hover .text{
  background-image: url('https://www.sztu.edu.cn/images/news-hover.png');
  background-position: center center;
}
.lastbox .next .list .research:hover .text p,
.lastbox .next .list .research:hover .text span{
  color: #fff;
}
.lastbox .next .list .research:hover .researchimg{
  overflow: hidden;
  transform: scale(1.08);
}
.least{
  position: absolute;
  bottom: 0;
  right: 0;
}


/* 动画css */
.waterbox,
.underwater,
.upbox ,
.scolltop{
  opacity: 0;
  transform: translateY(80px);
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<div id="first">
  <Transition>
    <div class="vidiobox" v-if="videoshow">
      <video ref="videoPlayer"
      src="https://www.sztu.edu.cn/images/sy2025.mp4"
      controls loop autoplay preload="auto">
      </video>
      <div class="close" @click="closeVideo"><i class="ri-close-line"></i></div>
    </div>
  </Transition>
  <div class="title">

    <div class="waterbox" v-scroll-animate>
      <img :src="watersrc" 
      :style="waterbaby" 
      @mouseenter="watershow = !watershow"
      @mouseleave="watershow = !watershow">
    </div>
    <div v-scroll-animate
    class="underwater" 
    @click="gotourl('https://www.sztu.edu.cn/AI.htm')">
      <span>点击进入AI搜索</span>
    </div>
    <div class="aboutus" >
      <div class="upbox" v-scroll-animate>
        <h1  v-scroll-animate @click="gotourl('https://www.sztu.edu.cn/xxgk/xxjj.htm')">关于我们</h1>
      <span  v-scroll-animate>About Us</span>
      <br>
      <img  v-scroll-animate src="https://www.sztu.edu.cn/images/tit.png" >
      </div>


      <div class="aboutustext">
        <p v-scroll-animate class="scollleft">深圳技术大学是广东省和深圳市高起点、高标准建设的公办本科大学。</p>
        <p v-scroll-animate class="scollright">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp学校于2018年11月经教育部批准正式设立，2019年开始本、硕、博同时招生（硕士博士与深圳大学联合培养）。学校坚定走新型研究型大学发展之路，坚持“创新为本、需求驱动、开放融合、智能引领”办学理念，紧扣国家战略需要，紧密对接深圳、粤港澳大湾区产业需求，着力打造创新型工程师摇篮、企业家摇篮以及大湾区产业科技策源地。</p>
        <div v-scroll-animate class="aboutusbottom scollright" @click="openurl('https://www.sztu.edu.cn/xxgk/xxjj.htm')">了解更多<img src="https://www.sztu.edu.cn/__local/D/89/C3/EF51BD5D4CD7D328295968FF7D5_D24082E0_110.png?e=.png"></div>
      </div>
    </div>
    <div class="aboutimg">
      <img  v-scroll-animate class="scollleft" style="width: 25vw;" src="https://www.sztu.edu.cn/__local/5/09/03/117EB430D4758BAC9EAAE234D3F_7C78799D_31D9C.png?e=.png">
      <div @click="openVideo" v-scroll-animate class="scollright">
        <img src="https://www.sztu.edu.cn/images/bf2.png">
        <p>《我们的奇迹》！深圳技术大学2025招生宣传片正式发布</p>
      </div>
    </div>
    <div class="sztufocus">
      <div class="scolltop" v-scroll-animate>
        <h1>技大焦点</h1>
        <div class="text">
          <img src="https://www.sztu.edu.cn/images/tit.png">
          <span>Highlights</span>
        </div>
      </div>
      <div class="news">
        <div class="new scollleft" v-scroll-animate>
          <SwiperB></SwiperB>
        </div>
        <div class="focus scollright" v-scroll-animate>
          <div class="focu" @click="gotourl('https://www.sztu.edu.cn/jdjd/mtjj.htm')">媒体聚焦</div>
          <div class="focusshow">
            <ul>
              <li @click="gotourl('https://h.xinhuaxmt.com/vh512/share/12894837?docid=12894837&newstype=1001&d=135025a&channel=weixin&time=1766762883880&time=1766762910353&time=1766820887157')">
                <h4>【新华社】</h4>
                <p>深圳技术大学半导体微纳加工中心落成</p>
              </li>
              <li @click="gotourl('https://sztqb.sznews.com/ePaper/index.html#/article?date=202512/26&id=3414587')">
                <h4>【深圳特区报】</h4>
                <p>深技大半导体微纳加工中心落成</p>
              </li>
              <li @click="gotourl('https://static.nfnews.com/content/202512/25/c12026044.html?from=weChatMessage&colID=null&appversion=13120&firstColID=21216&enterColumnId=0')">
                <h4>【南方Plus】</h4>
                <p>投资超4亿！深技大新平台落成，赋能半导体产业发展</p>
              </li>
            </ul>
          </div>
          <div class="nextfocu">专题网站</div>
          <div class="webfocus">
            <SwiperC></SwiperC>
          </div>
        </div>
      </div>
    </div>
    <div class="lastbox">
      <div class="pre scolltop" v-scroll-animate>
        <h1 @click="gotourl('https://www.sztu.edu.cn/rcpy.htm')">人才培养</h1>
        <div class="text">
          <img src="https://www.sztu.edu.cn/images/tit.png">
          <span>Talent Cultivation</span>
        </div>
        <div class="list" >
          <div class="first" @click="gotourl('https://mp.weixin.qq.com/s/TQP1n-Kgxe-ehuGZkXOOXw')">
            <div class="firstimg"  style="background-image: url('https://www.sztu.edu.cn/__local/9/48/26/995C30D38E374211CE51C4AD8CF_66D1CCA9_6E80F.jpg');"></div>
            <div class="firsttext">这个学院和华为、腾讯、百度联合办班！</div>
          </div>
          <div class="first" @click="gotourl('https://www.sztu.edu.cn/info/1130/3846.htm')">
            <div class="firstimg"  style="background-image: url('https://www.sztu.edu.cn/__local/5/FC/04/3BCD9B984BB590A38A46B48D61D_C8FA1D90_11BB83.gif');"></div>
            <div class="firsttext">校企嘉宾共聚深技大，探讨人工智能物联网技术未来发展</div>
          </div>
          <div class="second" @click="gotourl('https://www.sztu.edu.cn/info/1130/3847.htm')">
            加拿大工程院院士、深技大未来技术学院院长刘清侠做客高中科技大讲堂
          </div>
          <div class="second" @click="gotourl('https://www.sztu.edu.cn/info/1130/3803.htm')">
            深技大首战告捷！斩获VEX机器人世锦赛四强
          </div>
        </div>
      </div>
      <div class="next scolltop" v-scroll-animate>
        <h1 @click="gotourl('https://www.sztu.edu.cn/kysx/kxyj.htm')">科学研究</h1>
        <div class="text">
          <img src="https://www.sztu.edu.cn/images/tit.png">
          <span>Research</span>
        </div>
        <div class="list">
          <div class="research" @click="gotourl('https://www.sztu.edu.cn/info/1028/4127.htm')">
            <img src="https://www.sztu.edu.cn/images/h8-i.png">
            <div class="text">
              <span>科学研究</span>
              <p>“技大讲坛”第一百零一讲开讲</p>
            </div>
            <div class="researchimg" style="background-image: url('https://www.sztu.edu.cn/__local/F/5E/8E/1F23DA8702BAFC24FB89946C56B_C7D368DE_501E5.jpg');"></div>
          </div>
          <div class="research" @click="gotourl('https://www.sztu.edu.cn/info/1028/4186.htm')">
            <img src="https://www.sztu.edu.cn/images/h8-i.png">
            <div class="text">
              <span>科学研究</span>
              <p>深技大肖爽副教授团队与合作者在钙钛矿光电材料与器件领域取得系列进展</p>
            </div>
            <div class="researchimg" style="background-image: url('https://www.sztu.edu.cn/__local/2/67/80/76B44033024ED41680CF95D2E82_57B3C071_35818.jpg'); background-size: 110%;"></div>
          </div>
          <div class="research" @click="gotourl('https://www.sztu.edu.cn/info/1028/4166.htm')">
            <img src="https://www.sztu.edu.cn/images/h8-i.png">
            <div class="text">
              <span>科学研究</span>
              <p>人工智能学院黄炳顶教授团队：开发面向输尿管软镜手术的肾结石实时检测...</p>
            </div>
            <div class="researchimg" style="background-image: url('https://www.sztu.edu.cn/__local/5/85/6E/494714A5884A6838D6CC7E652D7_A2822EC0_C989.jpeg'); background-size: 155%;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <img src="https://www.sztu.edu.cn/images/hbg3.png" class="least">
</div>


</template>

<script setup>
import { ref,computed,Transition,nextTick } from 'vue';
import SwiperB from './swiperB.vue';
import SwiperC from './swiperC.vue';

const watershow = ref(true)
const waterbaby = computed(()=>{
  if(watershow.value){
    return{
      width:'6vw',
      height:'11vh',
      transform:'translateY(3.8vh)'
    }
  }else{
    return{
      width:"6vw",
      height:'15vh',
    }
  }
})
const watersrc = computed(()=>{
  if(watershow.value){
    return 'https://www.sztu.edu.cn/images/ai2.gif'
  }else{
    return 'https://www.sztu.edu.cn/images/ai2-1.gif'
  }
})

const gotourl = (url) => {
  window.open(url,'_blank')
}
const openurl = (url) =>{
  window.location.href = url
}

const videoshow = ref(false)
const videoPlayer = ref(null)
const openVideo = () => {
  videoshow.value = true
  nextTick(() => {
    if (videoPlayer.value) {
      const unmuteOnClick = () => {
        videoPlayer.value.muted = false
        videoPlayer.value.volume = 1.0
        videoPlayer.value.removeEventListener('click', unmuteOnClick)
      }
      videoPlayer.value.currentTime = 0
      videoPlayer.value.play()
      videoPlayer.value.addEventListener('click', unmuteOnClick)
    }
  })
}
const closeVideo = () => {
  videoshow.value = false
  videoPlayer.value.currentTime = 0
  videoPlayer.value.pause()
}
</script>