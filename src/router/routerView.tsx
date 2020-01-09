import React, { Component } from 'react'
import {BrowserRouter, HashRouter, Redirect, Route, Switch} from "react-router-dom"
interface propsType {
    route:Routes
}
interface Routes {
    medo?: string,
    routes: Array<Item>
}
interface Item {
    path: string,
    redirect?: any ,
    component?: React.FC |React.Component | any,
    children?: Array<Item>
}
 class View extends Component<propsType> {
    healdIf(){
        let {route}=this.props;
        let routes:Array<Item>= route instanceof Array ? route :route.routes;
        let redirects = routes.filter((item,index)=>item.redirect)
        return [
            <Switch key="1">
                {
                   routes.map((item: any,index: any)=>{
                    if(item.component){
                        return <Route key={index} path={item.path} render={(props)=>{
                            return <item.component {...props} child={item.children}></item.component>
                        }}></Route>
                    }
                   }) 
                }
            </Switch>,
            <Switch key="2">
                {
                    redirects.map((item,index)=>{
                        return <Redirect exact key={index} to={item.redirect} from={item.path}></Redirect>
                    })
                }
            </Switch>
        ]
    }
    render() {
        let {route}=this.props
        if(route instanceof Array){
            return this.healdIf()
        }else{
        if(route.medo==="histroy"){
            return (
                <BrowserRouter>
                    {this.healdIf()}
                </BrowserRouter>
            )
           
           
        }else{
            return(
                <HashRouter>
                    {this.healdIf()}
                </HashRouter>
            )
        }
    }
       
    }
}
export default View