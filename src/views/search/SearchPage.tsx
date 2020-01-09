import React,{useEffect} from 'react'
import {useObserver} from 'mobx-react-lite'
import styles from './index.module.scss'
import {useHistory} from 'react-router-dom'
import useStore from '../../utils/useStore'
const Search : React.FC =  ()=>{
    let history = useHistory()
    let store = useStore()
    let {search} = store
    useEffect(()=>{
        search.search()
    },[])
    return useObserver(()=>(
        <div className={styles.search}>
            <div className={styles.input}>
                <div className={styles.back} onClick={()=>history.goBack()}>&lt;</div>
                <div className={styles.icon}>
                    <i className='iconfont icon-search'></i>
                    <input type="text" placeholder={search.keyword}/>
                </div>
                <div className={styles.cancelSearch}>取消</div>
            </div>
            <div className={styles.historyBox}>
                {
                    search.historyKeywordList.map((item:any,index:number)=>{
                        return <span>{item}</span>
                    })
                }
            </div>
            <div className={styles.hotsearch}>
                <div className={styles.title}>热门搜索</div>
                <div className={styles.searchWrap}>
                    {
                        search.hotKeywordList.map((item:any,index:number)=>{
                            return <span className={item.is_hot == 1 ? styles.active:''} 
                             key={index}>{item.keyword}</span>
                        })
                    }
                </div>
            </div>
        </div>
    ))
}   
export default Search
