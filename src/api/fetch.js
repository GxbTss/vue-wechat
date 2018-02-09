import axios from 'axios'
import qs from 'qs'

const Axios = axios.create({
  baseURL: '',
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 请求拦截器
Axios.interceptors.request.use(
  config => {
    if (config.type === 'post') {
      // 参数序列化
      config.data = qs.stringify(config.data)
    }
    // 若是有token, 给头部加上token验证
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
Axios.interceptors.response.use(
  response => {
    // 对响应数据做处理
    // const res = response.data
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default Axios
