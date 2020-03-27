import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//按需引入vant组件
import { Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Search } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem,Swipe, SwipeItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Search);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
