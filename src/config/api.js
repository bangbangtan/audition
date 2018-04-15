import axios from 'axios/dist/axios.min'

let base = process.env.API_ROOT
// 获取登录用户的权限
export const getNewsList = params => {
  return axios.get('static/data/tsconfig.json', JSON.stringify(params)).then(res => res.data)
}
