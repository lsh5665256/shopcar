/*
 * @Author: 席鹏昊
 * @Date: 2020-01-09 08:33:11
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-09 11:33:51
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
    @action
    async goDetail(id:number){
        let params ={
            page:this.page,
            size:this.size,
            categoryId:id

        }
        let res:any = await goDetail(params)
        this.goodsList = res.data.data.goodsList
        
    }

    @action
    async getTopList(id:number){
        let res:any = await getTopList({id})
        // localStorage.setItem('navList',JSON.stringify(res.data.brotherCategory))
        this.navList = res.data.data.brotherCategory
        this.name = res.data.data.currentCategory.name
        this.title = res.data.data.currentCategory.front_name

        
    }
}