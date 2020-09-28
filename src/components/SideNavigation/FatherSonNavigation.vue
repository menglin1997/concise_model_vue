<template>
  <div class="navigation">
    <div class="father">
      <el-menu
        @select="handleSelect"
        class="el-menu-vertical-demo"
        default-active="01"
      >
        <!-- 一级 -->
        <div :key="oneindex" v-for="(one, oneindex) in navlist">
          <el-menu-item :index="one.code">
            <span>{{ one.text }}</span>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
    <div class="son">
      <div class="son_type">
        <span>会议类型</span>
        <i @click="addtype" class="el-icon-plus right"></i>
      </div>
      <el-menu
        @select="handleSelect1"
        background-color="#f0f5fb"
        class="el-menu-vertical-demo"
        default-active="001"
      >
        <!-- 二级 -->
        <div
          :key="towindex"
          class="color-item"
          v-dragging="{
            item: two,
            list: onelist,
            group: 'item',
            otherData: otherData
          }"
          v-for="(two, towindex) in onelist"
        >
          <el-menu-item :index="two.code">
            <span class="son_text">{{ two.text }}</span>
          </el-menu-item>
        </div>
      </el-menu>
      <div class="son_text_input" id="elinput" v-show="isinput">
        <el-input
          @change="addinputdata()"
          autofocus="true"
          placeholder="请输入会议类型"
          ref="inputVal"
          v-model="towtext"
        ></el-input>
      </div>
    </div>
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
      onelist: [],
      otherData: [],
      isinput: false,
      towtext: ""
    };
  },
  mounted() {
    this.onelist = this.navlist[0].childlist;
    //换位置
    this.$dragging.$on("dragged", ({ value }) => {
      console.log(value.item);
      console.log(value.list);
      console.log(value.otherData);
      this.onelist = value.list;
    });
    this.$dragging.$on("dragend", () => {});
  },
  methods: {
    handleSelect(key, keyPath) {
      this.isinput = false;
      this.isselect = key;
      this.onelist = this.navlist[key - 1].childlist;
    },
    handleSelect1(key, keyPath) {
      this.isinput = false;
      this.isselect = key;
      this.$emit("handleSelect", key, keyPath);
    },
    addtype() {
      this.isinput = true;
      // this.$nextTick(function () {
      // })
      setTimeout(() => {
        this.$refs.inputVal.focus();
        // location.hash = "elinput";
      }, 0);
    },
    addinputdata() {
      let index = this.onelist.length;
      let arr = {};
      arr.code = "00" + index;
      arr.text = this.towtext;
      arr.childlist = [];
      this.onelist.push(arr);
      this.isinput = false;
      this.towtext = "";
    }
  }
};
</script>

<style scoped>
.navigation {
  display: flex;
  min-height: 800px;
}
.father {
  width: 45%;
  background: #fff;
}
.son {
  width: 55%;
  background: #f0f5fb;
}
.son_type {
  font-size: 16px;
  color: #303133;
  padding: 0 20px;
  /* cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s; */
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 56px;
  line-height: 56px;
  position: relative;
  white-space: nowrap;
  list-style: none;
}

/* .el-menu-item {
  width: 100px;
} */
.son_text_input {
  padding: 10px 0;
  /* background: #fff; */
}
.is-active {
  background: #ffff !important;
}
.right {
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 30px;
}
.right img {
  margin-left: 10px;
}
.right_right {
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: -1px;
  z-index: 999;
}
.right_right img {
  background: #e1edfb;
  border-radius: 50%;
}
</style>
