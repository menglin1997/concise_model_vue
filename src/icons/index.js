/*
 * @Descripttion:svg
 * @version:
 * @Author: zml
 * @Date: 2020-09-27 15:13:38
 * @LastEditors: zml
 * @LastEditTime: 2020-09-27 15:13:43
 */
import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg组件

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);