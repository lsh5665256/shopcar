import request from '../utils/request'

export const search =()=>request.get('/search/index')
export const searchInput =(params:object)=>request.get('/goods/list',{params})