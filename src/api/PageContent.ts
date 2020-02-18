/*
 * @Author: 席鹏昊
 * @Date: 2020-01-09 08:33:11
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2020-01-09 11:29:48
 * @Description: 
 */
import request from '../utils/index'


export const goDetail = (params:object) =>request.get('/goods/list',{params})

export const getTopList = (params:object) =>request.get('/goods/category',{params})

// 商品详情
export const goodsDetail = (params:object) =>request.get('/goods/detail',{params})