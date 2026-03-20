<style scoped>
#news {
  height: 80vh;
  width: 100vw;
}

.title {
  display: flex;
  flex-direction: column;
  color: #333;
  margin-top: 5rem;
}

.title h1 {
  font-size: 2.6rem;
  line-height: 2.6rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
}

.title .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2rem;
  color: rgb(182, 207, 235);
}

.title .text span {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.newslist {
  margin-top: 3rem;
  height: 45rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
}

.newslist .new{
  display: flex;
  height: 10.5vh;
  min-width: 100%;
  background-color: white;
  transition: all .7s;
  overflow: hidden;
  border-bottom: #00000021 1px solid;
  cursor: pointer;
}

.content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.active {
  height: 35vh !important;
  background-image: url(https://www.sztu.edu.cn/images/h9bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  transition: all .3s;
  display: flex;
  align-items: center;
}

.twocode{
  height: 100%;
  width: 25rem;
  position: relative;
}
.twocode img{
  position: absolute;
  top: 2rem;
  left: 10rem;
}
.twocode p{ 
  position: relative;
  color: #333;
  font-weight: bold;
  top: -.7rem;
  left: 2rem;
}
.twocode .box{
  background-color: white;
  width: 12rem;
  height: 12rem;
  position: absolute;
  left: 7.3rem;
  top: 5rem;
  border-radius: 1rem;
}
.twocode .box .content img{
  height: 90%;
  width: 90%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.twocode .box .content .sanjiao{
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid white;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%,-100%);
}

.middle{
  flex: 1;
  height: 100%;
  position: relative;
}
.middle p{
  color: #333;
  font-size: 1.4rem;
  position: absolute;
  left: 0;
  top: -0.79rem;
}
.middle span{
  height: 1.8rem;
  width: 8rem;
  position: absolute;
  left: 0;
  top: 7rem;
  color: rgb(2, 57, 148);
  line-height: 1.8rem;
  font-size: .75rem;
  border-radius: 1rem;
  border: 1px solid rgb(2, 57, 148);
}
.middle .line{
  height: 3px;
  width: 15px;
  background-color: rgb(173, 135, 47);
  position: absolute;
  top: 15rem;
  left: 60%;
}
.last{
  position: absolute;
  right: 0;
  top: 1.5rem;
  height: 17.5rem;
  width: 25rem;
  overflow: hidden;
}
.last .lastimg{
  height: 100%;
  width: 100%;
  background-image: url(https://www.sztu.edu.cn/__local/A/7A/0D/8474E47C60F01C7237ABF847987_E4D86732_1EB5F.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
  transition: all .3s;
}
.active:hover .last .lastimg{
  transform: scale(1.08);
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
  <div id="news">
    <div class="title scolltop" v-scroll-animate>
      <h1>新媒体矩阵</h1>
      <div class="text">
        <span>Media</span>
        <img src="https://www.sztu.edu.cn/images/tit.png" alt="">
      </div>
    </div>

    <div class="newslist">
      <div class="new one"
               :class="{ active: activestyle === 1 }"
               @mouseover.stop="activestyle = 1"
               @click="this.$gototheurl('https://mp.weixin.qq.com/s/cNjP_ZE7OjfgXcfjRD19Nw')">
        <div class="content">
          <div class="twocode">
            <img src="https://www.sztu.edu.cn/images/wx.png" alt="">
            <p>#微信#</p>
            <div class="box" v-if="activestyle === 1" style="transform: scale(0.7); top: 3rem;">
              <div class="content">
                <div class="sanjiao"></div>
                <img src="https://www.sztu.edu.cn/images/qr.png">
              </div>
            </div>
          </div>
          <div class="middle">
            <p>坚持“国家战略需求和产业需求的办学逻辑”，深技大亮相首届新型研究型大...</p>
            <span v-if="activestyle === 1">信息来源:微信</span>
            <div class="line"></div>
          </div>
          <div class="last">
            <div class="lastimg" style='background-image: url(https://www.sztu.edu.cn/__local/7/4E/3C/A9B92DA6C741E57393569B1F6BE_0397FD73_1D31A.jpg);'></div>
          </div>
        </div>
      </div>


      <div class="new two"
               :class="{ active: activestyle === 2 }"
               @mouseover.stop="activestyle = 2"
               @click="this.$gototheurl('https://weibo.com/7721623040/QfKdJ0ZHV')">
        <div class="content">
          <div class="twocode">
            <img src="https://www.sztu.edu.cn/images/wb.png" alt="">
            <p>#微博#</p>
            <div class="box" v-if="activestyle === 2">
              <div class="content">
                <div class="sanjiao"></div>
                <img src="https://www.sztu.edu.cn/images/ewm-wb.png">
              </div>
            </div>
          </div>
          <div class="middle">
            <p>著名作曲家、深圳技术大学客座教授徐沛东来学校给同学们上大师课了！</p>
            <span v-if="activestyle === 2">信息来源:微博</span>
            <div class="line"></div>
          </div>
          <div class="last">
            <div class="lastimg" style="background-image: url(https://www.sztu.edu.cn/__local/7/4A/77/479D2F3633AB770FBC33B34138F_19CB70E3_29EA84.png);"></div>
          </div>
        </div>
      </div>


      <div class="new three"
               :class="{ active: activestyle === 3 }"
               @mouseover.stop="activestyle = 3"
               @click="this.$gototheurl('https://www.douyin.com/user/MS4wLjABAAAAcr3Zk0h0vVGuc0R33cIbyRDiZVVoTDe9MUW9a3t_mA8fnoPo39VUWQ3rD0VUhbLQ?from_tab_name=main&modal_id=7520561171666193691&relation=0&vid=7502987399170018575')">
        <div class="content">
          <div class="twocode">
            <img src="https://www.sztu.edu.cn/images/dy.png" alt="">
            <p>#抖音#</p>
            <div class="box" v-if="activestyle === 3">
              <div class="content">
                <div class="sanjiao"></div>
                <img src="https://www.sztu.edu.cn/images/ewm-dy.jpg">
              </div>
            </div>
          </div>
          <div class="middle">
            <p>当小米遇上深技大</p>
            <span v-if="activestyle === 3">信息来源:抖音</span>
            <div class="line"></div>
          </div>
          <div class="last">
            <div class="lastimg" style="background-image: url(https://www.sztu.edu.cn/__local/C/71/92/9F9875FF56A7F40C88F13D89F6A_CF66BAED_25CF0.jpg);"></div>
          </div>
        </div>
      </div>
      <div class="new fourth"
               :class="{ active: activestyle === 4 }"
               @mouseover.stop="activestyle = 4"
               @click="this.$gototheurl('https://www.bilibili.com/video/BV1PTMGz1EH7/?buvid=Y44FE64321DE291B486FBBF31DFE0F07FA5C&from_spmid=dt.dt.video.0&is_story_h5=false&mid=CYHGXG6ilOk4O3mYTxk2uw%3D%3D&plat_id=116&share_from=ugc&share_medium=iphone&share_plat=ios&share_session_id=69F83360-F2EA')">
        <div class="content">
          <div class="twocode">
            <img src="https://www.sztu.edu.cn/images/bli.png" alt="">
            <p>#bilibili#</p>
            <div class="box" v-if="activestyle === 4">
              <div class="content">
                <div class="sanjiao"></div>
                <img src="https://www.sztu.edu.cn/images/ewm-bili.png">
              </div>
            </div>
          </div>
          <div class="middle">
            <p>《我们的奇迹》！深圳技术大学2025招生宣传片正式发布</p>
            <span v-if="activestyle === 4">信息来源:哔哩哔哩</span>
            <div class="line"></div>
          </div>
          <div class="last">
            <div class="lastimg" style="background-image: url(https://www.sztu.edu.cn/__local/9/6A/20/81E1C08E5A6884792B65FB72E73_03F120E5_35FBE.jpeg);"></div>
          </div>
        </div>
      </div>


      <div class="new six"
           :class="{ active: activestyle === 5 }"
           @mouseover.stop="activestyle = 5"
           @click="$gototheurl('https://www.xiaohongshu.com/explore/693d64e90000000019025968?xsec_token=ABkwIBUFlcbot3fwzuWaPoZX486Q3YnNiRlngHe8mFfDA=&xsec_source=pc_user')">
        <div class="content">
          <div class="twocode">
            <img src="https://www.sztu.edu.cn/images/hs.png" alt="">
            <p>#小红书#</p>
            <div class="box" v-if="activestyle === 5">
              <div class="content">
                <div class="sanjiao"></div>
                <img src="https://www.sztu.edu.cn/images/ewm-xhs.jpg">
              </div>
            </div>
          </div>
          <div class="middle">
            <p>袁娅维来深圳技术大学了</p>
            <span v-if="activestyle === 5">信息来源:小红书</span>
            <div class="line"></div>
          </div>
          <div class="last">
            <div class="lastimg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activestyle = ref(null)
</script>

