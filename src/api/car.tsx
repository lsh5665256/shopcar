/*
 * @Author: 席鹏昊
 * @Date: 2020-01-06 20:12:41
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-09 15:07:04
 * @Description: 
 */

 //购物车数据
import Axios from "../utils/index"

//获取用户购物车数据
export const address = () => {
    return Axios.get('/cart/index')
}

//购物车商品是否选中
export const checked= (isChecked:number,productIds:string | number) => {
    return Axios.post('/cart/checked',{isChecked,productIds})
}

//更新购物车数据
export const update = (goodsId:number,id:number,number:number,productId:number) => {
    return Axios.post('cart/update',{goodsId,id,number,productId})
}

//删除购物车商品
export const deletes = (productIds:string) =>{
    return Axios.post("/cart/delete",{productIds})
}

//获取用户购物车商品数量
export const goodscount = () => {
    return Axios.get("/cart/goodscount")
}