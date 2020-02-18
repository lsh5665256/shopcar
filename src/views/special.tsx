import React, { useEffect } from "react"
import useStore from "../utils/useState"
import { useObserver } from "mobx-react-lite"
import "./special.css"
import {History} from "history"
const page = 4;
const size = 20;
interface PropType{
    history:History
}
let Special: React.FC<PropType> = (props) => {
    let store = useStore();
    let { Special } = store
    useEffect(() => {
        Special.getSpecialData({ page, size })
    }, [Special]);
    let goDetail=(id:number)=>{
        console.log(id);
        props.history.push("/spexiang",id)
       // props.history.push({pathname:"/spexiang/" +id})
        
        // props.history.push(`/spexiang/id=${id}`)
    }
    return useObserver(() => (
        <div className="specai-wrap">
            {
                Special.list.map((item, index) => {
                   
                    return <div className="specialele" key={index} onClick={()=>{goDetail(item.id)}}>
                        <img src={item.scene_pic_url} alt="" />
                        <div>{item.title}</div>
                        <div>{item.subtitle}</div>
                        <p>{item.price_info}元起</p>
                    </div>
                })
            }
        </div>
    ))
}
export default Special;