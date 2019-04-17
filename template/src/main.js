import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import Es6Promise from 'es6-promise'
import router from './router'
import axios from './config/axios'
import VueAxios from 'vue-axios'
import Global from './global'
import './element-ui'

Es6Promise.polyfill()
Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Global)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
