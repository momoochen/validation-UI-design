<template>
  <div id="step-one">
    <div id="wrapper">
      <div class="big-title">Create Account</div>
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
            v-validate="'required|length:8'" 
            :class="{'input': true, 'is-danger': errors.has('password') }" 
            v-model="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          >
          <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
        </div>
        <div class="form">
          <label class="label-text">Confirm Password</label>
          <input
            v-validate="'required|confirmed:password'" 
            :class="{'input': true, 'is-danger': errors.has('password') }" 
            v-model="passwordConfirmed" 
            name="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            target="password"
          >
          <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
        </div>
        <div class="form">
          <router-link to="/steptwo">
            <button 
              class="submit-button" 
              type="submit"
            >Submit</button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormExample',
  data: () => ({
    email: '',
    password: '',
    passwordConfirmed: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!');
          return
        }

        alert('Correct them errors!')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#step-one {
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
  }
}
</style>
