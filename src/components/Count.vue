<style scoped>
.count-up {
  font-size: 2.9rem;
  font-weight: 600;
  line-height: 3.2rem;
  color: rgb(7, 64, 152);
  margin-bottom: 0.5rem;
}

.count-up :deep(.number) {
  min-width: 3ch;
  text-align: right;
  display: inline-block;
}
</style>

<template>
  <div class="count-up" ref="countRef">
    {{ currentNumber }}
    <slot name="suffix" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  target: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 800
  },
  resetOnReenter: {
    type: Boolean,
    default: true
  }
})

const currentNumber = ref(0)
const countRef = ref(null)
let rafId = null
let observer = null

function startCount() {
  if (rafId) cancelAnimationFrame(rafId)

  currentNumber.value = 0

  const startTime = performance.now()

  function tick(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / props.duration, 1)

    currentNumber.value = Math.floor(props.target * progress)

    if (progress < 1) {
      rafId = requestAnimationFrame(tick)
    } else {
      currentNumber.value = props.target
    }
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (props.resetOnReenter || currentNumber.value === 0) {
            startCount()
          }
        }
      })
    },
    {
      threshold: 0.5   
    }
  )

  if (countRef.value) {
    observer.observe(countRef.value)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>