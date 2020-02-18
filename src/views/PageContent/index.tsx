import React ,{useEffect} from 'react'

import useStore from '../../utils/useStore'
import { useObserver } from 'mobx-react-lite'
import {useHistory} from "react-router-dom"
import styles from './index.module.scss'

const Detail :React.FC =()=>{
    let store = useStore();
    useEffect(() => {
        store.PageContent.goDetail(history.location.state)
        store.PageContent.getTopList(history.location.state,0)
    }, [])
   
    let checkID=(id:number,index:number)=>{
        store.PageContent.goDetail(id)
        store.PageContent.getTopList(id,index)
    }
    let history = useHistory()
    return useObserver(()=>(
        <div className={styles.PageContent}>
            <div className={styles.header}>
                <span onClick = {()=>history.goBack()}>&lt;</span>
                <p>奇趣分类</p>
                <span></span>
            </div>
            <div className={styles.navlist}>
                {
                    store.PageContent.navList.map((item,index)=>{
                        return <span key={index} className={store.PageContent.curIndex == index ?styles.active:''} 
                        onClick={()=>checkID(item.id,index)}>{item.name}</span>
                    })
                }
            </div>
            <div className={styles.main}>
                <div className={styles.categoryDetail}>
                    <p>{store.PageContent.name}</p>
                    <div>{store.PageContent.title}</div>
                </div>
                <div className={styles.content}>
                    {
                        store.PageContent.goodsList.map((item:any,index:number)=>{
                            return <div className={styles.item} key={index} onClick={()=>{}}>
                                <img src={item.list_pic_url} alt=""/>
                                <p>{item.name}</p>
                                <p className={styles.price}>￥{item.retail_price}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    ))
}

export default Detail