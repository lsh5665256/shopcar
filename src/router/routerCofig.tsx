/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
<<<<<<< HEAD
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-06 18:35:13
=======
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2020-01-06 16:16:32
>>>>>>> 78d0f99a5bcd30c76b0505bcd00b73e492aaf024
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
            redirect: '/home'
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