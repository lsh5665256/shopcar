/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 16:16:32
 * @Description: 
 */

import Subject from '../views/subject'
import Classify from '../views/special'
import Cart from '../views/cart'
import My from '../views/my'
import Main from '../views/main'
import Login from "../views/login"
import Home from '../views/homes'

const route ={
    medo: "histroy",
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/Login',
            component: Login,
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
                    component: Classify
                },
                {
                    path: '/home/classify',
                    component: Subject,
            
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
            redirect: '/home'
        }
    ]
}

export default route