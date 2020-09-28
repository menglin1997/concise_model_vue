/*
 * @Descripttion: 
 * @version: 1.0.0
 * @@Company: ZZCYI
 * @Author: zml
 * @Date: 2020-05-19 11:14:44
 * @LastEditors: zml
 * @LastEditTime: 2020-05-19 16:56:00
 */
import request from '@/utils/request'
export function login(query) {
  return request({
    url: '/api/bxgl-ws/ext/isCanToSpMenu',
    method: 'get',
    params: query
  })
}


// 新增编辑菜单项
const txProgramInfo = function txProgramInfo(query) {
  return request({
    url: '/api/base/txProgramInfo',
    method: 'post',
    data: query
  })
}

export default {
  txProgramInfo
}