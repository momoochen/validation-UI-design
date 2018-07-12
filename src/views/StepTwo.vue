<template>
  <div id ="step-two">
    <div id="wrapper">
      <div class="big-title">General Information</div>
      <div class="subtitle">Tell us who you are!</div>
      <form>
        <div class="form">
          <label class="label-text">Name</label>
          <input 
            v-validate="'required|alpha'" 
            :class="{'input': true, 'is-danger': errors.has('name') }" 
            name="name" 
            type="text"
            placeholder="example-name"
          >
          <span 
            class="error"
          >{{ errors.first('name') }}</span>
        </div>
        <div class="form">
          <label class="label-text">Phone</label>
          <input 
            v-validate="'required|numeric'" 
            v-model="phone" 
            :class="{'input': true, 'is-danger': errors.has('phone') }" 
            name="phone" 
            type="text" 
            placeholder="Enter your phone number"
          >
          <span 
            v-show="errors.has('phone')"
          >{{ errors.first('phone') }}</span>
        </div>
        <div class="form">
          <label class="label-text">Birth Day(Optional)</label>
          <input 
            v-validate="'birthday'" 
            v-model="birthday" 
            name="birthday"
            type="date" 
          >
          <span 
            v-show="errors.has('birthday')"
          >{{ errors.first('birthday') }}</span>
        </div>
        <div class="form">
          <label class="label-text">Address(Optional)</label>
          <input 
            v-validate="'address'" 
            v-model="city" 
            name="address"
            type="text"
            placeholder="City"
            class="margin-bottom"
          >
          <input 
            v-validate="'address'" 
            v-model="addres1" 
            name="address1"
            type="text"
            placeholder="Address1"
            class="margin-bottom"
          >
          <input 
            v-validate="'address'" 
            v-model="address2" 
            name="address2"
            type="text"
            placeholder="Address2"
          >
          <span 
            class="error"
          >{{ errors.first('password') }}</span>
        </div>
        <div class="form">
          <router-link to="/stepthree">
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
    phone: '',
    name: '',
    birthday: '',
    city: '',
    address1: '',
    address2: ''
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
#step-two {
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
    .margin-bottom {
      margin-bottom: 12px;
    }
  }
}
</style>
