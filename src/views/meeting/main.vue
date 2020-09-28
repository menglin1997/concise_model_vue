<template>
  <!-- <div class="main"> -->
  <el-container>
    <div class="aside">
      <el-aside width="400px">
        <Father-son-navigation
          :navlist="navlist"
          @handleSelect="handleSelect"
        ></Father-son-navigation>
      </el-aside>
    </div>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
  <!-- </div> -->
</template>

<script>
import FatherSonNavigation from "@/components/SideNavigation/FatherSonNavigation";
export default {
  components: {
    FatherSonNavigation
  },
  // name: 'main',
  data() {
    return {
      navlist: [
        {
          code: "01",
          text: "值班工作管理",
          childlist: []
        },
        {
          code: "02",
          text: "会议管理",
          childlist: [
            {
              code: "001",
              text: "党代会、全会",
              childlist: []
            },
            {
              code: "002",
              text: "两会",
              childlist: []
            },
            {
              code: "003",
              text: "领导干部会议干部会议干部会议",
              childlist: []
            }
          ]
        },
        {
          code: "03",
          text: "活动管理",
          childlist: []
        },
        {
          code: "04",
          text: "工作预安排管理",
          childlist: []
        },
        {
          code: "05",
          text: "会议活动审批备案",
          childlist: []
        },
        {
          code: "06",
          text: "会议活动拟办单",
          childlist: []
        },
        {
          code: "07",
          text: "秘书处内部工作管理",
          childlist: []
        }
      ],
      isselect: "",
      onelist: []
    };
  },
  mounted() {
    this.onelist = this.navlist[0].childlist;
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, "key");
      console.log(keyPath, "keyPath");
      this.isselect = key;
      this.onelist = this.navlist[key - 1].childlist;
    }
  }
};
</script>

<style scoped>
.el-container {
  background-color: #eeeeee;
}

/* 内容 */
.el-main {
  /* margin-top: 30px;
  margin-right: 30px; */
  margin-left: 20px;
  background-color: white;
}
</style>
