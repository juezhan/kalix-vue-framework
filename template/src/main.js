{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
import axios from './config/axios'
import VueAxios from 'vue-axios'
import Global from './global'
import './element-ui'{{#router}}
import router from './router'{{/router}}
import store from './store'

Vue.config.productionTip = false
Vue.use(Global)
Vue.use(VueAxios, axios)

    /* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
