<template>
  <div id="app">
    <BaseHeader />
    <!-- <transition 
      name="router-animation" 
      enter-active-class="animated fadeIn" 
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <BaseStep v-if="showSteps" />｀
    </transition> -->
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
import BaseHeader from '@/components/BaseHeader'
// import BaseStep from '@/components/BaseStep'

export default {
  components: {
    BaseHeader
    // BaseStep
  },
  computed: {
    // showSteps() {
    //   console.log(this.$route.path)
    //   if (this.$route.path === '/' || this.$route.path === '/stepfive') {
    //     return false
    //   }
    //   return true
    // }
  }
}
</script>

<style lang="scss">
#app {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(270deg, #4b6cb7, #4daae5, #7d42a5);
  background-size: 600% 600%;
  animation: background 15s ease infinite;
  transform-style: preserve-3d;
}

.animated {
  animation-duration: 0.6s;
}
</style>
