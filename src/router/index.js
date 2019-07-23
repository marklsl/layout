import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/iview'
import HelloWorld from '@/components/elementUi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path: '/elementUi',
        name: 'elementUi',
        component: () => import('@/components/elementUi')
    },
    {
        path: '/float',
        name: 'float',
        component: () => import('@/components/float')
    },
    {
        path: '/box',
        name: 'box',
        component: () => import('@/components/box')
    }
    // ,
    // {
    //   path: '/hello',
    //   name: 'hello',
    //   component: () => import('../components/HelloWorld.vue'),
    //   children:[
    //       {
    //           path: 'testLayout',
    //           name: 'testLayout',
    //           component: () => import('../components/iview.vue')
    //       }
    //   ]
    // }
  ]
})
