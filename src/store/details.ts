/*
 * @Author: 席鹏昊
 * @Date: 2020-01-08 19:31:35
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-10 19:42:59
 * @Description: 
 */
import React from "react";
import { observable, action, computed } from "mobx"
import { dataType, List, infoType, galleryType, galleryTypes, issueType, commentType, brandType, productListType, dataTypes, pic_listType } from "../utils/type"
//引入Axios
import { detail, related } from "../api/details"
import {goodscount} from "../api/car"

export default class Dedails {
    @observable
    data: dataType = {
        info: {
            id: 0,
            category_id: 0,
            goods_sn: "",
            name: "",
            brand_id: 0,
            goods_number: 0,
            keywords: "",
            goods_brief: "",
            goods_desc: "",
            is_on_sale: 0,
            add_time: 0,
            sort_order: 0,
            is_delete: 0,
            attribute_category: 0,
            counter_price: 0,
            extra_price: 0,
            is_new: 0,
            goods_unit: "",
            primary_pic_url: "",
            list_pic_url: "",
            retail_price: 0,
            sell_volume: 0,
            primary_product_id: 0,
            unit_price: 0,
            promotion_desc: "",
            promotion_tag: "",
            app_exclusive_price: 0,
            is_app_exclusive: 0,
            is_limited: 0,
            is_hot: 0,
        },
        gallery: [],
        attribute: [],
        userHasCollect: 0,
        issue: [],
        comment: {
            comment: 0,
            data: {
                content: "",
                add_time: "",
                pic_list: []
            }
        },
        brand: {
            id: 0,
            name: "",
            list_pic_url: "",
            simple_desc: "",
            pic_url: "",
            sort_order: 0,
            is_show: 0,
            floor_price: 0,
            app_list_pic_url: "",
            is_new: 0,
            new_pic_url: "",
            new_sort_order: 0
        },
        productList: []
    }
    @observable
    goodsCount:number=0
    @observable
    list:List[]=[]
    @action
    async setList(id: string) {
        let res = await detail(id);
        let src= await related(id)
        let count = await goodscount()
        this.list=src.data.data.goodsList
        this.goodsCount=count.data.data.cartTotal.goodsCount
        this.data=res.data.data
    }
}

