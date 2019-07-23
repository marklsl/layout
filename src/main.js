import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加
import 'element-ui/lib/theme-chalk/display.css' //新添加

import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iview)
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
