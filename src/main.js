/*
 * @Descripttion:
 * @version:
 * @Author: zml
 * @Date: 2020-09-25 10:29:00
 * @LastEditors: zml
 * @LastEditTime: 2020-09-27 15:44:49
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./icons"; // icon
// import Icon from "vue-svg-icon/Icon.vue";
// Vue.component("icon", Icon); //注册svg插件
// import Cookies from 'js-cookie'
import "./utils/rem";

import "./assets/styles/index.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, {
  size: "small",
  zIndex: 3000
});
//拖动
import VueDND from "awe-dnd";
Vue.use(VueDND);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
