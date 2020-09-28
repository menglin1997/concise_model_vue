<template>
  <!-- <div class="main"> -->
  <el-container>
    <div class="aside">
      <el-aside width="300px">
        <div class="asid_nav">
          <el-col>
            <Side-navigation
              :active="1"
              :isdisplay="0"
              :navlist="navlist"
              @handleClose="handleClose"
              @handleOpen="handleOpen"
              @handleSelect="handleSelect"
            ></Side-navigation>
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
import SideNavigation from "@/components/SideNavigation/SideNavigation";
export default {
  // name: 'main',
  data() {
    return {
      navlist: [
        {
          code: "1",
          text: "账户管理",
          childlist: []
        },
        {
          code: "2",
          text: "角色管理",
          childlist: []
        },
        {
          code: "3",
          text: "日志管理",
          childlist: []
        },
        {
          code: "4",
          text: "系统参数配置",
          childlist: []
        },
        {
          code: "5",
          text: "帮助管理",
          childlist: []
        }
      ]
    };
  },
  components: {
    SideNavigation
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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
