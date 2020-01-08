/*
 * @Author: 席鹏昊
 * @Date: 2020-01-06 15:23:17
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-08 20:12:00
 * @Description: 
 */

 export interface cartList {
   goods_name:string,
   retail_price:number,
   number:number,
   list_pic_url:string,
   checked:number,
   product_id:number,
   goods_id:number,
   id:number,
   session_id:number,
   goods_sn:string,
   cartList:Array<Item>,
 }
 interface Item {
   id:number,
   user_id:number,
   session_id:number,
   goods_id:number,
   goods_sn:string,
   product_id:number,
   goods_name:string,
   market_price:number,
   retail_price:number,
   number:number,
   goods_specifition_name_value:string,
   goods_specifition_ids:string,
   checked:number,
   list_pic_url:string
 }
 
 export interface cartTotal {
   goodsCount:number,
   goodsAmount:number,
   checkedGoodsCount:number,
   checkedGoodsAmount:number,
   // cartTotal: cartTotalObject
 }

 interface  cartTotalObject {
   goodsCount:number,
   goodsAmount:number,
   // checkedGoodsCount:number,
   checkedGoodsAmount:number,
 }