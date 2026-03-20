import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const globalFunctions = {
  opentheurl(url){
    window.location.href = url
  } ,
  gototheurl(url){
    window.open(url,'_blank')
  }
}

const app = createApp(App)

app.config.globalProperties.$opentheurl = globalFunctions.opentheurl
app.config.globalProperties.$gototheurl = globalFunctions.gototheurl

//gundong
app.directive('scroll-animate', {
  mounted(el) {
    let hasPlayed = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if(!hasPlayed){
            el.classList.add('in-view')
            hasPlayed = true
          }
        } 
        else {
          el.classList.remove('in-view')   
          hasPlayed = false
        }
      },
      {
        threshold: 0.2,         //luchu
        rootMargin: '0px 0px 0px 0px'   //tiqian
      }
    )
    observer.observe(el)
  }
})

app.use(router).use(Antd)

app.mount('#app')


