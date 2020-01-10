import Special from './modules/special'
import Main from './modules/home'
import GoodsList from './modules/goodsList'
import getGoodsContData from './modules/goodsList'
import good from './modules/goodsList'
// import classfityList from './modules/goodsList'

export default {
  
    Special:new Special(),
    Main:new Main(),
    GoodsList:new GoodsList(),
    getGoodsContData:new getGoodsContData(),
    good : new good()   ,
    // ClassfityList:new classfityList()

}