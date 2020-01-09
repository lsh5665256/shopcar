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
        let res = await goDetail(params)
        this.goodsList = res.data.goodsList
        
    }

    @action
    async getTopList(id:number){
        let res = await getTopList({id})
        console.log('res...',res)
        // localStorage.setItem('navList',JSON.stringify(res.data.brotherCategory))
        this.navList = res.data.brotherCategory
        this.name = res.data.currentCategory.name
        this.title = res.data.currentCategory.front_name

        
    }
}