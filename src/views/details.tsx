import React, { useEffect } from "react";
import { useObserver } from "mobx-react-lite"
import useStore from "../utils/useStore"
import style from "./details.module.scss"
import "../utils/font_7k8dxcievs/iconfont.css"

// import { Carousel } from 'antd';
import { Carousel, WingBlank } from 'antd-mobile';

interface propsType {
    location: boolean,
    state: boolean
}
const Details: React.FC<propsType> = (props: any) => {

    let store = useStore();
    let { details } = store;
    useEffect(() => {
        details.setList(props.location.state.id)
    }, [])


    return useObserver(() => {
        let { info, gallery, attribute, issue } = details.data;
        return <>
            <div className={style.details}>
                <div className={style.header}>
                    <div onClick={()=>{
                        window.history.go(-1)
                    }}><i className="iconfont icon-back"></i></div>
                    <div>{info.name}</div>
                    <div></div>
                </div>
                <div className={style.main}>
                    {/* 轮播图插件 */}
                    <WingBlank
                    style={{margin:0}}
                    >
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {gallery.map((item:any,index:any) => {
                                return    <img
                                        key={index}
                                        src={item.img_url}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                    />
                                    })}
                        </Carousel>
                    </WingBlank>
                    <div className={style.list}>
                        <div>
                            <p>★</p>
                            <p>30天无忧退货</p>
                        </div>
                        <div>
                            <p>★</p>
                            <p>48小时快速退款</p>
                        </div>
                        <div>
                            <p>★</p>
                            <p>满88元免费邮费</p>
                        </div>
                    </div>
                    <div className={style.price}>
                        <div>{info.name}</div>
                        <div>{info.goods_brief}</div>
                        <div>￥{info.retail_price}</div>
                    </div>
                    <div className={style.specification}>
                        <div></div>
                        <div>
                            <span>x</span>
                            <span>0</span>
                        </div>
                        <div>
                            选中规格
                        <i className="iconfont icon-arrow-right"></i>
                        </div>
                    </div>
                    <div className={style.introduce}>
                        <p className={style.title}> 商品参数 </p>
                        <div className={style.content}>
                            {
                                attribute.map((item,index)=>{
                                    return <div key={index}>
                                                <p>{item.name}</p>
                                                <p>{item.value}</p>
                                            </div>
                                })
                            }
                        </div>
                    </div> 
                    <div dangerouslySetInnerHTML={{__html:info.goods_desc}} className={style.Img}>
                    </div> 
                    <div className={style.issue}>
                        <div className={style.title}>
                            常见问题
                        </div>
                        {
                            issue.map((item,index)=>{
                                return <div key={index} className={style.wrap}>
                                            <div>
                                                <span>√</span>
                                               {item.question} 
                                            </div>  
                                            <div>
                                                {item.answer}
                                            </div>
                                       </div>
                            })
                        }
                    </div>
                    <div className={style.everybody}>
                        <div className={style.titles}>
                            大家都在看
                        </div>
                        <div className={style.ImgList}>
                            {
                            details.list.map((item,index)=>{
                                return <div key={index} className={style.ImgItem}>
                                        <div>
                                            <img src={item.list_pic_url} alt=""/>
                                        </div>
                                        <div className={style.name}>
                                            <div>
                                                {item.name}
                                            </div>
                                            <div>
                                                ￥{item.retail_price}元
                                            </div>
                                        </div>
                                       </div>
                            })
                            }
                        </div>
                    </div>
                </div>
                <div className={style.footer}>
                    <div>
                        <i className="iconfont icon-xingxing"></i>
                    </div>
                    <div>
                        <i className="iconfont icon-add-cart"></i>
                        <span>{details.goodsCount}</span>
                    </div>
                    <div>加入购物车</div>
                    <div>立即购买</div>
                </div>
            </div>
        </>
    })
}

export default Details

{/* <Carousel autoplay>
   {gallery.map((item, index) => {
    return <div key={index} >
        <img className={style.swiper} src={item.img_url} alt="" />
    </div>
})}                     
</Carousel> */}
