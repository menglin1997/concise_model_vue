/*
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-09-28 10:38:32
 * @LastEditors: zml
 * @LastEditTime: 2020-09-28 14:39:12
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo:localStorage.getItem('token') || '' // 登录保存
  },
  mutations: {
    SET_USERINFO(state,userInfo) {
			state.userInfo = userInfo;
			console.log(state.userInfo,'userInfo')
		},
  }
});
