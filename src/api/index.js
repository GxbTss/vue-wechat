import Axios from './fetch'

//  获取banner数据
export const getBannerList = (params = {}) => {
  return Axios.post('', params)
}
