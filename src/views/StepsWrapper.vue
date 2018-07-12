<template>
  <div class="steps">
    <BaseStep />
    <transition 
      name="router-animation" 
      enter-active-class="animated zoomIn" 
      leave-active-class="animated fadeOutUp"
      mode="out-in"
    >
    
      <router-view />
    </transition>
  </div>
</template>

<script>
import BaseStep from '@/components/BaseStep'

export default {
  components: {
    BaseStep
  }
}
</script>

<style lang="scss" scoped>
</style>
