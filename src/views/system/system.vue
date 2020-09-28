<template>
  <div class="centent">
    <div class="searchcondition">
      <div class="centent_name">账户管理</div>
      <div class="tabledata">
        <div class="data">
          <div class="data_search">
            <el-input
              class="input-with-select"
              placeholder="请输入内容"
              v-model="input3"
            >
              <el-button icon="el-icon-search" slot="append"></el-button>
            </el-input>
          </div>
          <div class="data_Import">
            <div class="export">启用</div>
            <div class="add">停用</div>
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
            <el-table-column label="账号名" show-overflow-tooltip>
              <template slot-scope="scope">{{
                scope.row.Accountname
              }}</template>
            </el-table-column>
            <el-table-column
              label="姓名"
              prop="name"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              label="角色"
              prop="role"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column
              label="手机号"
              prop="phone"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column label="状态" show-overflow-tooltip>
              <template slot-scope="scope">
                <span :class="scope.row.state == 0 ? 'stateoff' : ''">{{
                  scope.row.statename
                }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="同步时间"
              prop="date"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column label="操作" show-overflow-tooltip>
              <template slot-scope="scope">
                <span @click.stop="update" class="button">修改</span>
                <span
                  @click.stop="onandoff(scope.$index)"
                  class="button"
                  v-if="scope.row.state == 0"
                  >启用</span
                >
                <span
                  @click.stop="onandoff(scope.$index)"
                  class="button"
                  v-if="scope.row.state == 1"
                  >禁用</span
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'content',
  data() {
    return {
      input: "",
      input3: "",
      value3: "",
      tableData: [
        {
          id: 1,
          Accountname: "sw_qiankun",
          name: "钱坤",
          role: "主班",
          phone: "13800000009",
          state: 0,
          statename: "禁用",
          date: "10月10日 10:30"
        },
        {
          id: 1,
          Accountname: "sw_yanghui",
          name: "杨慧",
          role: "主班",
          phone: "13800000008",
          state: 0,
          statename: "禁用",
          date: "10月10日 11:30"
        },
        {
          id: 1,
          Accountname: "sw_zhangsan",
          name: "张三",
          role: "主班",
          phone: "13800000007",
          state: 1,
          statename: "启用",
          date: "10月10日 11:30"
        },
        {
          id: 1,
          Accountname: "sw_lisi",
          name: "李四",
          role: "主班",
          phone: "13800000006",
          state: 1,
          statename: "启用",
          date: "10月10日 11:30"
        }
      ]
    };
  },
  // created () {
  // },
  mounted: function() {},
  methods: {
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
/* 内容 */

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
  width: 200px;
  display: flex;
  justify-content: space-around;
}

.data_Import div {
  border-radius: 3px;
  width: 80px;
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

.stateoff {
  color: red;
}
.button {
  cursor: pointer;
  color: #6cb1fb;
  margin-left: 20px;
}
</style>
