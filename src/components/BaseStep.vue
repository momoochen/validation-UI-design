<template>
  <div id="wrapper">
    <router-link to="/stepone">
      <div class="step">
        <img src="@/assets/imgs/step.svg">
        <div class="step-number">1</div>
      </div>
    </router-link>
    <div class="line" />
    <router-link to="/steptwo">
      <div class="step">
        <img src="@/assets/imgs/step.svg">
        <div class="step-number">2</div>
      </div>
    </router-link>
    <div class="line" />
    <router-link to="/stepthree">
      <div class="step">
        <img src="@/assets/imgs/step.svg">
        <div class="step-number">3</div>
      </div>
    </router-link>
    <div class="line" />
    <router-link to="/stepfour">
      <div class="step">
        <img src="@/assets/imgs/step.svg">
        <div class="step-number">4</div>
      </div>
    </router-link>
  </div>
    
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#wrapper {
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
  @media only screen and (max-width: 560px) {
    padding: 20px 12px;
  }
  @media only screen and (max-width: 400px) {
    padding: 20px 4px;
  }
  img {
    width: 18px;
    height: 18px;
    @media only screen and (max-width: 560px) {
      width: 16px;
      height: 16px;
    }
    @media only screen and (max-width: 400px) {
      display: none;
    }
  }
  .step {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 24px;
    padding: 6px 12px;
    background: rgba(53, 75, 199, 0.5);
    border-radius: 30px;
    &:hover {
      background: rgba(53, 75, 199, 0.8);
    }
    @media only screen and (max-width: 560px) {
      margin: 0 4px;
      padding: 6px 10px;
    }
    @media only screen and (max-width: 400px) {
      margin: 0 8px;
      border-radius: 50%;
      width: 24px;
      height: 24px;
    }
  }
  .step-number {
    color: white;
    font-size: 18px;
    margin-left: 8px;
    @media only screen and (max-width: 400px) {
      margin-left: 0;
      font-size: 12px;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.34);
  }
}
</style>
