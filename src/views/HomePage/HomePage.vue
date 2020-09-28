<!--
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-09-25 10:29:00
 * @LastEditors: zml
 * @LastEditTime: 2020-09-27 15:21:51
-->
<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import adminDashboard from "../admin";

export default {
  name: "Dashboard",
  components: { adminDashboard },
  data() {
    return {
      currentRole: "adminDashboard"
    };
  },
  computed: {
    ...mapGetters(["roles"])
  },
  created() {
    // if (!this.roles.includes('admin')) {
    //   this.currentRole = 'editorDashboard'
    // }
  }
};
</script>
<style scoped>
.dashboard-container {
  width: 100%;
}
</style>
