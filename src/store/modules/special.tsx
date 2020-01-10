// 引入泛型
import {specialType} from '../types/special'
// 引入mobx
import {observable,action,computed} from 'mobx'
import {getSpecialData} from '../../api/special'


// 定义数据
export default class CreateStore{
    @observable
    list:specialType[]=[];

    @action
    async getSpecialData(obj:object){
        const res:any =await getSpecialData(obj);
        console.log(res,'res');
        this.list = res.data;
    }
}