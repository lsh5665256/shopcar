/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-09 12:00:44
 * @Description: 
 */

import Subject from '../views/subject'
import Classify from '../views/classify'
import Cart from '../views/cart'
import My from '../views/my'
import Main from '../views/main'
// 图标路由
import LiveHome from '../views/mainInview/liveHome'
import Home from '../views/homes'
import { Component } from 'react'

const route ={
    medo: "histroy",
    routes:[
      
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
            path:'/livehome',
            component:LiveHome
        },
       
        {
            path: '*',
            redirect: '/home/main'
        }
    ]
}

export default route