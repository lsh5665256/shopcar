import React from 'react';
import {NavLink,Redirect} from 'react-router-dom'
import View from "../router/routerView"
const Homes:React.FC=(props:any)=>{
    return (
        <div className="homes">
            <div className="main">
                <View route={props.child}></View>
                {/* <Redirect to='/home/main'></Redirect>    */}
            </div>
            <div className="footer">
                <p><NavLink to="/home/main">首页</NavLink></p>
                <p><NavLink to="/home/subject">专题</NavLink></p>
                <p><NavLink to="/home/classify">分类</NavLink></p>            
                <p><NavLink to="/home/cart">购物车</NavLink></p>
                <p><NavLink to="/home/my">我的</NavLink></p>
            </div>
        </div>
    )
}

export default Homes;

