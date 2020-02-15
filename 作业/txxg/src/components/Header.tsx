import React, {useState, useEffect} from 'react'
import {TotalType} from '../utils/types'

import styles from './Header.module.scss'
const Hospital = (props: {total: TotalType})=>{
    // console.log('total...', props.total)
    let total = props.total
    return <>
        <p className={styles.abort}>统计截止 {total ? total.lastUpdateTime :''}</p>

       <div className={styles.box}>
       {
            total ?
            <div className={styles.showAdd}>
                <div className={styles.item} style={{background:"#fdf1f1"}}>
                    <p>较上日<b>+{total.chinaAdd.confirm}</b></p>
                    <h4 className={styles.h41}>{total.chinaTotal.confirm}</h4>
                    <div style={{background:'#ffe0e0'}}>全国确诊</div>
                </div>
                <div className={styles.item} style={{background:"#fff7ed"}}>
                    <p>较上日<b>+{total.chinaAdd.suspect}</b></p>
                    <h4 className={styles.h42}>{total.chinaTotal.suspect}</h4>
                    <div style={{background:'#ff961e'}}>疑似病例</div>
                </div>
                <div className={styles.item} style={{background:"#f1f8f4"}}>
                    <p>较上日<b>+{total.chinaAdd.heal}</b></p>
                    <h4 className={styles.h43}>{total.chinaTotal.heal}</h4>
                    <div style={{background:'#dfeee6'}}>治愈人数</div>
                </div>
                <div className={styles.item} style={{background:"#f8f8f8"}}>
                    <p>较上日<b>+{total.chinaAdd.dead}</b></p>
                    <h4 className={styles.h44}>{total.chinaTotal.dead}</h4>
                    <div style={{background:'#eeeeee'}}>死亡人数</div>   
                </div>
            </div>
            :''
        }
       </div>
    </>
}


export default Hospital
