<template>
  <div id ="step-three">
    <div id="wrapper">
      <div class="big-title">Payment Method</div>
      <div class="subtitle">Add your credit card information!</div>
      <form 
        @submit.prevent="validateBeforeSubmit"
      >
        <div class="form">
          <label class="label-text">Card Number</label>
          <input 
            v-validate="'required'" 
            v-model="cardnumber"
            :class="{'input': true, 'is-danger': errors.has('card number') }" 
            name="cardnumber"
            type="text"
            placeholder="Enter your card number"
          >
          <span v-show="errors.has('card number')">{{ errors.first('card number') }}</span>
        </div>
        <div class="form">
          <label class="label-text">Cardholder Name</label>
          <input 
            v-validate="'required'" 
            v-model="cardHolderName"
            :class="{'input': true, 'is-danger': errors.has('cardholder name') }" 
            name="cardholder-name"
            type="text"
            placeholder="Enter cardholder name"
          >
          <span v-show="errors.has('cardholder name')">{{ errors.first('cardholder name') }}</span>
        </div>
        <router-link to="/stepfive">
          <button 
            class="submit-button" 
            type="submit"
          >Done</button>
        </router-link>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FormExample',
  data: () => ({
    cardnumber: '',
    cardHolderName: ''
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
  }
}
</style>
