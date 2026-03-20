<style scoped>
*{
  box-sizing: border-box;
}
li{
  list-style: none;
}
ul{
  margin: 0px;
  padding: 0px;
}
.navshowmeun{
background-image: url(https://www.sztu.edu.cn/images/mbg.jpg);
background-repeat: no-repeat;
background-position: center center;
background-size: cover;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-content: center;
}

.box{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  background-color: transparent;
  height: 78vh;
  width: 80vw;
  justify-content: space-between;
}

.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2vh 1vw;    
  background-color: transparent;
  height: 50%;
  width: 13vw;
  justify-content: flex-start; 
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}
.content:nth-child(-n+6){
  height: 40%;
}
.content:nth-child(7){
  height: 60%;
}
.content h2{
  width: 55%;
  border-bottom: 2px solid #ffb812;
  padding-bottom: 0.5vh;
  margin-bottom: 1.2vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content:nth-child(12) h2{
  width: 40%;
}
.content a{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 3.5vh;
  width: 100%;
  font-size: 21px;
  font-weight: bold;
  cursor: pointer;
}

.content li{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 4vh;
  width: 100%;
  margin: 1px auto;
  font-size: 15px;
  cursor: pointer;
}
.content li:hover{
  color: #ffb812;
}

/* ul动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content:nth-child(1) { animation-delay: 0.1s; }
.content:nth-child(2) { animation-delay: 0.2s; }
.content:nth-child(3) { animation-delay: 0.3s; }
.content:nth-child(4) { animation-delay: 0.4s; }
.content:nth-child(5) { animation-delay: 0.5s; }
.content:nth-child(6) { animation-delay: 0.6s; }
.content:nth-child(7) { animation-delay: 0.7s; }
.content:nth-child(8) { animation-delay: 0.8s; }
.content:nth-child(9) { animation-delay: 0.9s; }
.content:nth-child(10) { animation-delay: 1.0s; }
.content:nth-child(11) { animation-delay: 1.1s; }
.content:nth-child(12) { animation-delay: 1.2s; }
</style>

<template>
  <Transition>
    
    <div class="navshowmeun">
      <div class="box" >
        <ul 
        class="content"
        v-for="item in menuItems">
        <h2><a @click="gotohref(item)">{{ item.title }}</a></h2>
          <li v-for="value in item.functions" @click="openhref(value)">
            {{ value.title}}
            <!-- <div v-if="shouldshow(value)">
              11111111
            </div> -->
        </li>
        </ul>
      </div>
    </div>
  
  </Transition>
</template>

<script setup>
  import { ref , Transition } from 'vue';
const menuItems = ref([
  { 
    id: 1, 
    title: '学校概况', 
    functions: [
      {
        title:'学校简介',
        url:'https://www.sztu.edu.cn/xxgk/xxjj.htm'
      }, 
      {
        title:'学校领导',
        url:'https://www.sztu.edu.cn/xxgk/xxld/xrld.htm'
      }, 
      {
        title:'校园地图',
        url:'https://www.sztu.edu.cn/xxgk/xydt.htm'
      }, 
      {
        title:'校园风光',
        url:'https://www.sztu.edu.cn/xxgk/xyfg.htm'
      },
      {
        title:'学校校历',
        url:'https://www.sztu.edu.cn/xxgk/xxxl/a2025___2026xnd.htm'
      }
    ] ,
    href:'https://www.sztu.edu.cn/xxgk/xxjj.htm'
  },
  { 
    id: 2, 
    title: '人才培养', 
    functions: [
      {
        title:'本科生教育',
        href:'https://www.sztu.edu.cn/xxgk/xxxl/a2025___2026xnd.htm'
      }, 
      {
        title:'研究生教育',
        href:'https://gra.sztu.edu.cn/'
      }
    ] ,
    href :'https://www.sztu.edu.cn/rcpy.htm'
  },
  { 
    id: 3, 
    title: '科研实训', 
    functions: [
      {
        title:'校企合作',
        url:'https://www.sztu.edu.cn/kysx/xqhz.htm'
      }, 
      {
        title:'科学研究',
        url:'https://www.sztu.edu.cn/kysx/kxyj.htm'
      }, 
      {
        title:'分析测试中心',
        href:"https://fxcszx.sztu.edu.cn/"
      },
      {
        title:'医工交叉创新研究院',
        url:'https://ime.sztu.edu.cn/'
      }  
    ], 
    href :'https://www.sztu.edu.cn/kysx.htm' ,
  },
  { 
    id: 4, 
    title: '对外交流', 
    functions: [
      {
        title:'国际交流',
        url:'https://www.sztu.edu.cn/dwjl/gjjl.htm'
      }, 
      {
        title:'学生境外交流',
        url:'https://www.sztu.edu.cn/dwjl/xsjwjl.htm'
      }
    ] ,
    href :'https://www.sztu.edu.cn/dwjl.htm'
  },
  { 
    id: 5, 
    title: '招生就业', 
    functions: [
      {
        title:'本科生招生',
        href:'https://zs.sztu.edu.cn/'
      }, 
      {
        title:'研究生招生',
        href:'https://gra.sztu.edu.cn/zsxx/zsz.htm'
      }, 
      {
        title:'学生就业指导',
        href:'https://jyzd.sztu.edu.cn/'
      }
    ] ,
    href : 'https://www.sztu.edu.cn/zsjy.htm'
  },
  { 
    id: 6, 
    title: '师资力量', 
    functions: [''], 
    href : 'https://www.sztu.edu.cn/szll.htm'
  },
  {
    id : 7,
    title : '内网系统',
    functions : [
      {
        title:'统一门户',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      },
      {
        title:'OA系统',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      },
      {
        title:'内部网',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      },
      {
        title:'教师邮箱',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      },
      {
        title:'学生邮箱',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      },
      {
        title:'教务系统',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      },
      {
        title:'科研管理',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      },
      {
        title:'后勤服务',
        href:'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
      }
    ],
    href : 'https://auth-sztu-edu-cn-s.webvpn.sztu.edu.cn:8118/idp/authcenter/ActionAuthChain?entityId=webvpn'
  },
  {
    id : 8,
    title : '快速入口',
    functions : [
      {
        title:'信息公开',
        url:'https://www.sztu.edu.cn/ksrk/xxgk/jbxx.htm',
        last:[
          {
            title:'预决算公开',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/yjsgk.htm'
          },
          {
            title:'基本信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/jbxx.htm'
          },
          {
            title:'招生考试信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/zsksxx.htm'
          },
          {
            title:'财务、资产及收费信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/cw_zcjsfxx.htm'
          },
          {
            title:'人事师资信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/rsszxx.htm'
          },
          {
            title:'教学质量信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/jxzlxx.htm'
          },
          {
            title:'学生管理服务信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/xsglfwxx.htm'
          },
          {
            title:'学风建设信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/xfjsxx.htm'
          },
          {
            title:'学位、学科信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/xw_xkxx.htm'
          },
          {
            title:'对外交流与合作信息',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/dwjlyhzxx.htm'
          },
          {
            title:'其他',
            url:'https://www.sztu.edu.cn/ksrk/xxgk/qt.htm'
          },
        ]
      },
      {
        title:'招标采购',
        url:"https://ztb.sztu.edu.cn/sfw_cms/e?page=cms.index"
      },
      {
        title:'公共服务',
        href:'https://fxcszx.sztu.edu.cn/',
        last:[
          {
            title:'分析测试中心',
            url:'https://fxcszx.sztu.edu.cn/'
          }
        ]
      }
    ],
    href : 'https://www.sztu.edu.cn/ksrk/xxgk/jbxx.htm'
  },
  {
    id : 9,
    title :'组织机构',
    functions : [
      {
        title:'职能部门',
        url:'https://www.sztu.edu.cn/zzjg/znbm.htm'
      },
      {
        title:'群团组织',
        url:'https://www.sztu.edu.cn/zzjg/qtzz.htm'
      },
      {
        title:'教辅单位',
        url:'https://www.sztu.edu.cn/zzjg/jfdw.htm'
      },
      {
        title:'教学单位',
        url:'https://www.sztu.edu.cn/zzjg/jxdw.htm'
      }
    ],
    href : 'https://www.sztu.edu.cn/zzjg/znbm.htm'
  },
  { 
    id: 9, 
    title: '人才招聘', 
    functions: [''] ,
    href : 'https://zp.sztu.edu.cn/#/app/szjsdx/szjd-recruit/zpwz/RECRUIT'
  },
  { 
    id: 10, 
    title: '活力技大', 
    functions: [
      {
        title:'技大风光',
        url:'https://www.sztu.edu.cn/hljd/jdfg.htm'
      }, 
      {
        title:'视觉技大',
        url:'https://www.sztu.edu.cn/hljd/sjjd.htm'
      }, 
      {
        title:'校园活动',
        url:"https://www.sztu.edu.cn/hljd/xyhd/wyhd.htm"
      },
      {
        title:'VR校园',
        url:'https://v2.brandpano.com/pano/TFp2HDUU'
      }
    ] ,
    href : 'https://www.sztu.edu.cn/hljd.htm'
  },
  { 
    id: 11, 
    title: '图书馆', 
    functions: [''] ,
    href : 'https://lib.sztu.edu.cn/'
  },
  
])
const gotohref = (item) =>{
  if(item.id != 7 && item.id != 8 && item.id != 10 && item.id != 12){
    window.location.href = item.href
  }else{
    window.open(item.href,'_blank')
  }
}
const openhref = (item) =>{
  if("url" in item){
    window.location.href = item.url
  }else{
    window.open(item.href,"_blank")
  }
}
const shouldshow = (item) =>{
  if('last' in item){
    return true
  }
  return false
}
</script>