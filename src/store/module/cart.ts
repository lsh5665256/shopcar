import {observable,action,computed} from 'mobx'
import {Classification,Current} from '../../api/classify'
export default class CartStore {
    @observable
    currentIndex:number = 0
    @observable
    list:Array<any> = []
    @observable
    checkList:Array<any> = []
    @observable
    currentList:Array<any> = []
    @observable
    curIndex:number = 0
    @observable
    url:string = ''

    @action 
    async classification(){
        let res = await Classification();
        this.list = res.data.data.categoryList    
        this.currentList = res.data.data.currentCategory.subCategoryList 
        this.url = res.data.data.currentCategory.wap_banner_url
    }

    @action
    async setCurIndex(id:number,index:number){
        let res = await Current(id);

        this.currentIndex = index
        // console.log('res...',res.data.data.currentCategory.subCategoryList)
        this.checkList = res.data.data.currentCategory.subCategoryList
        this.url = res.data.data.currentCategory.wap_banner_url
    }

    @action
    async checkCurrent(){
        // let res = await Current(id);
    }
}