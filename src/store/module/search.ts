import {observable,action,computed} from 'mobx'
import {search,searchInput} from '../../api/search'

export default class Search {
    @observable
    historyKeywordList:Array<any> = [] //历史搜索的数据
    @observable
    hotKeywordList:Array<any> = [] //热门搜索的数据
    @observable
    keyword :string = ''//input的placeHouder值
    @observable
    page :number = 1
    @observable
    size :number = 100
    @observable
    order :string = 'desc'
    @observable
    sort :string = 'id'
    @observable
    categoryId :number = 0




    @action 
    async search(){
        let res:any = await search()
        this.historyKeywordList = res.data.historyKeywordList
        this.hotKeywordList = res.data.hotKeywordList
        this.keyword = res.data.defaultKeyword.keyword
    }

    @action
    async searchInput(keyword:string){
        let params = {
            keyword:keyword,
            page:this.page,
            size:this.size, 
            categoryId:this.categoryId,
            sort:this.sort, 
            order:this.order, 
        }
        let res:any = await searchInput(params)
        console.log('res...',res)
    }
}
