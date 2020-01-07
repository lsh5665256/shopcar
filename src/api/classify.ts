import request from '../utils/request'

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