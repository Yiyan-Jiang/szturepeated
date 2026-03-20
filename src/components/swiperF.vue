<style scoped>
.mySwiper {
  width: 100%;
  height: 600px;
  padding: 20px 0;
  transition: all 1s;
}

.swiper-slide {
  text-align: start;
  font-size: 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.swiper-slide .bgcimg{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  object-fit:cover;
  transition: all 0.4s;
  z-index: -1;
  object-position: center 0;
}
.swiper-slide:hover .bgcimg{
  transform: scale(1.08);
}
.mySwiper .swiper-slide{
  height: 320px;
  cursor: pointer;
}
.swiper-slide-active{
  height: 450px !important;
}
.swiper-slide::before{
  content: '';
  position: absolute;
  bottom: 0;
  height: 40%;
  width: 100%;
  background-image: linear-gradient(
    0deg, 
    rgba(0, 0, 0, 0.5) 0%, 
    rgba(2, 57, 148, 0) 100%);
  border-radius: 0px 0px 12px 12px;
}
.swiper-slide-active::before{
  background-image: linear-gradient(
    0deg, 
    rgba(2, 57, 148, 0.7) 0%, 
    rgba(2, 57, 148, 0) 100%);
}
.swiper-slide-active h3{
  bottom: 1vh !important;
  line-height: 1rem;
  margin-bottom: 2vh !important;
}
.swiper-slide h3{
  color: white;
  line-height: 1rem;
  margin-bottom: 3vh;
}
.swiper-slide img{
  position: absolute;
  left: -1vw;
  top: -1vh;
}
p{
  font-size: 0.75rem;
  line-height: 1rem;
  display: none ;
}
.swiper-slide-active p{
  display: block;
  white-space: pre-line;

}
.text{
  position: absolute;
  bottom: 0;
  left: 1vw;
  width: 100%;
  display: flex;
  flex-direction: column;
}
button{
  height: 4rem;
  width: 4rem;
  background-color: transparent;
  outline: none;
  border: 1px solid rgb(7, 64, 152);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}
.custom-navigation{
  position: absolute;
  bottom: 5rem;
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 28%;
  transform: translateX(-50%);
}
.custom-navigation i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color:rgb(7, 64, 152) ;
  font-size: 1.3rem;
}
</style>


<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <swiper
    :slides-per-view="5"
    :space-between="25"
    :centered-slides="true"
    :modules="modules"
    :loop="true"
    :autoplay="autoplayOptions"
    :navigation="{
      prevEl: '.custom-prev',
      nextEl: '.custom-next'
    }"
    class="mySwiper"
  >
    <swiper-slide 
    v-for="item in menu"
    @click = 'this.$gototheurl(item.href)' 
    :key="n"
    >
    <img :src="item.img" class="bgcimg">
    <div class="text">
      <!-- <img src="https://www.sztu.edu.cn/images/h8-i.png" alt="" style="height: 25px; width: 13px;"> -->
       <div style="width: 13px; height: 25px; background-image: url(https://www.sztu.edu.cn/images/h8-i.png); position: absolute; left: -1rem; top: -.5rem;"></div>
      <h3>{{ item.Name }}</h3>
      <p>{{ item.introduction }}</p>
    </div>
    </swiper-slide>
    <div class="custom-navigation">
      <button class="custom-prev"><i class="fas fa-chevron-left"></i></button>
      <button class="custom-next"><i class="fas fa-chevron-right"></i></button>
    </div>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'   
import 'swiper/css/navigation'

import { Autoplay ,Navigation} from 'swiper/modules'

const modules = [Autoplay,Navigation]

const autoplayOptions = {
  delay: 5000,                    
  disableOnInteraction: false,    
  pauseOnMouseEnter: true,       
  reverseDirection: false        
}

