import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/Home.vue'
import City from 'components/city/City.vue'
import Detail from 'components/detail/Detail'
Vue.use(Router)

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
