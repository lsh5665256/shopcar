/*
 * @Author: 席鹏昊
 * @Date: 2020-01-06 15:03:29
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-10 21:40:16
 * @Description: 
 */
//购物车
import Cart from "./cart";
//详情页
import Details from "./details"

// 导入store
import classify from './module/classify'
import PageContent from './module/PageContent'
import Special from './modules/special'
import Main from './modules/home'
import GoodsList from './modules/goodsList'
import getGoodsContData from './modules/goodsList'
import good from './modules/goodsList'
export default {
    cart :new Cart(),
    details :new Details(),
    classify: new classify(),
    PageContent:new PageContent(),
    Special:new Special(),
    Main:new Main(),
    GoodsList:new GoodsList(),
    getGoodsContData:new getGoodsContData(),
    good : new good()   ,
}