const menu = [
  {
    Name:'邓元龙',
    introduction:`党委委员，副校长
    教授，博士生导师`,
    href:'https://www.sztu.edu.cn/info/1090/3541.htm',
    img:'https://www.sztu.edu.cn/__local/2/43/D0/44CB848F96CE0979102883CD49B_23CA09EE_48CE2.jpg'
  },
  {
    Name:'Holger Haldenwang',
    introduction:`讲席教授、鹏城学者
德国东巴伐利亚应用技术大学（雷根斯堡）原副校长
原学术监督委员会主席`,
    href:'https://www.sztu.edu.cn/info/1090/1388.htm',
    img:'https://www.sztu.edu.cn/__local/1/9E/AD/B99A04AC17C105D5ACB2C5AB6AB_FBC29841_14DC4.jpg'
  },
  {
    Name:'Franz Raps',
    introduction:`讲席教授
德国奥格斯堡应用技术大学电气工程学院原院长`,
    href:'https://www.sztu.edu.cn/info/1090/1377.htm',
    img:'https://www.sztu.edu.cn/__local/C/32/C0/6A2D2391F296C3675F354ACA498_FA8E6374_40D6E.jpg'
  },
  {
    Name:'韩培刚',
    introduction:`讲席教授、博士生导师
深圳市高层次人才`,
    href:'https://www.sztu.edu.cn/info/1090/1372.htm',
    img:'https://www.sztu.edu.cn/__local/5/22/F2/3FA41D26C6C11843DC4FB75D570_C6AA0A44_A720.jpg'
  },
  {
    Name:'刘清侠',
    introduction:`讲席教授，博士生导师
加拿大工程院院士
深圳市高层次杰出人才`,
    href:'https://www.sztu.edu.cn/info/1090/1383.htm',
    img:'https://www.sztu.edu.cn/__local/B/A7/84/F6B1CAC893AE5542FF4753185CB_6F0FB4EE_125EA.jpg'
  },
  {
    Name:'宁存政',
    introduction:'讲席教授，博士生导师',
    href:'https://www.sztu.edu.cn/info/1090/1382.htm',
    img:'https://www.sztu.edu.cn/__local/D/A1/8E/E6476F25ACF83BEB1C78332472A_04820813_9807.jpg'
  },
  {
    Name:'张文伟',
    introduction:`讲席教授
博士生导师
深圳市高层次人才`,
    href:'https://www.sztu.edu.cn/info/1090/1381.htm',
    img:'https://www.sztu.edu.cn/__local/1/48/E7/E81CF417F145259E734AF027EAF_CA16F4BD_10204.jpg'
  },
  {
    Name:'胡俊青',
    introduction:`讲席教授，博士生导师
深圳市高层次人才、鹏城学者`,
    href:'https://www.sztu.edu.cn/info/1090/1389.htm',
    img:'https://www.sztu.edu.cn/__local/D/71/D5/624BE206A1E95061AE17A78502B_7F62731D_11F2F.jpg'
  },
  {
    Name:'周沧涛',
    introduction:`讲席教授，博士生导师
国家重点研发计划项目负责人、深圳市高层次人才`,
    href:'https://www.sztu.edu.cn/info/1090/1386.htm',
    img:'https://www.sztu.edu.cn/__local/F/52/1A/8819C4DDFE5547593BAAAB33F28_6A2E3F3A_E075.jpg'
  },
  {
    Name:'曹磊峰',
    introduction:`讲席教授，博士生导师
国务院政府特殊津贴专家、国家“百千万”人才工程
深圳市高层次人才`,
    href:'https://www.sztu.edu.cn/info/1090/1387.htm',
    img:'https://www.sztu.edu.cn/__local/A/81/9D/9C8F78A1558DBC0A239431E5A9B_249A126E_8E74.jpg'
  },
  {
    Name:'朱赤',
    introduction:'讲席教授、博士生导师',
    href:'https://www.sztu.edu.cn/info/1090/1373.htm',
    img:'https://www.sztu.edu.cn/__local/6/CE/19/7CFF55FE4FBF547BB50BB8C0A93_D7F759CB_295C5.jpg'
  },
  {
    Name:'唐定远',
    introduction:`讲席教授
博士生导师`,
    href:'https://www.sztu.edu.cn/info/1090/1374.htm',
    img:'https://www.sztu.edu.cn/__local/2/6A/EB/A3B21C08FBEE7C347C7B6781CDF_B2AB7536_6435B.jpg'
  },
  {
    Name:'匡绍龙',
    introduction:'特聘教授，博士生导师',
    href:'https://www.sztu.edu.cn/info/1090/1396.htm',
    img:'https://www.sztu.edu.cn/__local/7/AC/34/6925710FBC167EA62597F682A08_3C5278D8_6D383.jpg'
  },
  {
    Name:'王志昕',
    introduction:`男高音歌唱家、音乐艺术博士
博士生导师
深圳技术大学音乐学院书记、院长，领军教授
中国歌剧舞剧院一级演员`,
    href:'https://www.sztu.edu.cn/info/1090/1828.htm',
    img:'https://www.sztu.edu.cn/__local/6/E9/C9/904A62ACF4BE5502DD59258AA64_4836EA18_B0330.jpg'
  },
  {
    Name:'阮双琛',
    introduction:`讲席教授、博士生导师
深圳技术大学创校校长
重点研发计划首席科学家
入选中国科学院“百人计划”、新世纪百千万人才工程
及深圳市国家级领军人才`,
    href:'https://www.sztu.edu.cn/info/1090/1375.htm',
    img:'https://www.sztu.edu.cn/__local/F/8F/59/B9AB9B7249A54787D7AE941BAEA_133C54AA_532FB.png'
  },
  {
    Name:'梁永生',
    introduction:`副校长
讲席教授，博士生导师`,
    href:'https://www.sztu.edu.cn/info/1090/1826.htm',
    img:'https://www.sztu.edu.cn/__local/F/D1/A3/2E6CB8ADAF9FDC4537098B945BA_846DA6CC_49036.jpg'
  },
  {
    Name:'明仲',
    introduction:`党委委员，副校长
讲席教授，博士生导师`,
    href:'https://www.sztu.edu.cn/info/1090/1827.htm',
    img:'https://www.sztu.edu.cn/__local/6/86/EA/60DB22101FD02DFC0F3F738CEB8_007F9AF8_46328.jpg'
  },
]
</script>

