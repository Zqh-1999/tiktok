import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import Axios from 'axios'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.prototype.$Http = Axios

Axios.defaults.baseURL = 'http://127.0.0.1:8181'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
