// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { progress, button, menu, menuItem } from 'element-ui'

Vue.config.productionTip = false
Vue.component('el-progress', progress)
Vue.component('el-button', button)
Vue.component('el-menu', menu)
Vue.component('el-menu-item', menuItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
