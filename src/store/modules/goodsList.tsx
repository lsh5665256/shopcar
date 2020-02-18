//引入泛型
import {GoodsList} from '../types/goodsType'
import {GoodsContList} from '../types/goodsType'
import {CateGoodsList} from '../types/goodsType'



//引入mobx
import {observable,action,computed} from 'mobx'
import {getGoodsData} from '../../api/goodsList';
import {getGoodsContData} from '../../api/goodsList'

//定义数据
export default class CreateStore{
    @observable
    goodsData:GoodsList[]=[] //定义数组的一般都是请求回来的data，然后GoodsList[]=[]这么写是数组里的每一项是都需要在GoodsList里定义过
   
    @observable
    goodsContList:GoodsContList[]=[]

    @observable
    twocontName:string='' //要字符串的单独在这里定义就好了
    @observable
    twofrontdesc:string=''


    @observable
    curIndex:number= 0  //函数传参形参实参都需要定义

    @observable
    cateGoodsData:CateGoodsList[]=[]





    @action
    async getGoodsData(id:number){
        // console.log(id,'88888')
        const res:any=await getGoodsData(id)
        console.log(id,'idididid')
        console.log(res,'res000000000')
        this.goodsData=res.brotherCategory
        this.twofrontdesc=res.currentCategory.front_name
        this.twocontName=res.currentCategory.name
        
    }
    
    @action 
    async getGoodsContData(obj:object){
        const res:any=await getGoodsContData(obj)
        console.log(res,'res1111111')
        this.goodsContList=res.filterCategory
        this.cateGoodsData=res.goodsList
    }
    
    @action
    setIndex(index:number){
        this.curIndex = index
       
    }

      
   


    
}