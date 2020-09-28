<template>
  <div class="search_mian">
    <div class="flex_b search_condition">
      <!-- <el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
      <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>-->
      <el-input placeholder="请输入关键字" style="width: 120px;" v-model="createcrux"></el-input>
      <el-select placeholder="请选择事宜类型" style="width: 150px;" v-model="thingtype">
        <el-option
          :key="item.value"
          :label="item.label"
          :value="item.value"
          v-for="item in thingtypelist"
        ></el-option>
      </el-select>
      <el-input placeholder="请输入创建人" style="width: 150px;" v-model="createpeople"></el-input>
      <div class="screen_time" style="width: 222px;">
        <el-date-picker
          clear-icon="el-icon-date"
          placeholder="选择创建时间"
          prefix-icon="false"
          type="date"
          v-model="createtime"
        ></el-date-picker>
      </div>
      <el-button type="primary">搜索</el-button>
    </div>
    <div class="searchdata">
      <div class="screen flex_b">
        <span>搜索结果：{{}}</span>
      </div>
      <div class="searchlist">
        <div :key="index" v-for="(item,index) in searchlist">
          <div class="searchlist_data">
            <div class="searchlist_data_title" v-html="item.name"></div>
            <div class="searchlist_data_basics">
              <div>
                <i></i>
                <span v-html="item.type"></span>
              </div>
              <div>
                <span>会议阶段：</span>
                <span v-html="item.stage"></span>
              </div>
              <div>
                <span>会议时间：</span>
                <span v-html="item.date"></span>
              </div>
              <div>
                <span>文件柜：</span>
                <span v-html="item.file"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      createcrux: '',//关键字
      thingtype: '', //事宜类型
      createtime: '', //创建时间
      createpeople: '',//创建人
      thingtypelist: [
        {
          value: '1',
          label: '值班工作'
        }, {
          value: '2',
          label: '会议'
        }, {
          value: '3',
          label: '审核'
        }, {
          value: '4',
          label: '评价'
        },
      ],
      searchlist: [
        {
          id: '1',
          name: '<span style="color: #92C0FB;">2020年老年慰问活动-财政人员</span>',
          type: '会议',
          stage: '正式会议',
          date: '15.30',
          file: '今日财政会议.doc'
        }, {
          id: '1',
          name: '2020年老年慰问活动-<span style="color: red;">财政</span>人员',
          type: '会议',
          stage: '正式会议',
          date: '15.30',
          file: '今日<span style="color: red;">财政</span>会议.doc'
        }, {
          id: '1',
          name: '2020年老年慰问活动',
          type: '会议',
          stage: '正式会议',
          date: '15.30',
          file: '今日<span style="color: red;">财政</span>会议.doc'
        }, {
          id: '1',
          name: '2020年老年慰问活动',
          type: '会议',
          stage: '正式会议',
          date: '15.30',
          file: '今日<span style="color: red;">财政</span>会议.doc'
        }
      ],
    }
  }

}
</script>

<style scoped>
.el-input__icon,
.el-icon-date {
  opacity: 0;
}
.search_mian {
  padding: 30px;
  margin-left: 200px;
}
.search_condition {
  font-size: 16px;
}
.searchdata {
  width: 788px;
}
/* 筛选条件 */
.screen {
  font-size: 16px;
  margin-top: 20px;
}
.screen div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.screen span {
  margin-right: 10px;
}
.screen_time span {
  width: 101px;
}
/* 搜索结果 */
/* .searchlist {
  padding: 10px 0;
} */
.searchlist_data {
  margin: 30px 0;
}
.searchlist_data_title {
  font-size: 16px;
}
.searchlist_data_basics {
  margin-top: 10px;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #c6c6c6;
}
.searchlist_data_basics div {
  margin-right: 30px;
}
</style>