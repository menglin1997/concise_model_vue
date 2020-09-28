<template>
  <!-- <div class="main"> -->
  <el-container>
    <div class="aside">
      <el-aside width="300px">
        <div class="asid_nav">
          <el-col>
            <el-menu
              @select="handleselect"
              class="el-menu-vertical-demo"
              default-active="1"
            >
              <el-menu-item index="1">
                <span slot="title">个人文件柜</span>
              </el-menu-item>
              <el-menu-item index="2">
                <span slot="title">值班工作文档</span>
              </el-menu-item>
              <el-menu-item index="3">
                <span slot="title">会议文档</span>
              </el-menu-item>
              <el-menu-item index="4">
                <span slot="title">活动文档</span>
              </el-menu-item>
              <el-menu-item index="5">
                <span slot="title">工作预安排文档</span>
              </el-menu-item>
              <el-menu-item index="6">
                <span slot="title">会议/活动审批备案文档</span>
              </el-menu-item>
              <el-menu-item index="7">
                <span slot="title">会议/活动拟办单文档</span>
              </el-menu-item>
              <el-menu-item index="8">
                <span slot="title">秘书处内部工作文档</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </div>
      </el-aside>
    </div>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
  <!-- </div> -->
</template>

<script>
export default {
  // name: 'main',
  data() {
    return {
      iscolour: "1"
    };
  },
  methods: {
    handleselect(key, keyPath) {
      this.iscolour = key;
      console.log(key, keyPath);
      if (key == 1) {
        this.$router.push({ path: this.redirect || "/FileCabinet" });
      } else if (key == 2) {
        this.$router.push({ path: this.redirect || "/DutyWork" });
      } else {
        this.$router.push({ path: this.redirect || "/FileCabinet" });
      }
    },
    MeetAdministration() {}
  }
};
</script>

<style scoped>
.el-container {
  background-color: #eeeeee;
}
/* 左侧导航 */
.el-aside {
  padding-left: 20px;
  background-color: white !important;
  font-size: 24px;
}

.title_colour {
  color: #409eff;
}

/* .asid_nav {
} */

.el-col {
  min-height: 878px;
}

/* 内容 */
.el-main {
  margin-left: 20px;
  background-color: white;
}

.right {
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 10px;
}
</style>
