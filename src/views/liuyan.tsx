import React, { useEffect } from "react"
import useStore from "../utils/useState"
import { useObserver } from "mobx-react-lite"
import "./liuyan.css"
import {History} from "history"
interface PropType {
    location: Location,
    history:History,
}

const Subject:React.FC<PropType>=(props)=>{
    let fanhui=()=>{
        props.history.push("/spexiang");
    }

    return (
        <div className="liuyanwrap">
            <div className="liuyanheaders">
                 <span onClick={()=>{fanhui()}}>&lt;</span>
                 <span>查看更多评论</span>
                 <span></span>
             </div> 
             <div className="wenbenyu">
                 <textarea name="" id="" className="wby"></textarea>
             </div>
             <div className="btnbox">
                <button className="c1">清空</button>
                <button className="c2">留言</button>
             </div>

        </div>
    )
}

export default Subject;