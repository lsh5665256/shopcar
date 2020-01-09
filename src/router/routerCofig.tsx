/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-09 08:12:42
 * @Description: 
 */

import Subject from '../views/subject'
import Classify from '../views/classify'
import Cart from '../views/cart'
import My from '../views/my'
import Main from '../views/main'
import Details from "../views/details"
import Home from '../views/homes'
import PageContent from '../views/PageContent/index'

const route ={
    medo: "histroy",
    routes:[
        {
            path: '*',
            redirect: '/home/main'
        },
        {
            path: '/home',
            component:Home,
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
            path:"/details",
            component: Details
        },
        {
            path:'/detail',
            component:PageContent
        }
    ]
}

export default route