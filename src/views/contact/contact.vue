<template>
  <el-container>
    <div class="aside">
      <el-aside width="300px">
        <div class="nav_nav">
          <div class="nav_search">
            <el-input class="input-with-select" placeholder="请输入机构名称" v-model="inputdata">
              <el-button slot="append" style="color:#fff;">搜索</el-button>
            </el-input>
          </div>
          <div class="nav_classify">
            <span :class="isoften==0?'nav_Select':''" @click="selectclassify(0)">组织架构</span>
            <span :class="isoften==1?'nav_Select':''" @click="selectclassify(1)">常用分组</span>
          </div>
        </div>
        <div class="asid_nav">
          <el-col>
            <Side-navigation
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
      <div class="centent">
        <div class="contact">
          <!-- <div class="contact_name">通讯录管理</div> -->
          <div class="contact_title" v-if="isoften==0">
            <div class="contact_title_left">
              <div class="contact_title_name">
                <span>xxxxxxxxx分组</span>
                <span>杭州市上城区xxxxxx路xxx号</span>
              </div>
              <div class="contact_title_basic">
                <div class="contact_title_describe">
                  <span>负责人</span>
                  <span>杜万</span>
                </div>
                <div class="contact_title_describe">
                  <span>机密秘书</span>
                  <span>王博</span>
                </div>
                <div class="contact_title_describe">
                  <span>总机</span>
                  <span>658123131</span>
                </div>
                <div class="contact_title_describe">
                  <span>机要室电话</span>
                  <span>658123131</span>
                </div>
                <div class="contact_title_describe">
                  <span>值班室电话</span>
                  <span>658123131</span>
                </div>
                <div class="contact_title_describe">
                  <span>值班室传真</span>
                  <span>658123131</span>
                </div>
              </div>
            </div>
            <div class="contact_title_right">
              <i class="el-icon-edit-outline"></i>
              <span class="updatasize">编辑</span>
            </div>
          </div>
          <div class="contact_title" v-if="isoften==1">
            <div>
              <div class="contact_title_name">
                <span>xxxxxxxxx分组</span>
              </div>
              <div class="contact_title_describe">
                <span>描述</span>
                <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx（这是一段简介说明）</span>
              </div>
            </div>
            <div class="contact_title_right">
              <i class="el-icon-edit-outline"></i>
              <span class="updatasize">编辑</span>
            </div>
          </div>
          <div class="tabledata">
            <div class="data">
              <div class="condition">
                <div class="data_search">
                  <el-input class="input-with-select" placeholder="请输入机构名称和姓名" v-model="input3">
                    <el-button slot="append">搜索</el-button>
                  </el-input>
                </div>
                <el-checkbox v-model="onlycontact">仅展示常用联系人</el-checkbox>
              </div>
              <div class="data_Import">
                <div class="export">添加人员</div>
                <div class="add">删除人员</div>
                <div class="add">导出</div>
                <div class="add">导入</div>
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
                <el-table-column label="所属机构" show-overflow-tooltip>
                  <template slot-scope="scope">{{ scope.row.mechanism }}</template>
                </el-table-column>
                <el-table-column label="姓名" width="150">
                  <template slot-scope="scope">
                    <span>{{scope.row.name}}</span>
                    <span class="sign1" v-if="scope.row.charge==1">负责</span>
                    <span class="sign2" v-if="scope.row.state==1">常用</span>
                  </template>
                </el-table-column>
                <el-table-column label="性别" prop="sex" width="55"></el-table-column>
                <el-table-column label="岗位/职务" prop="post" show-overflow-tooltip></el-table-column>
                <el-table-column label="工作电话" prop="tele" width="110"></el-table-column>
                <el-table-column label="手机号" prop="phone" width="110"></el-table-column>
                <el-table-column label="分管事项" prop="administration" show-overflow-tooltip></el-table-column>
                <el-table-column label="所属群组" prop="grouping" show-overflow-tooltip></el-table-column>
                <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <span
                      @click.stop="onandoff(scope.$index)"
                      class="button"
                      v-if="scope.row.state==0"
                    >设为常用联系人</span>
                    <span
                      @click.stop="onandoff(scope.$index)"
                      class="button"
                      v-if="scope.row.state==1"
                    >取消常用联系人</span>
                    <span @click.stop="update" class="button">删除</span>
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
  // name: 'content',
  data () {
    return {
      inputdata: '',
      isoften: 0,//组织架构、常用分组
      navlist: [],
      groupinglist: [
        {
          code: '1',
          text: '浙江省',
          childlist: [
            {
              code: '1-1',
              text: '杭州市',
              childlist: [
                {
                  code: '1-1-1',
                  text: '上城区',
                  childlist: [
                    {
                      code: '1-1-1-1',
                      text: 'xxxx局',
                      childlist: []
                    }, {
                      code: '1-1-1-2',
                      text: 'xxxx局',
                      childlist: []
                    }
                  ]
                },
                {
                  code: '1-1-2',
                  text: '下城区',
                  childlist: []
                },
                {
                  code: '1-1-3',
                  text: '西湖区',
                  childlist: []
                },
                {
                  code: '1-1-4',
                  text: '拱墅区',
                  childlist: []
                },
                {
                  code: '1-1-5',
                  text: '江干区',
                  childlist: []
                },
              ]
            },
            {
              code: '1-2',
              text: '宁波市',
              childlist: []
            },
            {
              code: '1-3',
              text: '金华市',
              childlist: []
            },
            {
              code: '1-4',
              text: '绍兴市',
              childlist: []
            },
            {
              code: '1-5',
              text: '衢州市',
              childlist: []
            },
          ]
        },
      ],
      oftenlist: [
        {
          code: '1',
          text: '常用分组分类',
          childlist: [
            {
              code: '1-1',
              text: '常用分组1',
              childlist: []
            }, {
              code: '1-2',
              text: '常用分组2',
              childlist: []
            }, {
              code: '1-3',
              text: '常用分组3',
              childlist: []
            },
          ]
        },
      ],


      input: '',
      input3: '',
      value3: '',
      isoften: 0,//组织架构、常用分组
      onlycontact: false,
      tableData: [{
        id: 1,
        mechanism: 'xxxxxx局',
        name: '钱坤',
        sex: '男',
        post: '',
        tele: '13800000009',
        phone: '13800000009',
        administration: '',
        grouping: '群组1',
        charge: 1,
        state: 1,
      }, {
        id: 2,
        mechanism: 'xxxxxx局',
        name: '杨慧',
        sex: '女',
        post: '',
        tele: '13800000009',
        phone: '13800000009',
        administration: '',
        grouping: '群组1',
        charge: 0,
        state: 1,
      }, {
        id: 3,
        mechanism: 'xxxxxx局',
        name: '张三',
        sex: '男',
        post: '',
        tele: '13800000009',
        phone: '13800000009',
        administration: '',
        grouping: '群组1',
        charge: 0,
        state: 0,
      }, {
        id: 4,
        mechanism: 'xxxxxx局',
        name: '李四',
        sex: '女',
        post: '',
        tele: '13800000009',
        phone: '13800000009',
        administration: '',
        grouping: '群组1',
        charge: 0,
        state: 0,
      }],

    }
  },
  // created () {
  // },
  mounted () {
    this.navlist = this.groupinglist
  },
  methods: {
    // 选择分类
    selectclassify (index) {
      this.isoften = index
      if (index == 0) {
        this.navlist = this.groupinglist
        // this.$router.push('/contact')
      } else if (index == 1) {
        this.navlist = this.oftenlist
        // this.$router.push('/oftenGrouping')
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },


    //复选框
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    //修改
    update () {

    },
    onandoff (index) {
      console.log(index)
      if (this.tableData[index].state == 0) {
        this.tableData[index].state = 1
      } else {
        this.tableData[index].state = 0
      }
    },
    // 详情
    Details (row) {
      console.log(row, 'details')
      this.isselup = row.index
      this.drawer = true
    },
    NoDetails () {
      this.drawer = false
    },

  }
}
</script>

