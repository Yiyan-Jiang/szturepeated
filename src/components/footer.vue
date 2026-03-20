<style scoped>
#footer{
  margin-top: 10rem;
  margin-bottom: 0;
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.up{
  flex: 2;
  background-color: white;
  padding-left: 4.2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.up .pre{
  cursor: pointer;
  margin-left: 5rem;
}
.up .next{
  color: rgb(2, 57, 148);
  height: 60%;
  width: 55%;
  margin-right: 10rem;
  display: flex;
  justify-content: space-between;
}

.up .next .first{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.up .next img{
  height: .9rem;
  width: .9rem;
  object-fit: cover;
  margin-bottom: 2rem;
  margin-right: .5rem;
}
.up .next .first:nth-child(3) img{
  height: 1.3rem;
  width: 1rem;
}
.up .next  .text{
  height: 60%;
  width: 15rem;
  padding: 0rem .5rem;
  border-left: 1px solid rgb(2, 57, 148);
  font-size: .9rem;
  font-weight: bold;
}
.up .next .text span{
  line-height: 1.4rem;
}

.down{
  flex: 1;
  background-color: rgb(2, 57, 148);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: .8rem;
}
.down img{
  height: 2rem;
  width: 1.7rem;
  object-fit: cover;
  margin: 0 .6rem;
}
.down a{
  color: white;
}
.down p{
  margin: 0;
}
</style>

<template>
<div id="footer"> 
  <div class="up">
    <div class="pre" @click="this.$gototheurl('https://www.sztu.edu.cn/')"><img src="https://www.sztu.edu.cn/images/logo2.png" alt=""></div>
    <div class="next">
      <div class="first">
        <img src="https://www.sztu.edu.cn/images/ph.png" alt="">
        <div class="text">
          <span>联系方式</span>
          <p>0755-23256054</p>
        </div>
      </div>
      <div class="first">
        <img src="https://www.sztu.edu.cn/images/zn.png" alt="">
        <div class="text">
          <span>招生热线</span>
          <p>0755-23256666</p>
        </div>
      </div>
      <div class="first">
        <img src="https://www.sztu.edu.cn/images/adr.png" alt="">
        <div class="text">
          <span>地址</span>
          <p>广东省深圳市坪山区兰田路3002号</p>
        </div>
      </div>
    </div>
  </div>
  <div class="down">
    <p>Copyright © 2018深圳技术大学 版权所有
      <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank">粤ICP备16106131号</a>
      <img src="https://www.sztu.edu.cn/__local/C/12/65/7F2C92BA3F42DC6E830B70345FE_2C2408A1_1797.png?e=.png" alt="">
    </p>
  </div>
</div>
</template>

<script setup>

</script>