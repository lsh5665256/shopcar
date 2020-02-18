import request from "../utils/request";

export let getGoodsData = (id:number)=>{
    console.log(id,'5555')
    return  request.get('/api/goods/category',{id})
}

export let getGoodsContData = (params:object)=>{
    console.log(params,'666666')
    return  request.get('/api/goods/list',{...params})
}

//分类接口
// export let classfityList = (id:number)=>{
//     console.log(id,'分类')
//     return  request.get('/catalog/index',{id})
// }