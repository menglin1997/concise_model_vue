<template>
  <el-container>
    <div class="aside">
      <el-aside width="300px">
        <div class="asid_nav">
          <!-- @handleClose="handleClose" -->
          <!-- @handleOpen="handleOpen" -->
          <!-- @handleSelect="handleSelect" -->

          <Side-navigation
            :active="1"
            :isdisplay="0"
            :navlist="navlist"
          ></Side-navigation>
        </div>
      </el-aside>
    </div>
    <el-main>
      <div class="centent">
        <div class="searchcondition">
          <div class="centent_name">个人文档柜</div>
          <div class="tabledata">
            <div class="data">
              <div class="data_search">
                <el-input
                  class="input-with-select"
                  placeholder="请输入内容"
                  v-model="input3"
                >
                  <!-- <el-button icon="el-icon-search" slot="append"></el-button> -->
                  <el-button slot="append">搜索</el-button>
                </el-input>
              </div>
              <div class="data_Import">
                <div class="export">创建文件夹</div>
                <div class="add">上传文件</div>
              </div>
            </div>
            <div class="table">
              <el-table
                :data="tableData"
                @row-click="Details"
                @selection-change="handleSelectionChange"
                border
                ref="multipleTable"
                style="width: 100%"
                tooltip-effect="dark"
              >
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column label="名称" show-overflow-tooltip width="250">
                  <template slot-scope="scope">
                    <div class="filenameimg">
                      <img
                        src="../../assets/images/file.png"
                        v-if="scope.row.filetype == 'file'"
                      />
                      <img
                        src="../../assets/images/word.png"
                        v-if="scope.row.filetype == 'doc'"
                      />
                      <img
                        src="../../assets/images/pdf.png"
                        v-if="scope.row.filetype == 'pdf'"
                      />
                      <img
                        src="../../assets/images/ppt.png"
                        v-if="scope.row.filetype == 'ppt'"
                      />
                      <img
                        src="../../assets/images/mp3.png"
                        v-if="scope.row.filetype == 'mp3'"
                      />
                      <span>{{ scope.row.name }}</span>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="类型"
                  prop="filetype"
                  show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                  label="大小"
                  prop="size"
                  show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                  label="更新时间"
                  prop="date"
                  show-overflow-tooltip
                ></el-table-column>
                <el-table-column
                  label="操作"
                  :resizable="false"
                  show-overflow-tooltip
                  width="180px"
                >
                  <template slot-scope="scope">
                    <span @click.stop="update" class="button">下载</span>
                    <span @click.stop="onandoff(scope.$index)" class="button"
                      >删除</span
                    >
                    <span @click.stop="onandoff(scope.$index)" class="button"
                      >复制</span
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import SideNavigation from "@/components/SideNavigation/SideNavigation";
export default {
  components: {
    SideNavigation
  },
  // name: 'personal',
  data() {
    return {
      navlist: [
        {
          code: "1",
          text: "个人文件柜",
          childlist: []
        },
        {
          code: "2",
          text: "值班工作文档",
          childlist: []
        },
        {
          code: "3",
          text: "会议文档",
          childlist: []
        },
        {
          code: "4",
          text: "活动文档",
          childlist: []
        },
        {
          code: "5",
          text: "工作预安排文档",
          childlist: []
        },
        {
          code: "6",
          text: "会议/活动审批备案文档",
          childlist: []
        },
        {
          code: "7",
          text: "会议/活动拟办单文档",
          childlist: []
        },
        {
          code: "8",
          text: "秘书处内部工作文档",
          childlist: []
        }
      ],
      input: "",
      input3: "",
      value3: "",
      tableData: [
        {
          id: 1,
          filetype: "file",
          name: "文件夹",
          size: "2.4MB",
          phone: "13800000009",
          state: 0,
          statename: "禁用",
          date: "2020-10-12 10:30"
        },
        {
          id: 1,
          filetype: "doc",
          name: "关于xxx的操作手册.doc",
          size: "2.4MB",
          phone: "13800000008",
          state: 0,
          statename: "禁用",
          date: "2020-10-12 10:30"
        },
        {
          id: 1,
          filetype: "pdf",
          name: "关于xxx的操作手册.pdf",
          size: "2.4MB",
          phone: "13800000007",
          state: 1,
          statename: "启用",
          date: "2020-10-12 10:30"
        },
        {
          id: 1,
          filetype: "ppt",
          name: "关于xxx的操作手册.ppt",
          size: "2.4MB",
          state: 1,
          statename: "启用",
          date: "2020-10-12 10:30"
        }
      ]
    };
  },
  // created () {
  // },
  mounted: function() {},
  methods: {
    handleselect(key, keyPath) {
      this.iscolour = key;
      console.log(key, keyPath);
    },
    //复选框
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //修改
    update() {},
    onandoff(index) {
      console.log(index);
      if (this.tableData[index].state == 0) {
        this.tableData[index].state = 1;
        this.tableData[index].statename = "启用";
      } else {
        this.tableData[index].state = 0;
        this.tableData[index].statename = "禁用";
      }
    },
    // 详情
    Details(row) {
      console.log(row, "details");
      this.isselup = row.index;
      this.drawer = true;
    },
    NoDetails() {
      this.drawer = false;
    }
  }
};
</script>

<style scoped>
.el-container {
  background-color: #eeeeee;
}

.el-aside {
  padding-left: 20px;
  background-color: white !important;
  font-size: 24px;
}
.asid_nav {
  min-height: 878px;
}
/* 内容 */
.el-main {
  margin-left: 20px;
  background-color: white;
}
/* 检索条件 */
.searchcondition {
  background-color: white;
  margin-bottom: 30px;
  padding: 30px;
}

.centent_name {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}
.el-button {
  color: #fff !important;
}

/* 表格数据 */
.tabledata {
  background-color: white;
  padding: 20px;
  min-height: 400px;
  position: relative;
}

.data {
  background-color: white;
  display: flex;
  justify-content: space-between;
}

.data_search {
  width: 500px;
}

.data_Import {
  width: 250px;
  display: flex;
  justify-content: space-around;
}

.data_Import div {
  border-radius: 3px;
  width: 100px;
  background-color: #3196fa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

/* 表格 */
.table {
  margin-top: 30px;
}

.el-table th {
  background-color: #eeeeee;
}
.filenameimg {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* .filenameimg img {
} */
.filenameimg span {
  width: 40px;
  margin-left: 10px;
}
.button {
  cursor: pointer;
  color: #6cb1fb;
  margin-right: 20px;
}
</style>
