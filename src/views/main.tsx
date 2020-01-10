import React,{useEffect } from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css'
import useStore from '../utils/useState'
import { useObserver } from "mobx-react-lite"
import './mainInview/main.css'
let Main:React.FC=(props:any)=>{
    let store=useStore()
    let {Main}=store
    useEffect(()=>{
        Main.getHomeData()

    },[])
    // 图标跳转
    let iconJump=(id:number)=>{
        console.log(id)
      props.history.push({pathname:`/livehome/${id}`,state:id})
    }


    console.log("store",store)
    return useObserver(()=><>
        
        <div className='main'>
            {/* 轮播图 */}
              <div className="wrap">
                  <Carousel autoplay>
                      {
                          Main.banner&&Main.banner.map((item,index)=>{
                            return    <div key={index} > 
                                         <img src={item.image_url} className="img"/>
                                     </div>
                          })
                      }
        
                    </Carousel>,
              </div>

              {/* 图标 */}
              <div className="channeWrap">
                    {
                        Main.homeList && Main.homeList.map((item,index)=>{
                            return    <div key={index} className="iconP" onClick={()=>iconJump(item.id)}>                             
                                             <img src={item.icon_url} className="icon"/>
                                    <span>{item.name}</span>
                                </div>                  
                        })
                    }  
             </div>

             {/* 图文混排 */}
             <div className="produce">  
                <b>品牌制造商职工</b>
                <div className="produceImgList">  
                    {
                        Main.listImg && Main.listImg.map((item,index)=>{     
                         return   <li key={index} >
                                    <p className="produceCont">
                                    <span>{item.name}</span>
                                    <span>{item.floor_price}元起</span>
                                    <img  src={item. new_pic_url}/>
                                    </p>
                                  </li>
                        })
                    }
                 
                </div>
            </div>
             {/*新品首发  */}
             <div className="newproduce">
                <b>新品首发</b>
                <div className="newproduceImgList">
                    {
                        Main.twoListImg && Main.twoListImg.map((item,index)=>{ 
                         return   <li key={index}>
                                    <p className="newImg">
                                        <img  src={item. list_pic_url}/>
                                    </p>
                                    <p>{item.name}</p>
                                    <p>￥{item.retail_price}</p>
                                  </li>
                        })
                    }
                 
                </div>
            </div>

            {/* 人气推荐 */}
            <div className="popularity">
                <b>人气推荐</b>
                <div>
                {
                        Main.hotGoodData&&Main.hotGoodData.map((item,index)=>{
                            return <div className="hotGoodWrap" key={index}>
                                        <div className="hotGoodWrapImg">
                                            <img src={item. list_pic_url}/>
                                        </div>
                                        <div className="rightDesc">
                                                <div>{item.name}</div>
                                                <div>{item.goods_brief}</div>
                                                <div>￥{item.retail_price}</div>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
                
            {/* 专题 */}
            <div className="subject">
                <b>专题精选</b>
                <div>
                    123
                </div>
            </div>
            
            {/* 居家... */}
         
            <>
            {
                    Main.livingAtHome&&Main.livingAtHome.map((item,index)=>{
                        return <div className="livingAtHome" key={index}>
                    <b className="title" >{item.name}</b>  
                    <div className="atHomeList" >   
                            {
                                item.goodsList.map((items:any,indexs:any)=>{
                                    return  <div  key={indexs}>
                                                <li>
                                                    <p className="newImg">
                                                        <img  src={items. list_pic_url}/>
                                                    </p>
                                                    <p>{items.name}</p>
                                                    <p>￥{items.retail_price}</p>
                                                </li>
                                                {/* <li>2</li> */}
                                            </div>
                                })
                            }
                            <li className="livinghomeIcon">
                               <p>更多{item.name}好物</p>
                               <p>
                                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABLUExURf///4uLi7KysszMzHJycvb29qurq2ZmZv7+/m1tbZSUlN3d3Xd3d35+fsbGxtnZ2e/v7/z8/J2dneHh4evr676+voaGhri4uNPT04zm/X4AAAIzSURBVFjDvVjRlqsgDKwojgEsYq36/196pbZdRVyjh728eCxlIGEySbzd/nI0uWh7QwCZvhV5cxrgUdYIRl0+TgDIwQOQErlu5PTa6Fwo8jCDZCKIAjCldeufnS0NUAgGSnWfELLRxebcmE0o9+oAopv+ldn9eevnu18hcjrax5+T8l/mS0Ad2isVUO7t41rQs2K47EloXRxCgUbe1Y0EFQOpWhSayyBdoI2cuARpPg01odzeCMieCQZLCG+nIzzPRdQTtOZJlUFV5zAqhWy15I5Cng1taXBfvharV+bIVxuL4FjMkUEsj6GvKJ1eHGRAdk0uMwwfD9cYr2GMqKvPkUx1DcOZjxPKCG3D0ddRXf8urWEZlpuYelnUcx4BuWNCTSCR1OAIzUwVxWFlhiICoubIEwx3vCVqa7OYaaaYPPdSOW75/jKi55J0UrqNomv0/mHATcde94MzNzD+QeCHvUAgVRKFfwCn1GsRq6/VtMXA8VgmKDdjrG3hYGxt4ft0tmVYafns0/6EAG18+r5bxdbSyN2+Ocbk+kzUPM51XsztcP0dc6zY34m5KfY7tgbtxP5Hg1haKPuoBn2XTmni0Jg+qoXum5g4uSGuyT+5IUWO8rnSXoGwy6SdIGcnqR1S1DBXaqlbWEulqOmS1JZJatxXrc1u2B7xWnsnoe4Zotx+78Fy527vkaQHStKLpekJk/SmPz2yDntkze6Rg169k87J7nSvnuabQfDtorj47eK/j3/n9xya7EBtgAAAAABJRU5ErkJggg=="/>
                            </p>
                            </li>
                              </div>
                        </div>
                    })
                }
            </>
                


        </div>
    </>)
}





export default Main;