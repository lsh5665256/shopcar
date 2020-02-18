import Axios from "../utils/index";

//获取商品详情
export const detail=(id:string)=>{
    return Axios.get(`/goods/detail?id=${id}`)
}

//相关商品
export const related =(id:string)=>{
    return Axios.get(`/goods/related?id=${id}`)
}