/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 16:16:32
 * @Description: 
 */

import Subject from '../views/subject'
import Classify from '../views/classify'
import Cart from '../views/cart'
import My from '../views/my'
import Main from '../views/main'

import Home from '../views/homes'
import PageContent from '../views/PageContent/index'
import Search from '../views/search/SearchPage'

const route ={
    medo: "histroy",
    routes:[
        {
            path:'/pagecontent/:id',
            component:PageContent
        },
        {
            path:'/search',
            component:Search
        },
        
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: '/home/main',                  
                    component: Main,
            
                },
                {
                    path:'/home/subject',
                    component:Subject
                },
                {
                    path: '/home/classify',
                    component: Classify,
            
                },
                {
                    path: '/home/cart',
                    component: Cart,
            
                },
               
                {
                    path: '/home/my',
                    component: My,
            
                },
            ]
        },
       
        {
            path: '/',
            redirect: '/home/main'
        }
    ]
}

export default route