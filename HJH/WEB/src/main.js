import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vant from "vant";
import "vant/lib/index.css";
import Axios from "axios";

Vue.use(vant);
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = "http://127.0.0.1";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
