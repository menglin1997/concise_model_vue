/*
 * @Descripttion:
 * @version:
 * @Author: zml
 * @Date: 2020-09-25 10:29:00
 * @LastEditors: zml
 * @LastEditTime: 2020-09-27 14:34:17
 */
// 基准大小
const baseSize = 8;
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 750;
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem();
};
