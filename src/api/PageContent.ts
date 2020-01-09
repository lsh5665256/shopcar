import request from '../utils/request'


export const goDetail = (params:object) =>request.get('/goods/list',{params})

export const getTopList = (params:object) =>request.get('/goods/category',{params})

// 商品详情
export const goodsDetail = (params:object) =>request.get('/goods/detail',{params})