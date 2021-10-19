import Vue from "vue";
import App from "./App.vue";

// Router
import router from "./router";

//Store
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
