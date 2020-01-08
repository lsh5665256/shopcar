import Axios from "../utils/index";

//获取商品详情
export const detail=(id:string)=>{
    return Axios.get(`/goods/detail?id=${id}`)
}