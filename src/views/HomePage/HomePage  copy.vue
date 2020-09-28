<template>
  <div class="HomePage">
    <div class="HomePage_data">
      <div class="Work_statistics">
        <div class="Work_statistics_title">
          <span class="title">工作统计</span>
          <div>月度</div>
        </div>
        <div class="Work_statistics_data">
          <!-- <div :key="index" class="Work_statistics_ondata" v-for="(item,index) in statisticslist1">
            <div class="Work_statistics_ondata">
              <div :class="'gradient'+(index+1)" class="gradient">
                <img src="../../assets/images/4_1.png" v-if="index==0" />
                <img src="../../assets/images/4_2.png" v-if="index==1" />
                <img src="../../assets/images/4_3.png" v-if="index==2" />
                <img src="../../assets/images/4_4.png" v-if="index==3" />
                <img src="../../assets/images/4_5.png" v-if="index==4" />
                <img src="../../assets/images/4_6.png" v-if="index==5" />
                <img src="../../assets/images/4_7.png" v-if="index==6" />
              </div>
              <div class="statistics_word">
                <span>{{item.text}}</span>
                <span class="'wordcolor'+(index+1)">{{item.code}}</span>
              </div>
            </div>
          </div>-->
          <div class="Work_statistics_ondata">
            <div class="gradient gradient1">
              <img src="../../assets/images/4_1.png" />
            </div>
            <div class="statistics_word">
              <span>{{ statisticslist.schedulename }}</span>
              <span class="wordcolor1">{{ statisticslist.schedulecode }}</span>
            </div>
          </div>
          <div class="Work_statistics_ondata">
            <div class="gradient gradient2">
              <img src="../../assets/images/4_2.png" />
            </div>
            <div class="statistics_word">
              <span>{{ statisticslist.meetingname }}</span>
              <span class="wordcolor2">{{ statisticslist.meetingcode }}</span>
            </div>
          </div>
          <div class="Work_statistics_ondata">
            <div class="gradient gradient3">
              <img src="../../assets/images/4_3.png" />
            </div>
            <div class="statistics_word">
              <span>{{ statisticslist.activityname }}</span>
              <span class="wordcolor3">{{ statisticslist.activitycode }}</span>
            </div>
          </div>
          <div class="Work_statistics_ondata">
            <div class="gradient gradient4">
              <img src="../../assets/images/4_4.png" />
            </div>
            <div class="statistics_word">
              <span>{{ statisticslist.arrangename }}</span>
              <span class="wordcolor4">{{ statisticslist.arrangecode }}</span>
            </div>
          </div>
          <div class="Work_statistics_ondata">
            <div class="gradient gradient5">
              <img src="../../assets/images/4_5.png" />
            </div>
            <div class="statistics_word">
              <span>{{ statisticslist.Approvalname }}</span>
              <span class="wordcolor5">{{ statisticslist.Approvalcode }}</span>
            </div>
          </div>
          <div class="Work_statistics_ondata">
            <div class="gradient gradient6">
              <img src="../../assets/images/4_6.png" />
            </div>
            <div class="statistics_word">
              <span>{{ statisticslist.Quasiname }}</span>
              <span class="wordcolor6">{{ statisticslist.Quasicode }}</span>
            </div>
          </div>
          <div class="Work_statistics_ondata">
            <div class="gradient gradient7">
              <img src="../../assets/images/4_7.png" />
            </div>
            <div class="statistics_word">
              <span>{{ statisticslist.secretaryname }}</span>
              <span class="wordcolor7">{{ statisticslist.secretarycode }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lately_operation">
      <div class="edit">
        <div class="edit_title">
          <span class="title">最近编辑文件</span>
        </div>
        <div class="edit_data">
          <div :key="index" v-for="(item, index) in editlist">
            <div class="edit_ondata">
              <div>
                <div class="ondata_title">{{ item.filename }}</div>
                <div class="edit_ondata_other">
                  <img
                    src="../../assets/images/3_1.png"
                    v-if="item.filestate == 0"
                  />
                  <img
                    src="../../assets/images/3_2.png"
                    v-if="item.filestate == 1"
                  />
                  <img
                    src="../../assets/images/3_3.png"
                    v-if="item.filestate == 2"
                  />
                  <img
                    src="../../assets/images/3_4.png"
                    v-if="item.filestate == 3"
                  />
                  <img
                    src="../../assets/images/3_5.png"
                    v-if="item.filestate == 4"
                  />
                  <img
                    src="../../assets/images/3_6.png"
                    v-if="item.filestate == 5"
                  />
                  <img
                    src="../../assets/images/3_7.png"
                    v-if="item.filestate == 6"
                  />
                  <span>{{ item.filetype }}</span>
                  <span>
                    会议名称：
                    <span>{{ item.meetingname }}</span>
                  </span>
                </div>
              </div>
              <div class="updata_time">
                <span>更新时间：</span>
                <span>{{ item.date }}</span>
              </div>
            </div>
          </div>
          <!-- <div class="more">
            <i class="el-icon-more"></i>
            <span>查看更多</span>
          </div>-->
        </div>
      </div>
      <div class="Matters">
        <div class="Matters_title">
          <span class="title">近日事宜</span>
          <span>
            <el-select
              style="background:none !important; outline:none !important; border:1px solid #ffffff !important; width: 90px;"
              v-model="datavalue"
            >
              <el-option
                :key="item.value"
                :label="item.label"
                :value="item.value"
                v-for="item in datalist"
              ></el-option>
            </el-select>
          </span>
        </div>
        <div class="Matters_data">
          <div :key="index" v-for="(item, index) in matterslist">
            <div class="Matters_ondata">
              <div class="ondata_title">{{ item.name }}</div>
              <div class="edit_ondata_other">
                <img src="../../assets/images/3_1.png" v-if="item.state == 0" />
                <img src="../../assets/images/3_2.png" v-if="item.state == 1" />
                <img src="../../assets/images/3_3.png" v-if="item.state == 2" />
                <img src="../../assets/images/3_4.png" v-if="item.state == 3" />
                <img src="../../assets/images/3_5.png" v-if="item.state == 4" />
                <img src="../../assets/images/3_6.png" v-if="item.state == 5" />
                <img src="../../assets/images/3_7.png" v-if="item.state == 6" />
                <span>{{ item.type }}</span>
                <span>
                  会议阶段：
                  <span>{{ item.stage }}</span>
                </span>
                <span>
                  会议时间：
                  <span>{{ item.date }}</span>
                </span>
              </div>
            </div>
          </div>
          <!-- <div class="more">
            <i class="el-icon-more"></i>
            <span>查看更多</span>
          </div>-->
        </div>
      </div>
      <div class="create">
        <div class="create_title">
          <span class="title">快速创建</span>
        </div>
        <div class="create_data">
          <!-- <div v-for="(item,index) in createlist" :key="index">
          </div>-->
          <div @click="creatework" class="create_ondata">
            <img src="../../assets/images/3_1.png" />
            <div>值班工作</div>
          </div>
          <div class="create_ondata">
            <img src="../../assets/images/3_2.png" />
            <div>会议</div>
          </div>
          <div class="create_ondata">
            <img src="../../assets/images/3_3.png" />
            <div>活动</div>
          </div>
          <div class="create_ondata">
            <img src="../../assets/images/3_4.png" />
            <div>工作预安排</div>
          </div>
          <div class="create_ondata">
            <img src="../../assets/images/3_5.png" />
            <div>审批备案</div>
          </div>
          <div class="create_ondata">
            <img src="../../assets/images/3_6.png" />
            <div>拟办单</div>
          </div>
          <div class="create_ondata">
            <img src="../../assets/images/3_7.png" />
            <div>秘书处内部工作</div>
          </div>
        </div>
      </div>
    </div>
    <el-drawer
      :show-close="false"
      :visible.sync="drawer"
      :with-header="false"
      size="80%"
      title="我是标题"
    >
      <div class="drawer_content">
        <div class="drawer_tite">
          <span>新增会议</span>
          <div class="drawer_button">
            <div @click="NoCreater" class="bth bth1">取消</div>
            <div class="bth bth2">确认</div>
          </div>
        </div>
        <div class="basic_data">
          <el-form :model="form" label-width="80px" ref="form">
            <el-form-item label="会议名称">
              <el-input placeholder="请输入" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="主持人">
              <el-input v-model="form.hostname"></el-input>
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
              <!-- <el-input
                :rows="2"
                placeholder="请输入详细地址"
                style="resize:none; height: 60px; margin-top: 10px;"
                type="textarea"
                v-model="form.textarea"
              ></el-input>-->
              <div class="textarea">
                <textarea
                  style="resize:none;width: 685px; margin-top: 10px;border: 1px solid #E5E5E5;padding: 10px 15px; border-radius:5px;"
                  v-model="form.address"
                ></textarea>
                <div class="CommonAddress">
                  常用地址
                  <i class="el-icon-arrow-down"></i>
                  <el-select
                    style="position: absolute; top: 0; left:0; z-index: 999; opacity: 0;"
                    v-model="form.address"
                  >
                    <el-option
                      :key="index"
                      :label="item.value"
                      :value="item.label"
                      style="width: 500px;"
                      v-for="(item, index) in CommonAddresList"
                    >
                      <div class="CommonAddress_choice">
                        <div class="CommonAddress_choice_content">
                          <i class="el-icon-ice-cream-round"></i>
                          <span>{{ item.label }}</span>
                        </div>
                        <span
                          @click.stop="delCommonAddress(index)"
                          class="CommonAddress_del"
                          >删除</span
                        >
                      </div>
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="LastAddress">
                <span>上次使用地址：</span>
                <span>{{ LastAddress }}</span>
                <span @click="useAddress(LastAddress)">使用</span>
                <span class="LastAddress_right">保存为常用地址</span>
              </div>
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
            <el-form-item label="会议内容">
              <el-input
                :rows="4"
                style="min-height='100px;"
                type="textarea"
                v-model="form.content"
              ></el-input>
            </el-form-item>
            <el-form-item label="材料上传">
              <div class="uploadfile">
                <i class="el-icon-upload"></i>
                <span>开始上传</span>
              </div>
              <el-input
                @change="changeImage($event)"
                style="position: absolute; top: 0; width: 120px;z-index: 999; opacity: 0;"
                type="file"
              ></el-input>
              <div class="uploadfile_data">
                <div :key="index" v-for="(item, index) in uploadfile">
                  <div class="uploadfile_data_file">
                    <div class="uploadfile_data_file_name">
                      <span>{{ item.filename }}</span>
                    </div>
                    <div>{{ item.size }}</div>
                    <div @click="delfile" class="delfile(index)">删除</div>
                  </div>
                </div>
              </div>
            </el-form-item>
          </el-form>
          <div></div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      // statisticslist1: [
      //   {
      //     text: '值班工作',
      //     code: '24',
      //   }, {
      //     text: '会议',
      //     code: '42',
      //   }, {
      //     text: '活动',
      //     code: '43',
      //   }, {
      //     text: '工作预安排',
      //     code: '41',
      //   }, {
      //     text: '审批备案',
      //     code: '24',
      //   }, {
      //     text: '拟办单',
      //     code: '27',
      //   }, {
      //     text: '秘书处内部工作',
      //     code: '20',
      //   }
      // ],
      statisticslist: {
        schedulename: "值班工作",
        schedulecode: "24",
        meetingname: "会议",
        meetingcode: "42",
        activityname: "活动",
        activitycode: "43",
        arrangename: "工作预安排",
        arrangecode: "41",
        Approvalname: "审批备案",
        Approvalcode: "24",
        Quasiname: "拟办单",
        Quasicode: "27",
        secretaryname: "秘书处内部工作",
        secretarycode: "20"
      },
      editlist: [
        {
          id: "1",
          filename: "2020年老年人慰问活动-财政人员",
          filestate: "1",
          filetype: "值班工作",
          meetingname: "预案会议",
          date: "10-10 15:00"
        },
        {
          id: "2",
          filename: "2020年老年人慰问活动-财政人员",
          filestate: "1",
          filetype: "值班工作",
          meetingname: "预案会议",
          date: "10-10 15:00"
        },
        {
          id: "3",
          filename: "2020年老年人慰问活动-财政人员",
          filestate: "1",
          filetype: "值班工作",
          meetingname: "预案会议",
          date: "10-10 15:00"
        },
        {
          id: "4",
          filename: "2020年老年人慰问活动-财政人员",
          filestate: "1",
          filetype: "值班工作",
          meetingname: "预案会议",
          date: "10-10 15:00"
        },
        {
          id: "5",
          filename: "2020年老年人慰问活动-财政人员",
          filestate: "1",
          filetype: "值班工作",
          meetingname: "预案会议",
          date: "10-10 15:00"
        }
      ],
      datavalue: "1",
      datalist: [
        {
          value: "1",
          label: "今天"
        },
        {
          value: "2",
          label: "近三天"
        },
        {
          value: "3",
          label: "近七天"
        }
      ],
      matterslist: [
        {
          id: "1",
          name:
            "6-13温岭槽罐车爆炸事故经济损失及人员伤亡会议损失及人员伤亡会议",
          state: "1",
          type: "会议",
          stage: "会议准备",
          date: "15:30 - 6:30"
        },
        {
          id: "2",
          name:
            "6-13温岭槽罐车爆炸事故经济损失及人员伤亡会议损失及人员伤亡会议",
          state: "1",
          type: "会议",
          stage: "会议准备",
          date: "15:30 - 6:30"
        },
        {
          id: "3",
          name:
            "6-13温岭槽罐车爆炸事故经济损失及人员伤亡会议损失及人员伤亡会议",
          state: "1",
          type: "会议",
          stage: "会议准备",
          date: "15:30 - 6:30"
        },
        {
          id: "4",
          name:
            "6-13温岭槽罐车爆炸事故经济损失及人员伤亡会议损失及人员伤亡会议",
          state: "1",
          type: "会议",
          stage: "会议准备",
          date: "15:30 - 6:30"
        }
      ],
      // 抽屉
      drawer: false,
      form: {
        name: "",
        province: "浙江省",
        city: "",
        area: "",
        address: "",
        type: "",
        date: [],
        stage: "",
        hostname: "",
        content: ""
      },
      //常用地址
      CommonAddresList: [
        {
          value: "1",
          label: "浙江省杭州市上城区xxxx公司"
        },
        {
          value: "2",
          label: "浙江省杭州市西湖区xxxx饭店"
        },
        {
          value: "3",
          label: "浙江省杭州市滨江区xxxx小区"
        }
      ],
      provinceoptions: [
        {
          name: "浙江省"
        }
      ],
      cityoptions: [
        {
          value: "1",
          label: "杭州市"
        },
        {
          value: "2",
          label: "绍兴市"
        },
        {
          value: "3",
          label: "温州市"
        },
        {
          value: "4",
          label: "台州市"
        }
      ],
      areaoptions: [
        {
          value: "1",
          label: "滨江区"
        },
        {
          value: "2",
          label: "余杭区"
        },
        {
          value: "3",
          label: "西湖区"
        },
        {
          value: "4",
          label: "下城区"
        }
      ],
      CommonAddress: [
        {
          value: "1",
          label: ""
        }
      ],
      LastAddress: "浙江省杭州市上城区xxx路",
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
      uploadfile: [
        {
          filename: "关于xxx软件操作手册",
          filetype: "doc",
          name: "杜万",
          data: "2020-10-12 15:02",
          size: "2.4MB",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          filename: "关于xxx软件培训说明",
          filetype: "pdf",
          name: "杜万",
          data: "2020-10-12 15:02",
          size: "2.6MB",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    NoCreater() {
      this.drawer = false;
    },
    creatework() {
      this.drawer = true;
    },
    // 搜索
    search() {
      this.$router.push("/search");
    },
    //删除常用地址
    delCommonAddress(index) {
      debugger;
      this.CommonAddresList.splice(index, 1);
    },
    //使用地址
    useAddress(user) {
      this.form.address = user;
    },
    //删除文件
    delfile(index) {
      this.uploadfile.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.HomePage {
  padding: 30px;
  width: 100%;
  background: #f7f7f7;
}
/* .HomePage_data {
} */
/* 工作统计 */
.HomePage_data {
  background: #fff;
  padding: 20px;
}
.Work_statistics_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
  padding-bottom: 20px;
}
.title {
  font-size: 18px;
  font-weight: bold;
}
.Work_statistics_data {
  margin-top: 20px;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Work_statistics_ondata {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 背景渐变色 */
.statistics_word {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.statistics_word span:nth-child(2) {
  font-size: 24px;
  font-weight: bold;
}
.wordcolor1 {
  color: #f49f86;
}
.wordcolor2 {
  color: #76b2fb;
}
.wordcolor3 {
  color: #fd7b48;
}
.wordcolor4 {
  color: #70c752;
}
.wordcolor5 {
  color: #ffb085;
}
.wordcolor6 {
  color: #beabf9;
}
.wordcolor7 {
  color: #2eaafb;
}

.gradient {
  padding: 10px;
  border-radius: 10px;
  margin-right: 10px;
}
.gradient1 {
  background-image: linear-gradient(#ff6f8c, #fca999);
}
.gradient2 {
  background-image: linear-gradient(#4692ea, #75c7ed);
}
.gradient3 {
  background-image: linear-gradient(#ff5b5a, #fbc51c);
}
.gradient4 {
  background-image: linear-gradient(#60c34e, #d4e372);
}
.gradient5 {
  background-image: linear-gradient(#ff835a, #ffba7d);
}
.gradient6 {
  background-image: linear-gradient(#73a3ff, #ceadf8);
}
.gradient7 {
  background-image: linear-gradient(#27a2ff, #7ff7d2);
}
/* 最近 */
.lately_operation {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.edit {
  width: 36%;
  background: #ffffff;
  margin-right: 20px;
}
.edit_title {
  padding: 20px;
  border-bottom: 1px solid #f6f6f6;
}
.edit_data {
  padding: 20px;
  height: 300px;
  overflow: auto;
}
.edit_ondata {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.edit_ondata_other {
  font-size: 14px;
  color: #c6c6c6;
  margin-top: 10px;
}
.edit_ondata_other img {
  width: 13px;
  height: 13px;
  margin-right: 10px;
}
.edit_ondata_other span {
  margin-right: 10px;
}
.updata_time {
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #3196fa;
}
.more {
  font-size: 14px;
  color: #999999;
}
.more span {
  margin-left: 10px;
}
.Matters {
  width: 36%;
  background: #fff;
  margin-right: 20px;
}
.Matters_title {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f6f6f6;
}
.Matters_title span:nth-child(2) {
  font-size: 16px;
}
.Matters_data {
  padding: 20px;
  height: 300px;
  overflow: auto;
}
.Matters_ondata {
  margin-bottom: 20px;
}
.ondata_title {
  font-size: 16px;
  height: 16px; /* 高度不能乱写，你要自己去看你的两行文字占多少高度 */
  line-height: 16px;
  overflow: hidden; /* 一定要写 */
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis; /* 超出省略号 */
  display: -webkit-box; /* 一定要写 */
  -webkit-line-clamp: 1; /* 控制行数 */
  -webkit-box-orient: vertical; /* 一定要写  */
  overflow: hidden;
}
.create {
  width: 25%;
  background: #fff;
}
.create_title {
  padding: 20px;
  border-bottom: 1px solid #f6f6f6;
}
.create_data {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  height: 300px;
  overflow: auto;
}
.create_ondata {
  width: 32.5%;
  padding: 10px 0;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #eeeeee;
}
.create_ondata img {
  width: 30px;
}
.create_ondata div {
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
}
/* 抽屉 */
.drawer_content {
  min-height: 1000px;
}
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
.basic_data {
  padding: 30px;
  width: 800px;
}
.basic_data_select {
  display: flex;
  padding: 10px 0;
}
.textarea {
  position: relative;
}
.CommonAddress {
  border-radius: 3px;
  padding: 0 5px;
  /* font-size: 1px; */
  width: 80px;
  position: absolute;
  right: 10px;
  bottom: 15px;
  background: #eeeeee;
}
.CommonAddress_choice {
  display: flex;
  justify-content: space-between;
}
.CommonAddress_choice_content i {
  color: #3196fa;
  margin-right: 10px;
}
.CommonAddress_del {
  color: #3196fa;
}
.CommonAddress_del:hover {
  color: red;
}
.LastAddress {
  position: relative;
}
.LastAddress span:nth-child(3) {
  margin-left: 10px;
  color: #8ebffb;
}
.LastAddress_right {
  position: absolute;
  right: 0;
  color: #8ebffb;
}
.uploadfile {
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3196fa;
  color: white;
  border-radius: 3px;
}
.uploadfile span {
  margin-left: 10px;
}
.uploadfile_data {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #e7e7e7;
}
.uploadfile_data_file {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.uploadfile_data_file_name {
  display: flex;
  align-items: center;
}
.uploadfile_data_file_name span {
  margin-left: 20px;
}
.delfile {
  color: #3196fa;
}
.delfile:hover {
  color: red;
}
/* 按钮 */

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
</style>
