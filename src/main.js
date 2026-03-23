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
    let state = 'hidden';
    let enterTimer = null;
    let leaveTimer = null;

    const ENTER_DELAY = 80;     
    const LEAVE_DELAY = 1200;    
    const THRESHOLD = 0.18;    

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (enterTimer) clearTimeout(enterTimer);
        if (leaveTimer) clearTimeout(leaveTimer);

        if (entry.isIntersecting) {
          if (state === 'hidden' || state === 'leaving') {
            state = 'entering';

            enterTimer = setTimeout(() => {
              if (state === 'entering') {
                el.classList.add('in-view');
                state = 'visible';
              }
            }, ENTER_DELAY);
          }
        } 
        else {
          if (state === 'visible' || state === 'entering') {
            state = 'leaving';

            leaveTimer = setTimeout(() => {
              if (state === 'leaving') {
                el.classList.remove('in-view');
                state = 'hidden';
              }
            }, LEAVE_DELAY);
          }
        }
      },
      {
        threshold: THRESHOLD,
        rootMargin: '0px 0px -5% 0px'   
      }
    );

    observer.observe(el);
    el._scrollAnimateObserver = observer;
  },
  unmounted(el) {
    if (el._scrollAnimateObserver) {
      el._scrollAnimateObserver.unobserve(el);
      el._scrollAnimateObserver.disconnect();
      delete el._scrollAnimateObserver;
    }
  }
});

app.use(router).use(Antd)

app.mount('#app')


