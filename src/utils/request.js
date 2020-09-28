import axios from 'axios'
import {
  Message,
  MessageBox
} from 'element-ui'

// create an axios instance
console.log(process.env.VUE_APP_BASE_API, 'process.env.VUE_APP_BASE_API')
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})


/**
 * 保存头部信息
 *
 */
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   // config.headers['X-Token'] = getToken()
    //   config.headers['Authorization'] = 'Bearer ' + getToken()
    // }
    config.headers = {
      // ...config.header
      // "Authorization": 'bear' + 'adsklfjsdlkj'

    }
    console.log(config, 'config')
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  // 响应信息返回
  response => {
    console.log(response, 49)

    if (response.status === 200 && response.data.status === 200) {
      return response.data
    }
    Message({
      message: response.data.msg || '请求错误',
      type: 'error',
      duration: 5 * 1000
    })
    return null
  },
  error => {
    // console.log('err' + error.response.status) // for debug
    // console.log(error.response.data.ErrorMessage)
    // if (error.response.data.ReturnCode === 401) {
    //   MessageBox.confirm('登录信息已失效', '提示', {
    //     confirmButtonText: '重新登录',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     store.dispatch('user/logout').then(() => {
    //       console.log('重新登录')
    //       location.reload()
    //     })
    //   })
    // } else {
    //   Message({
    //     message: error.response.data.ErrorMessage,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    // }
    return Promise.reject(error)
  }
)

export default service