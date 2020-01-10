import request from "../utils/request";
export let getHomeData = ()=>{
    return  request.get('/')
}