export interface shopCartType{
        list_pic_url:string,
        goods_name:string,
        retail_price:number,
        number:number,
        id:number,
        name:string,
        goods_brief:string,
        question:string,
        answer:string,
        goods_id:number,
        value:string,
        goods_desc:any,
        counter_price:number,
        count:number,
        add_time:string,
        content:string,
        pic_url:string
        
    }
    
    //轮播
    export interface ItemTypes{
        id:number,
        img_url:string,
         img_desc:string,
         sort_order:any,
         goods_id:number
    
    }
    export interface Type{
        Lunbolist:ItemTypes[]
    
    }
    export interface goodsListType {
        id: number
        name: string
        list_pic_url: string
        retail_price: number
    }
    export interface categoryItemType {
        id?: number
        name?: string
        goodsList: goodsListType[]
    }