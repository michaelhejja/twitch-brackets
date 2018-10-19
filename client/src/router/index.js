import Home from '@/components/Home'
import Voting from '@/components/Voting'
import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vote',
      name: 'Voting',
      component: Voting
    },
  ],
  mode: 'history'
})
