/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-07 10:13:09
 * @Description: 
 */

import Subject from '../views/subject'
import Classify from '../views/classify'
import Cart from '../views/cart'
import My from '../views/my'
import Main from '../views/main'

import Home from '../views/homes'

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
        }
    ]
}

export default route