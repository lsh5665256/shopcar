import React from 'react'
// 导入store
import classify from './module/classify'
import PageContent from './module/PageContent'
import Special from './modules/special'
import Main from './modules/home'
import GoodsList from './modules/goodsList'
import getGoodsContData from './modules/goodsList'
import good from './modules/goodsList'
export default {
    classify: new classify(),
    PageContent:new PageContent(),
    Special:new Special(),
    Main:new Main(),
    GoodsList:new GoodsList(),
    getGoodsContData:new getGoodsContData(),
    good : new good()   ,
}

