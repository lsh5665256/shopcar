/*
 * @Author: 席鹏昊
 * @Date: 2020-01-10 21:03:49
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2020-01-10 21:10:43
 * @Description: 
 */
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
