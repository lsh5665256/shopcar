/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-09 11:26:20
 * @Description: 
 */

import Subject from '../views/special'
import Classify from '../views/classify'
import Cart from '../views/cart'
import My from '../views/my'
import Main from '../views/main'
import Details from "../views/details"
import Home from '../views/homes'
import PageContent from '../views/PageContent/index'
import SpeXiang from "../views/specialDetail"
import Login from "../views/login"
const route ={
    medo: "histroy",
    routes:[
        {
            path: '*',
            redirect: '/home/main'
        },
        {
            path: '/Login',
            component: Login,
        },
        {
            path:"/spexiang",
            component:SpeXiang
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
                    component: Subject
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
            path:'/pagecontent',
            component:PageContent
        }
    ]
}

export default route