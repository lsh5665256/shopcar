import React from 'react';
import { Avatar } from 'antd';

import style from "./my.module.scss";
let a=[1,2,3,4,5,6,7,8,9,10,11,12];
const My:React.FC=()=>{
    return <>
        <div className={style.my}>
            <div className={style.myHeader}>
                <div className={style.myHead}>    
                <Avatar size={60} icon="user" />
                </div>
                <div className={style.userName}>
                    <p>15323807318</p>
                    <p>普通用户</p>
                </div>
            </div>
            <div className={style.myMain}>
               
                    {a.map((item,index)=>{
                    return <div key={index}>
                            <p className={style.icon}></p>
                            <p>{item}</p>
                           </div>
                    })}
                
            </div>
            <div className={style.myFooter}>
                <div>
                    退出登录
                </div>
            </div>
           
        </div>
            
            
    </>
}

export default My;