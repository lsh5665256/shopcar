import {observable,action,computed} from 'mobx'
import {search} from '../../api/search'

export default class Search {
    @observable
    historyKeywordList:Array<any> = [] //历史搜索的数据
    @observable
    hotKeywordList:Array<any> = [] //热门搜索的数据
    @observable
    keyword :string = ''//input的placeHouder值
    @action 
    async search(){
        let res:any = await search()
        this.historyKeywordList = res.data.historyKeywordList
        this.hotKeywordList = res.data.hotKeywordList
        this.keyword = res.data.defaultKeyword.keyword

    }
}