<style scoped>
.el-container {
  background-color: #eeeeee;
}
/* 右导航 */
.nav_search {
  padding: 20px;
}
.nav_classify {
  font-size: 16px;
  display: flex;
  justify-content: space-around;
}

.nav_classify span {
  cursor: pointer;
  padding-bottom: 10px;
}
.nav_Select {
  font-weight: bold;
  color: #3f9dfa;
  border-bottom: 4px solid #3f9dfa;
}
/* 左侧导航 */
.el-aside {
  background-color: white;
  font-size: 24px;
}

.title_colour {
  color: #409eff;
}

.asid_nav {
  padding-left: 20px;
}

.el-col {
  min-height: 800px;
}

/* 内容 */
.el-main {
  /* margin-top: 30px;
  margin-right: 30px; */
  margin-left: 20px;
  background-color: white;
}

.right {
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 10px;
}
.right img {
  margin-left: 10px;
}

/* 标题 */
.contact_title {
  margin: 0 20px;
  margin-bottom: 10px;
  border: 1px solid #eeeeee;
  padding: 30px;
  position: relative;
}
.contact_title_left {
  width: 90%;
}
.contact_title_right {
  position: absolute;
  top: 15px;
  right: 20px;
  color: #6fb5fa;
}
.updatasize {
  margin-left: 5px;
  font-size: 16px;
}
.contact_title_name {
  margin-bottom: 20px;
}

.contact_title_name span:nth-child(1) {
  font-size: 18px;
  font-weight: bold;
}
.contact_title_name span:nth-child(2) {
  margin-left: 20px;
  color: #bababa;
}
.contact_title_basic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}
.contact_title_describe span:nth-child(2) {
  margin-left: 20px;
  color: #bababa;
}

/* 检索条件 */
.contact {
  background-color: white;
  margin-bottom: 30px;
  padding: 30px;
}

.contact_name {
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
.condition {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.data_search {
  width: 300px;
  margin-right: 30px;
}
.data_search .el-button {
  color: #fff;
}

.data_Import {
  width: 400px;
  display: flex;
  justify-content: space-around;
}

.data_Import div {
  padding: 0 10px;
  border-radius: 3px;
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
.sign1 {
  background: #ffb06b;
  color: #fff;
  padding: 3px;
  border-radius: 5px;
  margin-left: 5px;
}
.sign2 {
  background: #6bb5ff;
  color: #fff;
  padding: 3px;
  border-radius: 5px;
  margin-left: 5px;
}

.button {
  cursor: pointer;
  font-size: 16px;
  color: #6cb1fb;
}
.button:nth-child(2) {
  margin-left: 20px;
}
</style>
