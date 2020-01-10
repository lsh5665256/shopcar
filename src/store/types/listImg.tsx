//轮播图
export interface Banner{
ad_position_id: number
content: string
enabled: number
end_time: number
id: number
image_url:string
link: string
media_type: number
name:string
}

// 品牌商
export interface ListImg{
    app_list_pic_url:any,
      id:number,
      name:any,
      list_pic_url:any,
      new_pic_url:any,
      floor_price:number,
      pic_url:any,
      simple_desc:string,
  }
// 新品首发
  export interface TwoListImg{
    list_pic_url:any,
    name:string,
    retail_price:number
  }

// 人气推荐
export interface HotGoodData{
  goods_brief:string,
  list_pic_url:string,
  retail_price:number,
  name:string
}

// 居家...
export interface LivingAtHomeData{
  goodsList:any,
  list_pic_url:string,
  retail_price:number,
  id:number,
  name:string,
  // items:any,
  // names:any,
}