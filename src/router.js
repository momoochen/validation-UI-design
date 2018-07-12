import Vue from 'vue'
import Router from 'vue-router'
import WelcomeHome from './views/WelcomeHome'
import StepsWrapper from './views/StepsWrapper'
import StepOne from './views/StepOne'
import StepTwo from './views/StepTwo'
import StepThree from './views/StepThree'
import StepFour from './views/StepFour'
import StepFive from './views/StepFive'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WelcomeHome
    },
    {
      path: '',
      component: StepsWrapper,
      children: [
        {
          path: 'stepone',
          component: StepOne
        },
        {
          path: '/steptwo',
          component: StepTwo
        },
        {
          path: '/stepthree',
          component: StepThree
        },
        {
          path: '/stepfour',
          component: StepFour
        }
      ]
    },
    {
      path: '/stepfive',
      component: StepFive
    }
  ]
})
