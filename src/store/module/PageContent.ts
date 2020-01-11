/*
 * @Author: 席鹏昊
 * @Date: 2020-01-09 08:33:11
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-11 08:38:44
 * @Description: 
 */
import {observable,action,computed} from 'mobx'

import {goDetail,getTopList}  from '../../api/PageContent'

export default class PageContent{
    @observable
    flag:boolean = true
    @observable
    page:number = 1 
    @observable
    size:number = 1000
    @observable
    navList :Array<any> = []
    @observable
    goodsList :Array<any> = []
    @observable
    name :string = ''
    @observable
    title :string = ''
    @observable
    curIndex:number = 0
    
    @action
    async goDetail(id:number){
        let params ={
            page:this.page,
            size:this.size,
            categoryId:id
        }
        let res = await goDetail(params)
        this.goodsList = res.data.data.goodsList  
    }

    @action
    async getTopList(id:number,index:number){
        this.curIndex = index
        // 请求返回数据
        let res = await getTopList({id})
        this.navList = res.data.data.brotherCategory
        this.name = res.data.data.currentCategory.name
        this.title = res.data.data.currentCategory.front_name

    }
}