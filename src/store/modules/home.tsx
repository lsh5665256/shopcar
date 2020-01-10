// 引入泛型
import {homeType} from '../types/home'
import {ListImg} from '../types/listImg'
import {TwoListImg} from '../types/listImg'
import {HotGoodData} from '../types/listImg'
import {LivingAtHomeData} from '../types/listImg'
import {Banner} from '../types/listImg'

// 引入mobx
import {observable,action,computed} from 'mobx'
import {getHomeData} from '../../api/home'


// 定义数据
export default class CreateStore{
    @observable
    homeList:homeType[]=[];

    @observable
    listImg:ListImg[]=[];

    @observable
    twoListImg:TwoListImg[]=[]
    
    @observable
    hotGoodData:HotGoodData[]=[]

    @observable
    livingAtHome:LivingAtHomeData[]=[]
    
    @observable
    banner:Banner[]=[]


    @action
    async getHomeData(){
        const res:any =await getHomeData();
        console.log(res,'res');
        this.homeList = [...res.channel];
        this.listImg = [...res.brandList];
        this.twoListImg=res.newGoodsList;
        this.hotGoodData=res.hotGoodsList;
        this.livingAtHome=res.categoryList
       this.banner=res.banner
        console.log( this.banner,'11111111' )
    }
}