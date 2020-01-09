import React, { useEffect } from 'react';
import useStore from '../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import {useHistory} from "react-router-dom"

const Classify: React.FC = (props) => {
    let store = useStore();
    let history = useHistory()
    useEffect(() => {
        store.classify.classification()
    }, [])
    let goDetail =(id:number)=>{
        // history.push({pathname:"/detail",state:id})
        history.push({pathname:`/pagecontent/${id}`,state:id})
        store.PageContent.goDetail(id)
        store.PageContent.getTopList(id)
    }
    return useObserver(() => (
        <div className="classify">
            <div className="searchWrap">
                <div className="searchInput" onClick={()=>history.push('/search')}>搜索商品,共239款好物</div>
            </div>
            <div className="content">
                <div className="left">
                    {
                        store.classify.list && store.classify.list.map((item, index) => {
                            return <p className={store.classify.currentIndex === index ?"active1":""} 
                            onClick={() =>store.classify.setCurIndex(item.id,index) } key={index}>{item.name}</p>
                        })
                    }
                </div>
                <div className="right">
                    <div className="topBox">
                        {/* <p style={{backgroundImage:`url("http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png")`}}></p> */}
                        <p style={{backgroundImage:`url("${store.classify.url}")`}}></p>
                        <span>{store.classify.imgText}</span>
                    </div>
                    <div className="title">—— {store.classify.name}分类 ——</div>
                    <div className="image-text">
                        {
                            store.classify.checkList.length ?

                            store.classify.checkList.map((item:any,index:number)=>{
                                return  <div key={index} className="item" onClick = {()=>goDetail(item.id)}>
                                            <img src={item.wap_banner_url} alt=""/>
                                            <p key={index}>{item.name}</p>
                                        </div>
                            }):
                            store.classify.currentList.map((item:any,index:number)=>{
                                return   <div key={index} className="item" onClick = {()=>goDetail(item.id)}>
                                            <img src={item.wap_banner_url} alt=""/>
                                            <p key={index}>{item.name}</p>
                                        </div>
                            })

                        }

                    </div>
                </div>
            </div>
        </div>
    ))
}

export default Classify;