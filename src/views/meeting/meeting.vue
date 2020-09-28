<template>
  <div class="centent">
    <div class="searchcondition">
      <div class="centent_name">会议管理</div>
      <div class="centent_condition">
        <div class="centent_condition_name">
          <span>会议名称</span>
          <el-input v-model="input"></el-input>
        </div>
        <div class="centent_condition_name">
          <span>会议阶段</span>
          <!-- <el-input v-model="input"></el-input> -->
          <el-select placeholder="请选择" v-model="meetingstage">
            <el-option
              :key="item.value"
              :label="item.label"
              :value="item.value"
              v-for="item in meetingstagelist"
            ></el-option>
          </el-select>
        </div>
        <!-- <div class="centent_condition_name">
          <span>会议类型：</span>
          <el-input v-model="input"></el-input>
        </div>
        <div class="centent_condition_name">
          <span>会议地点：</span>
          <el-input v-model="input"></el-input>
        </div>
        <div class="centent_condition_name">
          <span>开始时间</span>
          <el-date-picker default-time="12:00:00" type="datetime" v-model="value3"></el-date-picker>
        </div>
        <div class="centent_condition_name">
          <span>结束时间</span>
          <el-date-picker default-time="12:00:00" type="datetime" v-model="value3"></el-date-picker>
        </div>-->
        <div class="centent_condition_name">
          <span>会议时间</span>
          <el-date-picker
            end-placeholder="结束日期"
            range-separator="至"
            start-placeholder="开始日期"
            type="datetimerange"
            v-model="meetingtime"
          ></el-date-picker>
        </div>
      </div>
    </div>
    <!-- <div class="separate"></div> -->
    <div class="tabledata">
      <div class="data">
        <div class="data_search">
          <!-- <el-input class="input-with-select" placeholder="请输入内容" v-model="input3">
            <el-button icon="el-icon-search" slot="append"></el-button>
          </el-input>-->
        </div>
        <div class="data_Import">
          <div @click="Import" class="export">导出会议</div>
          <div @click="addmeeting" class="add">新增会议</div>
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
          <el-table-column label="序号" show-overflow-tooltip width="120">
            <template slot-scope="scope">{{ scope.row.index }}</template>
          </el-table-column>
          <el-table-column
            label="会议名称"
            prop="name"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            label="会议类型"
            prop="type"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            label="会议时间"
            prop="data"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            label="会议地点"
            prop="address"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope>
              <span></span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 导出 -->
    <div class="popup" v-show="isimport">
      <div @click="NoImport" class="shadow"></div>
      <div class="showToast">
        <div class="toast-title">导出会议</div>
        <div class="toast-content">
          <span class="toast-content_name">导出内容</span>
          <div class="toast-content_choice">
            <el-checkbox
              :indeterminate="isIndeterminate"
              @change="handleCheckAllChange"
              v-model="checkAll"
              >基本信息</el-checkbox
            >
            <!-- <div style="margin: 15px 0;"></div> -->
            <el-checkbox-group
              @change="handleCheckedCitiesChange"
              v-model="checkedCities"
            >
              <el-checkbox :key="city" :label="city" v-for="city in cities">{{
                city
              }}</el-checkbox>
            </el-checkbox-group>
            <el-checkbox v-model="checked">参会人员</el-checkbox>
          </div>
        </div>
        <div class="button">
          <div @click="NoImport" class="bth bth1">取消</div>
          <div class="bth bth2">导出</div>
        </div>
      </div>
    </div>
    <!-- 复制 -->
    <!-- <transition name="el-fade-in-linear"> -->
    <div class="popup" v-show="iscopy">
      <div @click="NoCopy" class="shadow"></div>
      <div class="showCopy">
        <div class="toast-title">复制会议</div>
        <div class="copy-content">
          <div class="copy_name">
            <span>会议名称</span>
            <el-input placeholder="请输入会议名称" v-model="input"></el-input>
          </div>
          <div class="copy_name">
            <span>会议时间</span>
            <el-date-picker
              end-placeholder="结束日期"
              range-separator="至"
              start-placeholder="开始日期"
              type="datetimerange"
              v-model="value1"
            ></el-date-picker>
          </div>
          <div class="copy_choice">
            <span class="copy_choice_name">复制内容</span>
            <div class="toast-content_choice">
              <el-checkbox
                :indeterminate="isIndetercopys"
                @change="copysAllChange"
                v-model="copycheckAll"
                >基本信息</el-checkbox
              >
              <el-checkbox-group @change="copysChange" v-model="checkedcopys">
                <el-checkbox :key="copy" :label="copy" v-for="copy in copys">{{
                  copy
                }}</el-checkbox>
              </el-checkbox-group>
              <el-checkbox @change="flexsallchecked" v-model="checked2"
                >会议文件</el-checkbox
              >
              <div class="copy_file">
                <div :key="index" v-for="(item, index) in flexs">
                  <el-checkbox v-model="item.checked">{{
                    item.name
                  }}</el-checkbox>
                </div>
              </div>
              <el-checkbox v-model="checked3">参会人员</el-checkbox>
            </div>
          </div>
        </div>
        <div class="button">
          <div @click="NoCopy" class="bth bth1">取消</div>
          <div class="bth bth2">复制</div>
        </div>
      </div>
    </div>
    <!-- </transition> -->
    <!-- 抽屉 -->
    <el-drawer
      :show-close="false"
      :visible.sync="drawer"
      :with-header="false"
      size="80%"
      title="我是标题"
    >
      <div class="drawer_content">
        <div class="drawer_tite">
          <span v-if="isselup == 1">修改会议</span>
          <span v-if="isselup == 2">新增会议</span>
          <div class="drawer_button">
            <div @click="NoDetails" class="bth bth1">取消</div>
            <div class="bth bth2">确认</div>
          </div>
        </div>
        <div class="drawer_naviga">
          <el-tabs @tab-click="handleClick" v-model="activeName">
            <el-tab-pane label="基本信息" name="first">
              <div class="basic_data" v-if="isselup == 1">
                <div class="basic_data_select">
                  <div>会议名称</div>
                  <div>关于xxx的通知</div>
                </div>
                <div class="basic_data_select">
                  <div>会议地点</div>
                  <div>浙江省杭州市上城区xx路</div>
                </div>
                <div class="basic_data_select">
                  <div>会议类型</div>
                  <div>xx大型会议</div>
                </div>
                <div class="basic_data_select">
                  <div>会议时间</div>
                  <div>2019-10-10 10：30 至 2019-10-10 1130</div>
                </div>
                <div class="basic_data_select">
                  <div>会议阶段</div>
                  <div>会议准备</div>
                </div>
                <div class="basic_data_select">
                  <div>主持人</div>
                  <div>汪远</div>
                </div>
                <div class="basic_data_select">
                  <div>会议内容</div>
                  <div>
                    关于xxxx通知
                    <br />xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                  </div>
                </div>
              </div>
              <div class="basic_data" v-if="isselup == '2'">
                <el-form :model="form" label-width="80px" ref="form">
                  <el-form-item label="会议名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="会议地点">
                    <el-select
                      disabled
                      placeholder="请选择省"
                      style="margin-right: 45px;"
                      v-model="form.province"
                    >
                      <el-option
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        v-for="item in provinceoptions"
                      ></el-option>
                    </el-select>
                    <el-select
                      placeholder="请选择市"
                      style="margin-right: 45px;"
                      v-model="form.city"
                    >
                      <el-option
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        v-for="item in cityoptions"
                      ></el-option>
                    </el-select>
                    <el-select placeholder="请选择区" v-model="form.area">
                      <el-option
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        v-for="item in areaoptions"
                      ></el-option>
                    </el-select>
                    <el-input
                      :rows="1"
                      placeholder="请输入详细地址"
                      style="resize:none; height: 40px; margin-top: 10px;"
                      type="textarea"
                      v-model="form.textarea"
                    ></el-input>
                    <!-- <textarea
                      style="resize:none;width: 685px; margin-top: 10px;border: 1px solid #E5E5E5;padding: 10px 15px;"
                    ></textarea>-->
                  </el-form-item>
                  <el-form-item label="会议类型">
                    <el-select
                      placeholder="请选择会议类型"
                      style="width: 720px;"
                      v-model="form.type"
                    >
                      <el-option
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        v-for="item in typeoptions"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="会议时间">
                    <el-date-picker
                      end-placeholder="结束日期"
                      range-separator="至"
                      start-placeholder="开始日期"
                      type="datetimerange"
                      v-model="form.date"
                    ></el-date-picker>
                  </el-form-item>
                  <el-form-item label="会议阶段">
                    <el-select
                      placeholder="请选择会议阶段"
                      style="width: 720px;"
                      v-model="form.stage"
                    >
                      <el-option
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        v-for="item in stageoptions"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="主持人">
                    <el-input v-model="form.hostname"></el-input>
                  </el-form-item>
                  <el-form-item label="会议内容">
                    <el-input
                      :rows="4"
                      style="min-height='100px;"
                      type="textarea"
                      v-model="form.content"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="文件柜" name="second">
              <div class="file_cabinet">
                <div class="filealloperation">
                  <div class="operation">
                    <span>上传</span>
                  </div>
                  <div class="operation">
                    <span>在线添加</span>
                  </div>
                  <div class="operation">
                    <span>删除</span>
                  </div>
                </div>
                <el-table
                  :data="fileData"
                  @selection-change="handleSelectionChange2"
                  ref="multipleTable"
                  style="width: 100%"
                  tooltip-effect="dark"
                >
                  <el-table-column
                    type="selection"
                    width="55"
                  ></el-table-column>
                  <el-table-column width="600px">
                    <img alt src />
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
                        <div class="filename">
                          <div>
                            {{ scope.row.filename }}{{ scope.row.filetype }}
                          </div>
                          <div class="filebasic">
                            <span>{{ scope.row.name }}</span>
                            <span>{{ scope.row.data }}</span>
                          </div>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="size"
                    show-overflow-tooltip
                  ></el-table-column>
                  <el-table-column show-overflow-tooltip>
                    <div class="filebutton">
                      <span class="preview">预览</span>
                      <span class="delete">删除</span>
                      <span class="download">下载</span>
                    </div>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="参会人员" name="third">
              <div class="employees">
                <div class="employees_tite">
                  参会人员总数{{}}
                  <div class="Importnew">
                    <div class="Import">
                      <span>导入</span>
                    </div>
                    <div @click="Addemployees" class="new">
                      <span>新增</span>
                    </div>
                  </div>
                </div>
                <div class="employees_table">
                  <el-table
                    :data="employeesData"
                    @selection-change="handleSelectionChange3"
                    ref="multipleTable"
                    style="width: 100%"
                    tooltip-effect="dark"
                  >
                    <el-table-column
                      type="selection"
                      width="55"
                    ></el-table-column>
                    <el-table-column
                      label="单位"
                      prop="company"
                      show-overflow-tooltip
                    ></el-table-column>
                    <el-table-column
                      label="姓名"
                      prop="name"
                      show-overflow-tooltip
                    ></el-table-column>
                    <el-table-column
                      label="职务/岗位"
                      prop="position"
                      show-overflow-tooltip
                    ></el-table-column>
                    <el-table-column
                      label="手机"
                      prop="phone"
                      show-overflow-tooltip
                    ></el-table-column>
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!-- 新增人员 -->
      <div class="popup" v-show="isaddemployees">
        <div @click="NoAddemployees" class="shadow"></div>
        <div class="showemployees">
          <div class="toast-title">新增人员</div>
          <div class="employees-content">
            <div class="mployees_add">
              <div class="mployees_add_type">
                <span>机构</span>
                <span>投递组</span>
                <span>常用联系人</span>
                <span>全部人员</span>
              </div>
              <div class="mployees_add_content">
                <el-tree
                  :data="addemployees"
                  :props="defaultProps"
                  @check="handleNodeClick"
                  keys="resourceCheckedKey"
                  node-key="id"
                  show-checkbox
                ></el-tree>
                <!-- <el-tree :load="loadNode" :props="props" lazy show-checkbox></el-tree> -->
              </div>
            </div>
            <div class="employees_add_data">
              <div>已选人员</div>
              <div class="empoyees_search">
                <el-input
                  class="input-with-select"
                  placeholder="请输入内容"
                  v-model="input3"
                >
                  <el-button icon="el-icon-search" slot="append"></el-button>
                </el-input>
              </div>
              <div class="empoyees_choice_data">
                <div :key="index" v-for="(item, index) in choiceempoyees">
                  <div class="empoyees_choice_item">
                    <span>{{ item.label }}</span>
                    <span>x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button">
            <div @click="NoAddemployees" class="bth bth1">取消</div>
            <div class="bth bth2">导出</div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
