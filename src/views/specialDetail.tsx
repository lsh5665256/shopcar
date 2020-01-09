
import React, { useEffect, useState } from "react"
import useStore from "../utils/useState"
import { useObserver } from "mobx-react-lite"
import "./specialDetail.css"
import {History} from "history"
import tu from "../icon/pencil.svg"
interface PropType {
    location: History.LocationState,
    history:History
}
const Cart: React.FC<PropType> = (props) => {
    //console.log(props.location)
    let [location, setLocation] = useState<number>(0)
     
    let store = useStore();
    let { Special } = store;
    useEffect(() => {
        let id = props.location.state;

        console.log('props.location...', props.location, id);

        Special.getSpecialDetail({ id })
        Special.getPinglun({valueId:id,typeId:1,page:1,size:5})
        setLocation(id);
    }, []);
    let goback=()=>{
        props.history.goBack();
        // props.history.push("/home/subject")
        // Special.detaillist=[];
       // props.history.push({pathname:"/spexiang/" +id})
        
        // props.history.push(`/spexiang/id=${id}`)
    }
    let goMore=()=>{
        props.history.push("/moreping/"+location);
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
                <span>精选留言</span>
                 <span><img src={tu} alt="" style={{width:"20px",height:"20px"}}/></span>
               
            </div>
            {/* 留言列表 */}
            <div className ="lylist">
                 {
                     Special.pllist.map((item,index)=>{
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
            {/* 查看更多评论 */}
            <div className="more" onClick={()=>{goMore()}}>
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