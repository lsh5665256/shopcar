/*
 * @Author: 席鹏昊
 * @Date: 2020-01-08 19:31:35
 * @LastEditors  : 席鹏昊
 * @LastEditTime : 2020-01-08 21:02:45
 * @Description: 
 */
import React from "react";
import {observable, action, computed} from "mobx"

//引入Axios
import {detail} from "../api/details"


export default class Dedails {
    @observable
    list :Array<number>=[]
    location: any;
    @action
    async setList(id:string){
        let res = await detail(id);
        console.log(res,"resss")
    }
}

 