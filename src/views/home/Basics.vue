<template>
  <div class="Basics">
    <el-container>
      <el-header>
        <div class="header">
          <!-- <div @click="HomePage" class="header_name">值班管理</div> -->
          <div class="header_name">值班管理</div>
          <div class="header_sav">
            <el-col>
              <el-menu
                :default-active="activeIndex"
                @select="handleSelect"
                active-text-color="#ffd04b"
                background-color="#3196fa"
                mode="horizontal"
                text-color="#fff"
              >
                <el-menu-item index="1">
                  <div class="header_navigation">
                    <img src="../../assets/images/1_1.png" />
                    <span>工作台</span>
                  </div>
                </el-menu-item>
                <el-menu-item index="2">
                  <div class="header_navigation">
                    <img src="../../assets/images/1_2.png" />
                    <span>工作事宜</span>
                  </div>
                </el-menu-item>
                <el-menu-item index="3">
                  <div class="header_navigation">
                    <img src="../../assets/images/1_3.png" />
                    <span>文件柜</span>
                  </div>
                </el-menu-item>
                <!-- <el-menu-item index="4">
                  <img src="../assets/images/1_4.png" />统计分析
                </el-menu-item>-->
                <el-menu-item index="4">
                  <div class="header_navigation">
                    <img src="../../assets/images/1_4.png" />
                    <span>通讯录管理</span>
                  </div>
                </el-menu-item>
                <el-menu-item index="5">
                  <div class="header_navigation">
                    <img src="../../assets/images/1_5.png" />
                    <span>系统管理</span>
                  </div>
                </el-menu-item>
              </el-menu>
            </el-col>
          </div>
          <div @click="search" class="search">
            <input placeholder="请输入内容" type="text" />
            <span>
              <i class="el-icon-search"></i>
            </span>
          </div>
          <div class="root">
            <span class="alone">2020-6-16 星期六 双休日</span>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            <span class="alone">zml</span>
            <el-avatar icon="el-icon-switch-button"></el-avatar>
            <span class="alone">退出</span>
          </div>
        </div>
      </el-header>

      <el-container>
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Basics",
  data() {
    return {
      activeIndex: "0"
    };
  },
  created() {
    console.log(this.$store.state.userInfo,'userInfo')
  },
  methods: {
    HomePage() {
      this.activeIndex = "0";
      // this.$router.push({ path: this.redirect || '/Basics' })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath, "111");
      this.activeIndex = key;

      if (key == 1) {
        this.$router.push("/Basics");
      } else if (key == 2) {
        this.$router.push({ path: this.redirect || "/meeting" });
      } else if (key == 3) {
        this.$router.push({ path: this.redirect || "/FileCabinet" });
      } else if (key == 4) {
        this.$router.push({ path: this.redirect || "/contact" });
      } else if (key == 5) {
        this.$router.push({ path: this.redirect || "/system" });
      } else {
        this.$router.push({ path: this.redirect || "/meeting" });
      }
    },
    // 搜索
    search() {
      this.$router.push("/search");
    }
  }
};
</script>

<style scoped>
.Basics {
  height: 100vh;
  font-size: 16px;
}
.el-header {
  background-color: #3196fa;
  color: white;
  position: relative;
}
/* 头部 */
.header {
  display: flex;
}

.header_name {
  color: white;
  line-height: 60px;
  margin-right: 100px;
  margin-left: 20px;
  cursor: pointer;
  font-size: 22px;
}
/* 搜索 */
.search {
  margin: auto 0;
  background: #1275da;
  border-radius: 5px;
  margin-left: 50px;
}
.search input {
  height: 25px;
  background: none;
  outline: none;
  border: 0px;
  color: #fff;
  padding-left: 10px;
}
.search span {
  padding: 10px;
}
/* 个人信息 */
.root {
  font-size: 16px;
  position: absolute;
  right: 40px;
  height: 60px;
  display: flex;
  align-items: center;
}
.root span {
  background: #3196fa;
}

.header_navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_navigation span {
  margin-left: 10px;
}

/* 头部 点击变背景色 */
.is-active {
  /* outline: 0 !important; */
  color: #fff !important;
  border-bottom-color: #3196fa !important;
  background-color: #1275da !important;
}
</style>