const cityOptions = [
  "会议名称",
  "会议阶段",
  "会议类型",
  "会议时间",
  "会议地点",
  "主持人",
  "会议内容"
];
const cityOptions1 = ["会议地点", "会议类型", "会议阶段", "会议内容", "主持人"];
export default {
  // name: 'content',
  data() {
    return {
      input: "",
      input3: "",
      value3: "",
      // 会议阶段
      meetingstage: "",
      meetingstagelist: [
        {
          value: "选项1",
          label: "双皮奶"
        },
        {
          value: "选项2",
          label: "蚵仔煎"
        },
        {
          value: "选项3",
          label: "龙须面"
        }
      ],
      meetingtime: [], //会议时间
      tableData: [
        {
          index: "1",
          name: "xxxxxx会议",
          type: "xxx",
          data: "10月10日 10:30 - 10月10日 11:30",
          address: "第一会议室"
        },
        {
          index: "2",
          name: "xx会议",
          type: "xxx",
          data: "10月10日 10:30 - 10月10日 11:30",
          address: "第一会议室"
        }
      ],
      //导出
      isimport: false,
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false,
      checked: false,
      //复制
      iscopy: false,
      copycheckAll: false,
      checkedcopys: [],
      copys: cityOptions1,
      isIndetercopys: false,
      checked2: false,
      flexs: [
        {
          name: "关于xxxx软件操作手册.doc",
          checked: false
        },
        {
          name: "关于xxxx软件培训说明.ppt",
          checked: false
        },
        {
          name: "关于xxxx软件培训说明.pfd",
          checked: false
        }
      ],
      checked3: false,
      value1: [],
      // 抽屉
      drawer: false,
      activeName: "first",
      // 基本信息
      isselup: 2,
      provinceoptions: [
        {
          name: "浙江省"
        }
      ],
      cityoptions: [],
      areaoptions: [],
      typeoptions: [
        {
          value: "1",
          label: "xx大型会议"
        },
        {
          value: "2",
          label: "xx中型会议",
          disabled: true
        },
        {
          value: "3",
          label: "xx小型会议"
        }
      ],
      stageoptions: [
        {
          value: "1",
          label: "会议准备"
        },
        {
          value: "2",
          label: "会议开始",
          disabled: true
        },
        {
          value: "3",
          label: "会议结束"
        }
      ],
      form: {
        name: "",
        province: "浙江",
        city: "",
        area: "",
        address: "",
        type: "",
        date: [],
        stage: "",
        hostname: "",
        content: ""
      },
      //文件柜
      fileData: [
        {
          filename: "关于xxx软件操作手册",
          filetype: "doc",
          name: "杜万",
          data: "2020-10-12 15:02",
          size: "2.4MB"
        },
        {
          filename: "关于xxx软件培训说明",
          filetype: "pdf",
          name: "杜万",
          data: "2020-10-12 15:02",
          size: "2.6MB  "
        }
      ],
      //参会人员
      employeesData: [
        {
          company: "xx单位",
          name: "王刚",
          position: "文员",
          phone: "153xxxx2132"
        },
        {
          company: "xx单位",
          name: "杜万",
          position: "文员",
          phone: "138xxxx1234"
        },
        {
          company: "xx单位",
          name: "贺天",
          position: "文员",
          phone: "187xxxx2371"
        }
      ],
      //新增人员
      // props: {
      //   label: 'name',
      //   children: 'zones',
      //   isLeaf: 'leaf'
      // },
      defaultProps: {
        children: "children",
        label: "label"
      },
      isaddemployees: false,
      addemployees: [
        {
          id: 1,
          label: "xxx机构",
          children: [
            {
              id: 4,
              label: "王博（xx处-xx工作）"
              // children: [{
              //   id: 9,
              //   label: '三级 1-1-1'
              // }, {
              //   id: 10,
              //   label: '三级 1-1-2'
              // }]
            },
            {
              id: 5,
              label: "杜万（xx处-xx工作）"
            }
          ]
        },
        {
          id: 2,
          label: "xxx机构",
          children: [
            {
              id: 6,
              label: "王博（xx处-xx工作）"
            },
            {
              id: 7,
              label: "杜万（xx处-xx工作）"
            }
          ]
        },
        {
          id: 3,
          label: "xxx机构",
          children: [
            {
              id: 8,
              label: "王博（xx处-xx工作）"
            },
            {
              id: 9,
              label: "杜万（xx处-xx工作）"
            }
          ]
        }
      ],
      //已选人员
      choiceempoyees: [
        {
          id: 30,
          label: "王五（xx处-xx工作）"
        },
        {
          id: 31,
          label: "赵六（xx处-xx工作）"
        },
        {
          id: 32,
          label: "王五（xx处-xx工作）"
        },
        {
          id: 33,
          label: "赵六（xx处-xx工作）"
        }
      ]
    };
  },
  // created () {
  // },
  mounted: function() {},
  methods: {
    handleNodeClick(data) {
      console.log(data);
      if (data.children) {
        var children = data.children;
        children.forEach(element => {
          this.choiceempoyees.push(element);
        });
      } else {
        let arr = {};
        arr.label = data.label;
        arr.id = data.id;
        this.choiceempoyees.push(arr);
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSelectionChange2(val) {
      this.multipleSelection = val;
    },
    handleSelectionChange3(val) {
      this.multipleSelection = val;
    },
    // 导出
    Import() {
      this.isimport = true;
    },
    NoImport() {
      this.isimport = false;
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    //复制
    Copy() {
      this.iscopy = true;
    },
    NoCopy() {
      this.iscopy = false;
    },
    copysAllChange(val) {
      this.checkedcopys = val ? cityOptions1 : [];
      this.isIndetercopys = false;
    },
    copysChange(value) {
      let checkedCount = value.length;
      this.copycheckAll = checkedCount === this.copys.length;
      this.isIndetercopys =
        checkedCount > 0 && checkedCount < this.copys.length;
    },
    Addemployees() {
      this.isaddemployees = true;
    },
    NoAddemployees() {
      this.isaddemployees = false;
    },
    //文件选择
    flexsallchecked() {
      var flexs = this.flexs;
      if (this.checked2) {
        for (let i = 0; i <= flexs.length; i++) {
          flexs[i].checked = true;
        }
      } else {
        for (let i = 0; i <= flexs.length; i++) {
          flexs[i].checked = false;
        }
      }
      this.checked2 = !this.checked2;
      this.flexs = flexs;
    },
    //新增
    addmeeting() {
      this.isselup = 2;
      this.drawer = true;
    },
    // 详情
    Details(row) {
      console.log(row, "details");
      this.isselup = 1;
      this.drawer = true;
    },
    NoDetails() {
      this.drawer = false;
    },
    // 抽屉
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //基本信息
    onSubmit() {
      console.log("submit!");
    },
    //人员新增
    onemployee(val) {
      console.log(val, "val");
      // var addemployees = this.addemployees
      // if (addemployees[val].checked) {
      //   for (let i = 0; i <= addemployees[val].data.length; i++) {
      //     console.log(1)
      //   }
      // } else {
      //   for (let i = 0; i <= addemployees[val].data.length; i++) {
      //     console.log(2)
      //   }
      // }
      // if (this.addemployees[val].checked) {
      //   this.addemployees[val].checked = false
      // } else {
      //   this.addemployees[val].checked = true
      // }

      // this.addemployees = addemployees
      // this.checkedcopys = val ? cityOptions1 : [];
      // this.isIndetercopys = false;
    },
    offemployee(value) {
      let checkedCount = value.length;
      this.addemployees[value].checked =
        checkedCount === this.addemployees[value].data.length;
      // var addemployees = this.addemployees
      // this.addemployees[index].checked = true
      // addemployees[index].data.forEach(element => {
      //   element.checked = true
      // })
      // this.addemployees = addemployees

      this.isIndetercopys =
        checkedCount > 0 && checkedCount < this.copys.length;
    }
  }
};
</script>

<style scoped>
/* 内容 */
/* .centent {
  margin: 20px;
} */

/* 检索条件 */
.searchcondition {
  background-color: white;
  padding: 30px;
}

.centent_name {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}

.centent_condition {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.centent_condition_name {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.centent_condition_name span {
  width: 100px;
}
/* 分隔线 */
.separate {
  height: 30px;
  background: #eeeeee;
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
  height: 40px;
  display: flex;
  justify-content: space-around;
}

.data_Import div {
  width: 94px;
  font-size: 16px;
  background-color: #3196fa;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.data_Import .export {
  margin-right: 20px;
}

/* 表格 */
.table {
  margin-top: 30px;
}

.el-table th {
  background-color: #eeeeee;
}

/* 弹出框 */
.popup {
  width: 100%;
  height: 100%;
  opacity: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
}

.shadow {
  opacity: 0.2;
  background-color: black;
  position: absolute;
  width: 100%;
  min-height: 100vh;
}

/* 导出 */
.showToast {
  position: absolute;
  top: 38%;
  left: 50%;
  opacity: 1;
  width: 750px;
  background-color: #fff;
  transform: translateX(-50%);
  min-height: 250px;
}

.toast-title {
  padding: 10px 20px;
  font-size: 20px;
  margin-bottom: 10px;
  /* color: #A3A3A3; */
  border-bottom: 1px solid #f0f0f0;
}

.toast-content {
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #f0f0f0;
}

.toast-content_name {
  width: 160px;
}

.toast-content_choice {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.el-checkbox {
  padding: 5px 0;
}

.el-checkbox-group {
  margin-left: 20px;
}
/* 复制 */
.showCopy {
  position: absolute;
  top: 25%;
  left: 50%;
  opacity: 1;
  width: 750px;
  background-color: #fff;
  transform: translateX(-50%);
  min-height: 450px;
}
.copy-content {
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #f0f0f0;
}
.copy_choice {
  padding: 10px 20px;
  display: flex;
}
.copy_name {
  padding: 10px 20px;
  display: flex;
}
.copy_name span {
  width: 120px;
}
.copy_choice_name {
  width: 120px;
}
.copy_file {
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  height: 80px;
  overflow: auto;
}
/* 新增人员 */
.showemployees {
  z-index: 999;
  position: absolute;
  top: 20%;
  left: 50%;
  opacity: 1;
  width: 750px;
  background-color: #fff;
  transform: translateX(-50%);
  height: 520px;
}
.employees-content {
  display: flex;
  border-bottom: 1px solid #f0f0f0;
}
.mployees_add {
  width: 42%;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}
.mployees_add_type {
  display: flex;
  justify-content: space-around;
}
.mployees_add_content {
  padding: 15px;
  height: 360px;
  overflow: auto;
}
.content_father {
  position: relative;
}
.is_off {
  position: absolute;
  top: 15px;
  right: 15px;
}
.content_son {
  margin-left: 20px;
}
.employees_add_data {
  width: 56%;
  padding: 10px;
}
.empoyees_search {
  padding: 8px;
}
.empoyees_choice_data {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.empoyees_choice_item {
  border-right: 3px;
  margin: 5px;
  padding: 5px;
  width: 180px;
  background: #eaf4fe;
  display: flex;
  justify-content: space-between;
}
/* 按钮 */
.button {
  width: 200px;
  display: flex;
  justify-content: space-around;
  margin: 15px auto;
}

.bth {
  width: 60px;
  text-align: center;
  padding: 2px 0;
  border-radius: 3px;
}

.bth1 {
  border: 1px solid #3196fa;
  color: #3196fa;
}

.bth2 {
  background-color: #3196fa;
  color: white;
}

/* 抽屉 */
/* .drawer_content {
} */
.drawer_tite {
  padding: 20px 30px;
  position: relative;
  border: 1px solid #e4e7ed;
}
.drawer_tite span {
  font-size: 20px;
}
.drawer_button {
  font-size: 16px;
  width: 160px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 30px;
  right: 30px;
}
.file_cabinet {
  position: relative;
}
.filealloperation {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 49px;
  position: absolute;
  top: 0;
  background: #fff;
  z-index: 999;
  text-align: right;
}
.operation {
  margin-left: 30px;
  font-size: 14px;
}
.el-tabs__nav-scroll {
  padding: 10px 30px 0;
}
.basic_data {
  width: 800px;
}

/* 基本信息 */
.basic_data_select {
  display: flex;
  padding: 10px 0;
}
.basic_data_select div:nth-child(1) {
  /* display: inline-block; */
  color: #d5d5d5;
  width: 100px;
}
/* 查看 */
.basic_data_select {
  display: flex;
  padding: 10px 0;
}
.basic_data_select div:nth-child(1) {
  /* display: inline-block; */
  color: #d5d5d5;
  width: 80px;
}
/* 修改 */
/* .basic_data_update {
  display: flex;
  padding: 10px 0;
}
.basic_data_update div:nth-child(1) {
  width: 100px;
} */

/* 文件柜 */
.filenameimg {
  display: flex;
}
.filename {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.filebasic {
  color: #949494;
}
.filebasic span {
  margin-right: 10px;
}
.filebutton {
  text-align: right;
}
.filebutton span {
  margin-left: 20px;
  color: #4a9ffb;
}
.preview {
  color: #4a9ffb;
}
/* .delete {
}
.download {
} */

/* 参会人员 */
.employees_tite {
  padding: 10px;
  position: relative;
}
.Importnew {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  font-size: 14px;
}
.Import {
  margin-right: 30px;
}
</style>
