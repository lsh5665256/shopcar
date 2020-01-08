import {observable,action,computed} from 'mobx'
import {Classification,Current,goDetail,getTopList} from '../../api/classify'
export default class classiFyStore {
    @observable
    currentIndex:number = 0 //开始下标
    @observable
    list:Array<any> = [] //初始化数据
    @observable
    checkList:Array<any> = [] //点击数据
    @observable
    currentList:Array<any> = [] 
    @observable
    url:string = '' //背景图的路径
    @observable
    name:string = '' //右侧分类名
    @observable
    imgText:string = ''
    @observable
    page:number = 1 
    @observable
    size:number = 1000





    // 初始化数据
    @action 
    async classification(){
        let res = await Classification();
        this.list = res.data.categoryList    
        this.currentList = res.data.currentCategory.subCategoryList 
        this.url = res.data.currentCategory.wap_banner_url
        this.name = res.data.currentCategory.name
        this.imgText = res.data.currentCategory.front_desc
    }

    // 点击改变数据
    @action
    async setCurIndex(id:number,index:number){
        let res = await Current(id);

        this.currentIndex = index
        this.checkList = res.data.currentCategory.subCategoryList
        this.url = res.data.currentCategory.wap_banner_url
        this.name = res.data.currentCategory.name
        this.imgText = res.data.currentCategory.front_desc
    }

    // @action
    // async goDetail(id:number){
    //     let params ={
    //         page:this.page,
    //         size:this.size,
    //         categoryId:id

    //     }
    //     let res = await goDetail(params)
    //     console.log('res...',res)
    // }
    // @action
    // async getTopList(id:number){
        
    //     let res = await getTopList({id})
    //     console.log('res...',res)
    // }

 
}