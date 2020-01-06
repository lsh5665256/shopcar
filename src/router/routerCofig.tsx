/*
 * @Author: 席鹏昊
 * @Date: 2020-01-03 19:20:38
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-06 11:19:35
 * @Description: 
 */
import Home from "../components/Home";
import Details from "../components/Details";

const route ={
    medo: "histroy",
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path:'/home/details',
                    component: Details
                }
            ]
        },
        {
            path: '/details',
            component: Details
        }
    ]
}

export default route