import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入axios
import axios from "axios"
//配置跨域访问选项
axios.defaults.withCredentials=true;
//5:将axios配置Vue实例属性
Vue.prototype.axios = axios
//按需引入vant组件
import { Tabbar,TabbarItem,Swipe, SwipeItem,Lazyload,Search,Image,Loading } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem,Swipe, SwipeItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Search);
Vue.use(Image);
Vue.use(Loading);
Vue.config.productionTip = false;

//lazyload配置
Vue.use(Lazyload, {
  lazyComponent: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
