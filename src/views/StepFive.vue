<template>
  <div id ="step-three">
    <div id="wrapper">
      <div class="big-title">Congratulations</div>
      <div class="subtitle">Now you are one of us!</div>
      <CheckAnimation id="check" />
    </div>
  </div>
</template>


<script>
import CheckAnimation from '@/components/CheckAnimation'
export default {
  components: {
    CheckAnimation
  }
}
</script>

<style lang="scss" scoped>
#step-three {
  padding: 30px 50px 100px 50px;
  margin: 0 auto;
  @media only screen and (max-width: 560px) {
    padding: 20px 12px 80px 12px;
  }
  #wrapper {
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.53);
    padding: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    max-width: 480px;
    @media only screen and (max-width: 560px) {
      padding: 20px 16px;
      border-radius: 12px;
    }
    #check {
      margin: 0 auto;
      height: 210px;
      width: 210px;
    }
  }
}
</style>
