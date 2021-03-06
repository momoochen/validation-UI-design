import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/assets/sass/main.scss'
import vSelect from 'vue-select'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.component('v-select', vSelect)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
