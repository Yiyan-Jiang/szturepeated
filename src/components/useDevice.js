import { ref, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  const isMobile = ref(false)

  const checkDevice = () => {
    const ua = navigator.userAgent.toLowerCase()
    const mobileKeywords = [
      'android', 'webos', 'iphone', 'ipad', 'ipod',
      'blackberry', 'windows phone', 'mobile'
    ]
    isMobile.value = mobileKeywords.some(keyword => ua.includes(keyword))
    return isMobile.value
  }

  const lockScroll = () => {
    document.body.style.overflow = 'hidden'
  }

  const unlockScroll = () => {
    document.body.style.overflow = ''
  }

  onMounted(() => {
    if (checkDevice()) {
      lockScroll()
    }
  })

  onUnmounted(() => {
    unlockScroll()
  })

  return { isMobile, lockScroll, unlockScroll, checkDevice }
}