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
        this.goodsList = res.data.goodsList  
    }

    @action
    async getTopList(id:number,index:number){
        this.curIndex = index
        // 请求返回数据
        let res = await getTopList({id})
        this.navList = res.data.brotherCategory
        this.name = res.data.currentCategory.name
        this.title = res.data.currentCategory.front_name

    }
}