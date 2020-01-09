/*
 * @Author: 席鹏昊
 * @Date: 2020-01-06 15:03:29
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-09 08:52:22
 * @Description: 
 */
//购物车
import Cart from "./cart";
//详情页
import Details from "./details"
// 导入store
import classify from './module/classify'
import PageContent from './module/PageContent'
export default {
    cart :new Cart(),
    details :new Details(),
    classify: new classify(),
    PageContent:new PageContent()
}