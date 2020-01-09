/*
 * @Author: 席鹏昊
 * @Date: 2020-01-09 08:33:11
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2020-01-09 11:29:48
 * @Description: 
 */
import request from '../utils/index'


export const goDetail = (params:object) =>request.get('/api/goods/list',{params})


export const getTopList = (params:object) =>request.get('/api/goods/category',{params})