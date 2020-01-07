import React, { useEffect } from 'react';
import useStore from '../utils/useStore'
import { useObserver } from 'mobx-react-lite'

const Classify: React.FC = () => {
    let store = useStore();

    useEffect(() => {
        store.cart.classification()
    }, [])

    console.log('store11111111', store.cart)
    return useObserver(() => (
        <div className="classify">
            <div className="searchWrap">
                <input type="text" placeholder="搜索商品,共239款好物" />
            </div>
            <div className="content">
                <div className="left">
                    {
                        store.cart.list && store.cart.list.map((item, index) => {
                            return <p className={store.cart.currentIndex === index ?"active1":""} 
                            onClick={() =>store.cart.setCurIndex(item.id,index) } key={index}>{item.name}</p>
                        })
                    }
                </div>
                <div className="right">
                    <div className="topBox">
                        {/* <p style={{backgroundImage:`url("http://yanxuan.nosdn.127.net/e8bf0cf08cf7eda21606ab191762e35c.png")`}}></p> */}
                        <p style={{backgroundImage:`url("${store.cart.url}")`}}></p>
                    </div>
                    <div className="title">居家分类</div>
                    <div className="image-text">
                        {
                            store.cart.checkList.length ?

                            store.cart.checkList.map((item:any,index:number)=>{
                                return  <div key={index} className="item">
                                            <img src={item.wap_banner_url} alt=""/>
                                            <p key={index}>{item.name}</p>
                                        </div>
                            }):
                            store.cart.currentList.map((item:any,index:number)=>{
                                return <div key={index} className="item">
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