import Classify from '../../views/classify';
//
export interface GoodsList{
    banner_url: string
    front_desc: string
    front_name: string
    icon_url: string
    id: number
    img_url: string
    is_show: 1
    keywords: string
    level:string
    name: string
    parent_id: number
    show_index: number
    sort_order: number
    type: number
    wap_banner_url: string
}


export interface GoodsContList{
    checked: false
    id: 0
    name: "全部"
}


export interface TwoContList{
    banner_url: string
    front_desc: string
    front_name: string
    icon_url: string
    id: number
    img_url: string
    is_show: 1
    keywords: string
    level:string
    name: string
    parent_id: number
    show_index: number
    sort_order: number
    type: number
    wap_banner_url: string
}



// 商品列表
export interface CateGoodsList{
    id: number
    list_pic_url:string
    name:string
    retail_price: number
}
