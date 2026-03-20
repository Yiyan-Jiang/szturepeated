<style scoped>
li{
  list-style: none;
}
#upanddown{
  background-color: #fff;
  height: 150vh;
  width: 100vw;
  margin-top: 10vh;
  line-height: 1rem;
  position: relative;
}
#upanddown::before{
  content: '';
  position: absolute;
  top: -10vh;
  left: 0;
  height: 10vh;
  width: 100vw;
  background-color: white;
}
.up{
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.up .text{
  background-color: #ffffffc3;
  z-index: 1;
  height: 17vh;
  position: relative;
}
.up .text::before{
  content: '';
  background-image: linear-gradient(
    to top,
    #ffffff31,
    #fff
  );
  min-height: 10rem;
  min-width: 100vw;
  position: absolute;
  bottom: -9rem;
  left: 43%;
}
.up .text h3{
  margin-bottom: 10px;
  line-height: 3rem;
  font-size: 2.6rem;
  color: #333;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.up .text .smalltext{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.up .text .smalltext span{
  color: rgb(182, 207, 235);
  font-size: 1.4rem;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
}
.up .text p{
  display: block;
  height: 5vh;
  width: 30vw;
  margin: 0.8rem auto;
  color: rgb(102, 102, 102);
  margin-bottom: 0;
}
.up .upimg{
  margin: 0;
  width: 100%;
  flex: 1;
  position: relative;
}
.up .upimg .main{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 12.7rem;
  width: 12.7rem;
  /* background-color: red; */
}
.up .upimg .line{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 12.7rem;
  width: 12.7rem;
  border-radius: 50%;
  animation: lineout 8s linear infinite;
}
.up .upimg .left{
  position: absolute;
  width: 40%;
  height: 50vh;
  left: 4.2vw;
  bottom: 3%;
}
.up .upimg .right{
  position: absolute;
  width: 40%;
  height: 50vh;
  right: 4vw;
  bottom: 3%;
}
.up .upimg .left ul,
.up .upimg .right ul{
  width: 100%;
  height: 100%;
  /* background-color: white; */
  position: relative;
}
.up .upimg .left li img,
.up .upimg .right li img{
  transform: scale(0.95);
}
.up .upimg .left li,
.up .upimg .right li{
  position: absolute;
  animation: updown 2s linear infinite;
  animation-direction: alternate;
  z-index: 2;
}
.up .upimg .left li:nth-child(1){
  right: 11rem;
  top: 0%;
}
.up .upimg .left li:nth-child(2){
  right: 0;
  top: 3rem;
  animation-delay: 0.2s;
  animation-direction: alternate-reverse;
}
.up .upimg .left li:nth-child(3){
  right: 20rem;
  top: 3.5rem;
  animation-delay: 0.4s;
}
.up .upimg .left li:nth-child(4){
  top: 6.8rem;
  left: 23rem;
  animation-delay: 0.6s;
  animation-direction: alternate-reverse;
}
.up .upimg .left li:nth-child(5){
  top: 8rem;
  left: 3rem;
  animation-delay: 0.8s;
}
.up .upimg .left li:nth-child(6){
  top: 11rem;
  left: 16.5rem;
  animation-direction: alternate-reverse;
  animation-delay: 1s;
}
.up .upimg .left li:nth-child(7){
  right: 0;
  top: 11rem;
  animation-delay: 1.2s;
}
.up .upimg .left li:nth-child(8){
  top: 16rem;
  left: 13rem;
  animation-direction: alternate-reverse;
  animation-delay: 1.4s;
}
.up .upimg .left li:nth-child(9){
  top: 16.5rem;
  right: 2rem;
  animation-delay: 1.6s;
}
.up .upimg .left li:nth-child(10){
  top: 21rem;
  right: 7rem;
  animation-direction: alternate-reverse;
}
.up .upimg .right li:nth-child(1){
  top: 0;
  left: 1rem;
}
.up .upimg .right li:nth-child(2){
  top: 2rem;
  left: 12rem;
  animation-direction: alternate-reverse;
  animation-delay: 0.2s;
}
.up .upimg .right li:nth-child(3){
  top: 1rem;
  right: 5rem;
  animation-delay: 0.4s;
}
.up .upimg .right li:nth-child(4){
  top: 5rem;
  left: 0;
  animation-direction: alternate-reverse;
  animation-delay: 0.6s;
}
.up .upimg .right li:nth-child(5){
  top: 6rem;
  right: 9rem;
  animation-delay: 0.8s;
}
.up .upimg .right li:nth-child(6){
  top: 9rem;
  left: 9rem;
  animation-direction: alternate-reverse;
  animation-delay: 1s;
}
.up .upimg .right li:nth-child(7){
  top: 11rem;
  right: 1rem;
  animation-delay: 1.2s;
}
.up .upimg .right li:nth-child(8){
  top: 15rem;
  animation-delay: 1.4s;
  animation-direction: alternate-reverse;
}
.up .upimg .right li:nth-child(9){
  top: 13rem;
  left: 15rem;
  animation-delay: 1.4s;
}
.up .upimg .right li:nth-child(10){
  top: 18rem;
  right: 5rem;
  animation-direction: alternate-reverse;
  animation-delay: 1.6s;
}
.up .upimg .line.line2{animation-delay: 2s;}
.up .upimg .line.line3{animation-delay: 4s;}
.up .upimg .line.line4{animation-delay: 6s;}
.up .upimg .line.line5{animation-delay: 8s;}
.up .upimg .line.line6{animation-delay: 10s;}
.up .upimg .line.line7{animation-delay: 12s;}
.up .upimg .line.line8{animation-delay: 14s;}
.up .upimg .line.line9{animation-delay: 16s;}

.down{
  width: 100vw;
  min-height: 100vh;
  background-image: url(https://www.sztu.edu.cn/images/hbg7.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  top: 55vh;
  z-index: 1;
}
.down::before{
  content: '';
  position: absolute;
  top: -20vh;
  left: 0;
  width: 100vw;
  height: 20vh;
  background-color: #ffffff76;
}
.down .content{
  height: 100%;
  width: 100%;
  position: relative;
}
.down .content .text{
  height: 55vh;
  width: 80vw;
  position: absolute;
  top: 60vh;
  left: 53%;
  transform: translate(-50%,-50%);
  display: flex;
}
.down .content .text .left{
  background-color: red;
  flex: 0.5;
  overflow: hidden;
  display: flex;
  border-radius: 1rem 0 0 1rem ;
}
.down .content .text .left:hover img{
  transform: scale(1.08);
}
.down .content .text .left img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: all 0.5s;
  cursor: pointer;
}
.down .content .text .left::before{
  content: '';
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  bottom: 0;
  left: 0;
  height: 40%;
  width: 50%;
  z-index: 1;
  border-radius: 0 0 0 1rem;
}
.down .content .text .left span{
  color: white;
  position: absolute;
  left: 1rem;
  bottom: 4rem;
  font-size: small;
  line-height: 1.4rem;
  border-bottom: 2px solid white;
  z-index: 2;
}
.down .content .text .left p{
  font-size: 1.2rem;
  z-index: 2;
  color: white;
  position: absolute;
  left: 1rem;
  bottom: 0.5rem;
}
.down .content .text .right{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  flex: 0.5;
}
.down .content .text .right::before{
   content: '';
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  bottom: 0;
  right: 0;
  height: 15%;
  width: 50%;
  z-index: 1;
  border-radius: 0 0 0 1rem;
}

.down .content .text .right .top{
  flex: 0.6;
  position: relative;
  cursor: pointer;
}

.down .content .text .right .top span{
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: rgb(2, 57, 148);
  border-bottom: 2px solid rgb(2, 57, 148);
  position: absolute;
  top: 2rem;
  left: 3rem;
}

.down .content .text .right .top h4{
  color: #333;
  font-size: 1.6rem;
  font-weight: bold;
  position: absolute;
  top: 4.5rem;
  left: 3rem;
  transition: all .3s;
}
.down .content .text .right .top:hover h4{
  color: rgb(2, 57, 148);
}
.down .content .text .right .top p{
  color: #333;
  position: absolute;
  top: 7rem;
  left: 3rem;
  font-size: .75rem;
}
.down .content .text .right .bottom{
  flex: 0.4;
  display: flex;
}
.down .content .text .right .bottom .pre{
  flex: 0.5;
  background-image: url(https://www.sztu.edu.cn/__local/C/D4/3E/1B0518E5DBD0D571B2A289F0F28_46095EE0_7F5E.jpg);
  background-position: center center;
  background-size: 105%;
  background-repeat: no-repeat;
  transition: all .3s;
  cursor: pointer;
  position: relative;
}
.down .content .text .right .bottom .pre:hover{
  background-size: 115%;
}
.down .content .text .right .bottom .pre span,
.down .content .text .right .bottom .next span{
  position: absolute;
  left: 1.5rem;
  bottom: 3rem;
  border-bottom: 2px solid white;
  font-size: 0.8rem;
  line-height: 1.2rem;
  z-index: 1;
}
.down .content .text .right .bottom .pre p,
.down .content .text .right .bottom .next p{
  position: absolute;
  left: 1.5rem;
  bottom: 0rem;
  font-size: 1.2rem;
  z-index: 1;
}

.down .content .text .right .bottom .next{
  flex: 0.5;
  background-image: url(https://www.sztu.edu.cn/__local/2/25/FC/1C8B0733E25E299924B341664FD_1CB93347_5091F.jpg);
  background-position: center center;
  background-size: 105%;
  background-repeat: no-repeat;
  transition: all .3s;
  cursor: pointer;
  position: relative;
}
.down .content .text .right .bottom .next:hover{
  background-size: 115%;
}

@keyframes lineout{
  from{
    opacity: 0.24;
    transform:translate(-50%,-50%) scale(1) ;
    border: 1px solid rgb(7, 64, 152);
  }
  to{
    opacity: 0;
    transform:translate(-50%,-50%) scale(3.75) ;
    border: 1.4px solid rgb(7, 64, 152);
  }
}

@keyframes updown{
  from{
    transform: scale(0.95) translateY(-0.45rem);
  }
  to{
    transform: scale(0.95) translateY(0.45rem);
  }
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
<div id="upanddown">
  <div class="up">
    <div class="text scolltop" v-scroll-animate>
      <h3 @click="this.$gototheurl('https://www.sztu.edu.cn/dwjl.htm')">对外交流</h3>
      <div class="smalltext">
        <span>Exchanges and Cooperation</span>
        <img src="https://www.sztu.edu.cn/images/tit.png" alt="">
      </div>
      <p>截至目前，合作伙伴已覆盖全球25个国家和地区，与110所境外高校、机构建立合作关系， 大力开展教师互访、学生互派、科研合作等国际交流活动。</p>
    </div>
    <div class="upimg">
      <div class="main scolltop" v-scroll-animate>
        <img src="https://www.sztu.edu.cn/images/h6-log.png">
      </div>
      <div class="line line1"></div>
      <div class="line line2"></div>
      <div class="line line3"></div>
      <div class="line line4"></div>
      <div class="line line5"></div>
      <div class="line line6"></div>
      <div class="line line7"></div>
      <div class="line line8"></div>
      <div class="line line9"></div>
      <div class="left scollleft" v-scroll-animate>
        <ul>
          <li><img src="https://www.sztu.edu.cn/images/h6-t1.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t2.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t3.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t4.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t5.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t6.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t7.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t8.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t9.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t10.png"></li>
        </ul>
      </div>
      <div class="right scollright" v-scroll-animate>
        <ul>
          <li><img src="https://www.sztu.edu.cn/images/h6-t11.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t12.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t13.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t14.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t15.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t16.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t17.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t18.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t19.png"></li>
          <li><img src="https://www.sztu.edu.cn/images/h6-t20.png"></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="down scolltop" v-scroll-animate >
    <div class="content">
      <div class="text">
        <div class="left" @click="this.$gototheurl('https://www.sztu.edu.cn/info/1031/4114.htm')">
          <img src="https://www.sztu.edu.cn/__local/0/B0/D5/BF4FB9D2019C3E5E2C7391A7F7A_393DD960_635D.jpg">
          <span>国际交流</span>
          <p>奥地利高校师生团来访深技大</p>
        </div>
        <div class="right">
          <div class="top" @click="this.$gototheurl('https://www.sztu.edu.cn/info/1031/4114.htm')">
            <span>国际交流</span>
            <h4>奥地利高校师生团来访深技大</h4>
            <p>奥地利因斯布鲁克管理中心师生代表团来访深圳技术大学。</p>
          </div>
          <div class="bottom">
            <div class="pre" @click="this.$gototheurl('https://www.sztu.edu.cn/info/1031/4113.htm')">
              <span>国际交流</span>
              <p>西班牙加泰罗尼亚理工大学Eunce...</p>
            </div>
            <div class="next" @click="this.$gototheurl('https://www.sztu.edu.cn/info/1031/4062.htm')">
              <span>国际交流</span>
              <p>Ara坎特伯雷理工学院校长一行到...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
