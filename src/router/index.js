import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hoge from '@/components/hoge'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{

      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hoge',
      name: 'Hoge',
      component: Hoge
    }
  ]
})
