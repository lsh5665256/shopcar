/*
 * @Author: 席鹏昊
 * @Date: 2020-01-09 10:37:46
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2020-01-09 10:48:32
 * @Description: 
 */
// import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'http://169.254.12.222:8888',
//   // timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

// //添加请求拦截器
// instance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// //添加响应拦截器
// // Add a response interceptor
// instance.interceptors.response.use(function (response) {
//   // Do something with response data
//   return response.data;
// }, function (error) {
//   // Do something with response error
  
//   return Promise.reject(error);
// });

// export default instance;
import axios from 'axios'
const instance = axios.create({
  baseURL:'http://169.254.12.222:8888'
})

const getNewHeaders = () =>{
  return {'x-nideshop-token': window.localStorage.getItem('token')}
}
export default class HttpUtil {
  static get (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.get(url, { params, headers: getNewHeaders() },).then(({ data }) => {
        if(data.errno === 0){
          resolve(data.data)
        }else{
          resolve(data)
        }
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
  static post (url: string, params = {}) {
    return new Promise((resolve, reject) => {
      instance.post(url, { ...params },{headers: getNewHeaders()}).then(({ data }) => {
        resolve(data)
      }).catch((err) => {
        reject({ err: JSON.stringify(err) })
      })
    })
  }
}
