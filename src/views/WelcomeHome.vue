<template>
  <div id="home">
    <div id="wrapper">
      <div class="big-title">Welcome!</div>
      <div class="subtitle">Glad to see you here!</div>
      <form 
        @submit.prevent="validateBeforeSubmit"
      >
        <div class="form">
          <label class="label-text">Account</label>
          <input 
            v-validate="'required|email'" 
            :class="{'input': true, 'is-danger': errors.has('email') }" 
            name="email"
            type="text"
            placeholder="Enter your email address"
          >
          <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
        </div>
        <div class="form">
          <label class="label-text">Password</label>
          <input 
            v-validate="'required|password'" 
            :class="{'input': true, 'is-danger': errors.has('password') }" 
            name="password"
            type="password"
            placeholder="Enter your password"
          >
          <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
        </div>
        <div class="form">
          <router-link to="/steptwo">
            <button 
              class="submit-button" 
              type="submit"
            >Login</button>
          </router-link>
        </div>
      </form>
      <div class="signup-text">Don't have an account yet?</div>
      <router-link to="/stepone">
        <button 
          class="submit-button signup" 
          type="submit"
        >Signup</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#home {
  padding: 30px 50px 100px 50px;
  margin: 0 auto;
  @media only screen and (max-width: 560px) {
    padding: 20px 12px 80px 12px;
  }
  #wrapper {
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.33);
    padding: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    max-width: 480px;
    @media only screen and (max-width: 560px) {
      padding: 20px 16px;
      border-radius: 12px;
    }
  }
  .signup {
    background: rgba(255, 255, 255, 0.1);
    margin-top: 6px;
    &:hover {
      background: rgb(39, 52, 129);
    }
  }
  .signup-text {
    font-size: 14px;
    margin: 30px 0 0 0;
  }
}
</style>
