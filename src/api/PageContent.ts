import request from '../utils/request'


export const goDetail = (params:object) =>request.get('/api/goods/list',{params})


export const getTopList = (params:object) =>request.get('/api/goods/category',{params})