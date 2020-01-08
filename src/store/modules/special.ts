// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action,computed} from 'mobx'
import {getSpecialData,getSpecialDetail,getPinglun} from '../../api/special'


// 定义数据
export default class CreateStore{
    @observable
    list:specialType[]=[];
    @observable
    detaillist:specialType[]=[];
    @observable
    pllist:specialType[]=[];


    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
       // console.log(res,'res');
        
        this.list = res.data;
    }
    @action
    async getSpecialDetail(obj:object){
        const res:any =await getSpecialDetail(obj);
        console.log(res,'res');
        
        this.detaillist = [res]
        console.log( this.detaillist,"resxin")
    }
    @action
    async getPinglun(obj:object){
        const res:any =await getPinglun(obj);
        console.log(res,'res');
        
        this.pllist= res.data
        console.log( this.detaillist,"resxin")
    }
}