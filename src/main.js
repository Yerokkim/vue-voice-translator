import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store";

import Vuex from "vuex";
import './registerServiceWorker'

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  store: store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
