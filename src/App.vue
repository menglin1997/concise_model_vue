<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
body {
  margin: 0;
}
// #app
// font-family Avenir, Helvetica, Arial, sans-serif
// -webkit-font-smoothing antialiased
// -moz-osx-font-smoothing grayscale
// text-align center
// color #2c3e50
// margin-top 60px

// element类型覆盖
.el-submenu__icon-arrow {
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  left: 0 !important;
  transform: rotateZ(-90deg) !important;
  color: #303133;
}

.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  transform: rotateZ(0deg) !important;
  color: #409eff;
}

// .el-icon-arrow-down::before {
// content: "" !important;
// }
.el-menu-item {
  overflow: hidden;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis; /* 超出省略号 */
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100% !important;
}

// 表格
.el-table--mini,
.el-table--small,
.el-table__expand-icon {
  font-size: 16px !important;
}

.el-table--small td,
.el-table--small th {
  padding: 10px 0 !important;
}

.el-table th {
  background-color: #f4f4f4 !important;
}

.el-input__prefix {
  left: 0px !important;
}

.el-input--prefix .el-input__inner {
  padding-left: 15px !important;
}

.el-button,
.el-button--default,
.el-button--small {
  background-color: #3196fa !important;
}

.el-main {
  padding: 0px !important;
}

.el-icon-search {
  color: white !important;
}

.el-drawer.ltr,
.el-drawer.rtl,
.el-drawer__container {
  top: 40px !important;
}

.el-drawer__body {
  overflow: auto !important;
}

// 标签页
.el-tabs__nav,
.is-topv {
  transform: translateX(12px) !important;
}

.el-tabs__content {
  padding: 0 30px !important;
}

.el-tabs__item {
  padding: 5px 20px !important;
  height: 50px !important;
  font-size: 16px !important;
}

.el-tabs__item:focus.is-active.is-focus:not(:active) {
  box-shadow: none !important;
}

.el-form-item__label {
  text-align: left !important;
}
</style>
