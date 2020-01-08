
import React, { useEffect } from "react"
import useStore from "../utils/useState"
import { useObserver } from "mobx-react-lite"
import "./specialDetail.css"
import {History} from "history"
interface PropType {
    location: Location,
    history:History
}
const Cart: React.FC<PropType> = (props) => {
    //console.log(props.location)
    
   // let id=props.location.state
    let store = useStore();
    let { Special } = store;
    useEffect(() => {
        const {state}=props.location as {state?:any}
        console.log(state)
        Special.getSpecialDetail({ id:state })
    }, []);
    let goback=()=>{
        props.history.goBack();
        // props.history.push("/home/subject")
        // Special.detaillist=[];
       // props.history.push({pathname:"/spexiang/" +id})
        
        // props.history.push(`/spexiang/id=${id}`)
    }
   

    return useObserver(() => (
        <div className="specaiDetail-wrap">
            {/* 上面50px的头 */}
            <div className="DetailHeader">
                <span onClick={()=>{goback()}}>&lt;</span>
                <span>
                    {
                        Special.detaillist.map((item, index) => {
                            return <span key={index}>
                                {item.title}
                            </span>
                        })
                    }
                </span>
                <span></span>
            </div>
            <div className="liantu">
                
                {
                    Special.detaillist.map((item, index) => {
                        return <span key={index}>
                             
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </span>
                    })
                }
            </div>
            {/* 精品留言 */}
            <div className="jxly">
                精选留言
            </div>
            {/* 留言列表 */}
            <div className ="lylist">
                  



            </div>
            {/* 查看更多评论 */}
            <div className="more">
                查看更多评论
           </div>
            <div className="a1">
                {
                    Special.detaillist.map((ite, index1) => {
                        return <div key={index1}>
                            <img src={ite.item_pic_url} alt="" />

                        </div>
                    })
                }

            </div>
            <div className="tuxiazi">
                {
                    Special.detaillist.map((ite, index2) => {
                        return <div key={index2}>

                            {ite.subtitle}
                        </div>
                    })
                }
            </div>

            {/* {
                Special.detaillist.map((item, index) => {
                   
                    return <div className="specialele" key={index} onClick={()=>{goDetail(item.id)}}>
                        <img src={item.scene_pic_url} alt="" />
                        <div>{item.title}</div>
                        <div>{item.subtitle}</div>
                        <p>{item.price_info}元起</p>
                    </div>
                })
            } */}

        </div>
    ))
}

export default Cart;