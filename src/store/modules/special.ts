/*
 * @Author: 席鹏昊
 * @Date: 2020-01-10 21:03:49
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2020-01-10 21:10:23
 * @Description: 
 */
// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action,computed} from 'mobx'
import {getSpecialData,getSpecialDetail,getPinglun,getmorePing,addData} from '../../api/special'


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
    @observable
    addtalk:specialType[]=[];

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
    @action
    async addData(obj:object){
        const res:any =await addData(obj);
        console.log(res,'res1111');
        this.addtalk = res;
        
        // this.name=res.data[0].user_info.username
        
    }

}