<template>
  <div id ="step-three">
    <div id="wrapper">
      <div class="big-title">Update Profile Picture</div>
      <div class="subtitle">We wanna know more about you!</div>
      <div class="photo" />
      <form class="form">
        <router-link to="/stepfour">
          <button 
            class="submit-button" 
            type="submit"
          >Submit</button>
        </router-link>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'FormExample',
  data: () => ({
    email: '',
    password: ''
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
    .photo {
      margin: 30px auto;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-image: url('../assets/imgs/avatar.svg');
      background-size: cover;
      &:hover {
        background-image: url('../assets/imgs/avatar-upload.svg');
      }
      cursor: pointer;
    }
  }
}
</style>
