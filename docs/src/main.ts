import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueText, VueVideo } from "../../dist/umd/index";
import '../../dist/umd/style.css'

Vue.config.productionTip = false;
Vue.use(VueText)
Vue.use(VueVideo)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
