import request from "../utils/request";
export let getSpecialData = (params: any)=>{
    return  request.get('/topic/list',{params})
}
export let getSpecialDetail = (params: any)=>{
    return  request.get('/topic/detail',{id:params.id})
   // return  request.get('/topic/detail?id=314')
}
export let getPinglun = (params: any)=>{
    return  request.get('/comment/list',{valueId:params.valueId,typeId:params.typeId,page:params.page,size:params.size})
}
export let getmorePing = (params: any)=>{
    console.log(params,'___________')
    return  request.get('/comment/list',{valueId:params.valueId,typeId:params.typeId})
}