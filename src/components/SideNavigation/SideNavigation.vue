<template>
  <div class="container">
    <el-menu
      @close="handleClose"
      @open="handleOpen"
      @select="handleSelect"
      class="el-menu-vertical-demo"
      default-active="1"
    >
      <!-- 一级 -->
      <div :key="oneindex" v-for="(one, oneindex) in navlist">
        <el-submenu :index="one.code" v-if="one.childlist.length != 0">
          <template slot="title">
            <i class="el-icon-plus right" v-show="isopen == one.code"></i>
            <span :class="iscolour == one.code ? 'title_colour' : ''">{{
              one.text
            }}</span>
          </template>
          <!-- 二级 -->
          <div :key="twoindex" v-for="(two, twoindex) in one.childlist">
            <el-menu-item :index="two.code" v-if="two.childlist.length == 0">
              <span>{{ two.text }}</span>
              <div
                class="right"
                v-show="isselect == two.code && isdisplay == 1"
              >
                <img src="../../assets/images/1_11.png" />
                <img src="../../assets/images/1_12.png" />
                <img src="../../assets/images/1_13.png" />
                <img src="../../assets/images/1_14.png" />
              </div>
            </el-menu-item>
            <el-submenu :index="two.code" v-if="two.childlist.length != 0">
              <template slot="title">
                <i class="el-icon-plus right" v-show="isopen == two.code"></i>
                <span :class="iscolour == two.code ? 'title_colour' : ''">{{
                  two.text
                }}</span>
              </template>
              <!-- 三级 -->
              <div
                :key="threeindex"
                v-for="(three, threeindex) in two.childlist"
              >
                <el-menu-item
                  :index="three.code"
                  v-if="three.childlist.length == 0"
                >
                  <span>{{ three.text }}</span>
                  <div
                    class="right"
                    v-show="isselect == three.code && isdisplay == 1"
                  >
                    <img src="../../assets/images/1_11.png" />
                    <img src="../../assets/images/1_12.png" />
                    <img src="../../assets/images/1_13.png" />
                    <img src="../../assets/images/1_14.png" />
                  </div>
                </el-menu-item>
                <el-submenu
                  :index="three.code"
                  v-if="three.childlist.length != 0"
                >
                  <template slot="title">
                    <i
                      class="el-icon-plus right"
                      v-show="isopen == three.code"
                    ></i>
                    <span
                      :class="iscolour == three.code ? 'title_colour' : ''"
                      >{{ three.text }}</span
                    >
                  </template>
                  <!-- 四级 -->
                  <div
                    :key="fourindex"
                    v-for="(four, fourindex) in three.childlist"
                  >
                    <el-menu-item
                      :index="four.code"
                      v-if="four.childlist.length == 0"
                    >
                      <span>{{ four.text }}</span>
                      <div
                        class="right"
                        v-show="isselect == four.code && isdisplay == 1"
                      >
                        <img src="../../assets/images/1_11.png" />
                        <img src="../../assets/images/1_12.png" />
                        <img src="../../assets/images/1_13.png" />
                        <img src="../../assets/images/1_14.png" />
                      </div>
                    </el-menu-item>
                    <el-submenu
                      :index="four.code"
                      v-if="four.childlist.length != 0"
                    >
                      <template slot="title">
                        <i
                          class="el-icon-plus right"
                          v-show="isopen == four.code"
                        ></i>
                        <span
                          :class="iscolour == four.code ? 'title_colour' : ''"
                          >{{ four.text }}</span
                        >
                      </template>
                      <!-- 五级 -->
                      <div
                        :key="fiveindex"
                        v-for="(five, fiveindex) in four.childlist"
                      >
                        <el-menu-item
                          :index="five.code"
                          v-if="five.childlist.length == 0"
                        >
                          <span>{{ five.text }}</span>
                          <div
                            class="right"
                            v-show="isselect == five.code && isdisplay == 1"
                          >
                            <img src="../../assets/images/1_11.png" />
                            <img src="../../assets/images/1_12.png" />
                            <img src="../../assets/images/1_13.png" />
                            <img src="../../assets/images/1_14.png" />
                          </div>
                        </el-menu-item>
                      </div>
                    </el-submenu>
                  </div>
                </el-submenu>
              </div>
            </el-submenu>
          </div>
        </el-submenu>
        <el-menu-item :index="one.code" v-if="one.childlist.length == 0">
          <span>{{ one.text }}</span>
          <div class="right" v-show="isselect == one.code && isdisplay == 1">
            <img src="../../assets/images/1_11.png" />
            <img src="../../assets/images/1_12.png" />
            <img src="../../assets/images/1_13.png" />
            <img src="../../assets/images/1_14.png" />
          </div>
        </el-menu-item>
      </div>
    </el-menu>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Child",
  // props: [
  //   'navlist',
  // ],
  // String
  // Number
  // Boolean
  // Array
  // Object
  props: {
    navlist: {
      type: Array,
      require: true //必填
    },
    isdisplay: {
      type: Number
    },
    active: {
      type: Number
    },
    type: {
      //校验： 判断type是否是success,warning和primary之一。
      validator: function(value) {
        return ["success", "warning", "primary"].indexOf(value) > -1;
      }
    }
  },
  data() {
    return {
      isselect: "0",
      iscolour: "0",
      isopen: "0"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      this.iscolour = key;
      this.isopen = key;
      this.$emit("handleOpen", key, keyPath);
    },
    handleClose(key, keyPath) {
      this.iscolour = "0";
      this.isopen = "0";
      this.$emit("handleClose", key, keyPath);
    },
    handleSelect(key, keyPath) {
      this.isselect = key;
      this.$emit("handleSelect", key, keyPath);
    }
  }
};
</script>

<style scoped>
.title_colour {
  color: #409eff;
}
.right {
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 10px;
}
.right img {
  width: 15px;
  margin-left: 10px;
}
</style>
