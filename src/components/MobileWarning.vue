<template>
  <div v-if="show" class="mobile-warning-overlay" @click.self="handleClose">
    <div class="warning-card">
      <h2>访问受限</h2>
      <p>本网站暂不支持手机访问，请使用电脑浏览器打开。</p>
      <button @click="handleClose">我知道了</button>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

</script>

<style scoped>
.mobile-warning-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
}

.warning-card {
  background-color: #fff;
  padding: 2rem 2.5rem;
  border-radius: 12px;
  text-align: center;
  max-width: 90%;
  width: 320px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.warning-card h2 {
  margin-top: 0;
  color: #e74c3c;
}

.warning-card button {
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.warning-card button:hover {
  background-color: #2980b9;
}
</style>