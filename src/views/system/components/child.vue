<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-09-27 16:03:29
 * @LastEditors: zml
 * @LastEditTime: 2020-09-27 16:48:14
-->
<template>
  <div>
    我是孩子 这个父亲给我的{{ hello }}

    <grand></grand>
  </div>
</template>
<script>
import grand from "./grandSon";

export default {
  //   props: ["hello"],
  props: {
    hello: {
      type: String,
      default: ""
    }
  },
  inject: ["foo"],

  components: {
    grand
  },
  data() {
    return {};
  }
};
</script>
