import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://169.254.12.222:8888',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

//添加请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

//添加响应拦截器
// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data;
}, function (error) {
  // Do something with response error
  
  return Promise.reject(error);
});

export default instance;