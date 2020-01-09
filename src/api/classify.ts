/*
 * @Author: 席鹏昊
 * @Date: 2020-01-09 08:33:11
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2020-01-09 08:56:41
 * @Description: 
 */
import request from '../utils/index'

// 初始化
export function Classification(){
    return request({
        url:'/catalog/index',
        method:'get'
    })
}
// 当前分类信息和子分类
export function Current(id: number){
    return request({
        url:'/catalog/current',
        method:'get',
        params:{id}
    })
}

export const goDetail = (params:object) =>request.get('/api/goods/list',{params})
export const getTopList = (params:object) =>request.get('/api/goods/category',{params})
// export function goDetail(params:any){
//     return request({
//         url:'/api/goods/list?page=1&size=1000&categoryId=1008002',
//         method:'get',
//         params
//     })
// }