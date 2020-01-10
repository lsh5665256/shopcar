/*
 * @Author: 席鹏昊
 * @Date: 2020-01-06 15:23:17
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-10 19:24:44
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



export interface dataType {
  info:infoType,
  gallery:Array<galleryType>,
  attribute:Array<galleryTypes>,
  userHasCollect:number,
  issue:Array<issueType>,
  comment:commentType,
  brand:brandType,
  productList:Array<productListType>
  }
export interface infoType {
  id: number,
  category_id: number,
  goods_sn: string,
  name: string,
  brand_id: number,
  goods_number: number,
  keywords: string,
  goods_brief: string,
  goods_desc: string,
  is_on_sale: number,
  add_time: number,
  sort_order: number,
  is_delete: number,
  attribute_category: number,
  counter_price: number,
  extra_price: number,
  is_new: number,
  goods_unit: string,
  primary_pic_url: string,
  list_pic_url:string,
  retail_price: number,
  sell_volume: number,
  primary_product_id: number,
  unit_price: number,
  promotion_desc: string,
  promotion_tag: string,
  app_exclusive_price: number,
  is_app_exclusive: number,
  is_limited: number,
  is_hot: number,
}
export interface galleryType {
  id:number,
  goods_id:number,
  img_url:string,
  sort_order:number,
}
export interface galleryTypes {
  value:string,
  name:string
}
export interface issueType {
  id:number,
  goods_id:string,
  question:string,
  answer:string
}
export interface commentType {
  comment:number,
  data:dataTypes
}
export interface brandType {
  id: number,
  name:string,
  list_pic_url:string,
  simple_desc:string,
  pic_url:string,
  sort_order:number,
  is_show:number,
  floor_price:number,
  app_list_pic_url:string,
  is_new:number,
  new_pic_url:string,
  new_sort_order:number
}

export interface productListType {
  id:number,
  goods_id:number,
  goods_specification_ids:string,
  goods_sn:string,
  goods_number:number,
  retail_price:number
}





export interface dataTypes {
  content:string,
  add_time:string,
  pic_list:Array<pic_listType>
}
export interface pic_listType {
  id:number,
  comment_id:number,
  pic_url:string,
  sort_order:number
}


export interface List {
  id: number,
  name: string,
  list_pic_url: string,
  retail_price: number
}