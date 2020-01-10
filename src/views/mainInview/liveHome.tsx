import React ,{useEffect } from 'react';
import './liveHome.css'
import useStore from '../../utils/useState'
import { useObserver } from "mobx-react-lite"
import {useHistory} from 'react-router-dom'

const LiveHome:React.FC=(props:any)=>{
    let store=useStore()
    let history=useHistory()
    // console.log(history.location.state)
    let {GoodsList}=store
    let {getGoodsContData}=store
    let {good}=store
    // let {ClassfityList}=store
    // console.log(good.curIndex,'storestorestore')

    useEffect(()=>{
        GoodsList.getGoodsData(history.location.state)
        getGoodsContData.getGoodsContData({page:1,size:1000,categoryId:history.location.state})
     

    },[])


    return useObserver(()=>      
      <div className="livehome">
            {/* 头部 */}
            <div className="classfityTitle">
                <p onClick={()=>window.history.go(-1)}>《</p>
                <p>奇趣分类 </p>     
                <p></p>
            </div>
            {/* scroll */}
            <div className="scrollNav">
                <div className="scrollIn">
                 {
                     GoodsList.goodsData&&GoodsList.goodsData.map((item,index)=>{
                     return <p key={index} className={good.curIndex == index ?'actives':''} 
                             onClick={()=>{good.setIndex(index)
                                console.log(item)
                                GoodsList.getGoodsData(item.id)
                                getGoodsContData.getGoodsContData({page:1,size:1000,categoryId:item.id})
                            }
                            
                            }>{item.name}</p>
                     })
                 }

                </div>
            </div>

            {/* 内容 */}
            <div className="desc">          
                 <div className="categoryDetail">
                    <p>{GoodsList.twocontName}</p>
                    <p>{GoodsList.twofrontdesc}</p>
                 </div>
            </div>
             
             {/* 对应数据列表 */}
             <div className="goodList">
                 {
                     getGoodsContData.cateGoodsData&&getGoodsContData.cateGoodsData.map((item,index)=>{
                        return <div>
                                    <li>
                                        <p className="goodsImg">
                                            <img src={item.list_pic_url}/>
                                        </p>
                                        <p>{item.name}</p>
                                        <p>{item.retail_price}</p>
                                    </li>
                            </div>
                     })
                    
                 }
                

             </div>



        </div>
    )
}

export default LiveHome;