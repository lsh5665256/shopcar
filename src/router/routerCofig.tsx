/*
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-10 21:18:39
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
import Moreping from "../views/moreping"
import Liuyan from "../views/liuyan"

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
            path:"/moreping",
            component:Moreping
        },
        {
            path:"/liuyan",
            component:Liuyan
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