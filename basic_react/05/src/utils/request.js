import { message } from 'antd'
import axios from 'axios'
import history from './history'
import { getToken, hasToken, removeToken } from './storage'

//创建axios实例
const instance = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0/',
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    if (hasToken()) {
      config.headers.Authorization = `Bearer ${getToken()}`
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    console.log(error.response)
    if (!error.response) {
      return Promise.reject('网络繁忙，请稍后重试')
    }
    if (error.response.status === 401) {
      message.warning('身份过期，请重新登录！')
      removeToken()
      history.push('/login')
    }
    return Promise.reject(error)
  }
)

export default instance
