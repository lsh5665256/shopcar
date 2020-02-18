import React, { useEffect } from "react"
import useStore from "../utils/useState"
import { useObserver } from "mobx-react-lite"
import "./moreping.css"
import {History} from "history"
interface PropType {
    location: Location,
    history:History
}
const Cart:React.FC<PropType>=(props:any)=>{
    let store = useStore();
    let { Special } = store;
    let goback=()=>{
        props.history.goBack();
        // props.history.push("/home/subject")
        // Special.detaillist=[];
       // props.history.push({pathname:"/spexiang/" +id})
        
        // props.history.push(`/spexiang/id=${id}`)
    }
 
    useEffect(() => {
      let a1= window.location.pathname.lastIndexOf("\/")
      console.log(window.location.pathname.slice(a1+1))
      
        Special.getmorePing({valueId:window.location.pathname.slice(a1+1),typeId:'1',size:100})
    }, [Special]);


    return useObserver(() => (
        <div className="morewrap">
             <div className="moreheaders">
                 <span onClick={()=>{goback()}}>&lt;</span>
                 <span>查看更多评论</span>
                 <span></span>
             </div> 


             <div className="lylist">
                 {console.log(Special.plmorelist,'111111111111')}
             {

                        Special.plmorelist.map((item,index)=>{
                         return <div className="bao" key={index}> 
                                <div className="shang">
                                    <span>{ Object.values(item.user_info).length > 0 ?item.user_info.username:"匿名用户"}</span>
                                    <span>{item.add_time}</span>
                                </div>
                                <div className="xia">
                                   <span>{item.content}</span>
                                </div>
                         </div>

                     })
                 } 
             </div>
        </div>
    ))
}

export default Cart;