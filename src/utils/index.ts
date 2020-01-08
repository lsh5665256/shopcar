/*
 * @Author: 席鹏昊
 * @Date: 2020-01-06 19:40:24
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-08 09:14:55
 * @Description: 
 */
const axios = require('axios');
const instance = axios.create({
    baseURL: 'http://169.254.12.222:8888/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });
  instance.interceptors.request.use(function (config:any) {
    // Do something before request is sent
    config.headers["x-nideshop-token"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTYzOTUxMjg1fQ.qbMBV1MycS7iq8u0uhtmmH7RjOCwjeLrBSvtNaxGMRk"
    return config;
  }, function (error:any) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// Add a response interceptor
instance.interceptors.response.use(function (response:any) {
    // Do something with response data
    return response;
  }, function (error:any) {
    // Do something with response error
    return Promise.reject(error);
  });

  export default instance