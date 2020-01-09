// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action,computed} from 'mobx'
import {getSpecialData,getSpecialDetail,getPinglun,getmorePing} from '../../api/special'


// 定义数据
export default class CreateStore{
    @observable
    list:specialType[]=[];
    @observable
    detaillist:specialType[]=[];
    @observable
    pllist:specialType[]=[];
    @observable
    plmorelist:specialType[]=[];


    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
       // console.log(res,'res');
        
        this.list = res.data;
    }
    @action
    async getSpecialDetail(obj:object){
        const res:any =await getSpecialDetail(obj);
       // console.log(res,'res');
        
        this.detaillist = [res]
      //  console.log( this.detaillist,"resxin")
    }
    // @observable
    // name:specialType[]=[];
    @action
    async getPinglun(obj:object){
        const res:any =await getPinglun(obj);
        console.log(res,'res1111');
        // this.name=res.data[0].user_info.username
        this.pllist= res.data
        console.log( this.pllist)
    }
    @action
    async getmorePing(obj:object){
        const res:any =await getmorePing(obj);
        console.log(res,'res1111');
        // this.name=res.data[0].user_info.username
        this.plmorelist= res.data
        console.log( this.plmorelist,'+++++++++=')
    }
}