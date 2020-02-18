import React, { useEffect, useState } from "react"
import useStore from "../utils/useState"
import { useObserver } from "mobx-react-lite"
import "./liuyan.css"
import { History } from "history"
interface PropType {
    location: Location,
    history: History,

}

const Subject: React.FC<PropType> = (props) => {
    // let [location, setLocation] = useState<number>(0)
    let [ipt, setipt] = useState("")
    let num = props.location.pathname.lastIndexOf('\/')


    localStorage.setItem('x-nideshop-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiemhhbmdzYW4iLCJwYXciOiIxMjMiLCJpYXQiOjE1NzQ3NjE2MTYsImV4cCI6MTU3NDg0ODAxNn0.mUAzdp6dZsUQM5RWZoT_BdUTzm5wGmX95OhRH4-sWjw')
    let fanhui = () => {
        props.history.goBack();
    }
    let store = useStore();
    let { Special } = store;
 

    let jiaodian = (e: any) => {
        setipt(e.target.value)
        console.log(e.target.value.length,"eeeeeeeeeeee")

        console.log(ipt.length, '长度')
    }
    console.log(ipt,1111111)
    console.log(ipt.length, '外面长度')
    let liuyan = () => {
        Special.addData({ content: ipt, typeId: '1', valueId: props.location.pathname.slice(num + 1) })
        props.history.goBack();
    }
    return useObserver(() => (
        <div className="liuyanwrap">
            <div className="liuyanheaders">
                <span onClick={() => { fanhui() }}>&lt;</span>
                <span>查看更多评论</span>
                <span></span>
            </div>
            <div className="wenbenyu">
                <textarea name="" id="" value={ipt.length > 80 ? ipt.slice(0, 80) : ipt} className="wby" onChange={(e) => jiaodian(e)}></textarea>
                
                <span className={`spans ${ipt.length>80?'active':''}`}>{ipt.length>80 ?80 :ipt.length }/80</span>
            </div>

            <div className="btnbox">
                {
                    ipt.length > 0 ? <button className="c1">清空</button> : ""
                }

                <button className="c2" onClick={(e) => { liuyan() }}>留言</button>
            </div>

        </div>
    ))
}

export default Subject;