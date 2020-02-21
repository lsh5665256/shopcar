import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Button, Form, Icon  } from '@tarojs/components'
import './index.scss'
import { connect } from '@tarojs/redux'
import {getSignListAction} from '../../../actions/sign'




type PageStateProps = {
  list: Array<{
    [key:string]: any
  }>
}
type PageDispatchProps = {
  getSignList: (params) => void
}
type PageOwnProps = {}

type PageState = {
  status: number,
  page: number,
  pageSize: number
}


type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface SignList {
  props: IProps;
}

@connect(state=>{
  return {
    list: state.sign.list
  }
}, dispatch=>{
  return {
    getSignList: (params)=>{
      dispatch(getSignListAction(params))
    }
  }
})
class SignList extends Component<{}, PageState> {
  config: Config = {
    navigationBarTitleText: '面试列表'
  }

  state={
    status: 2,
    page: 1,
    pageSize: 10
  }

  componentDidShow () {
    let params = {...this.state};
    if (params.status === 2){
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide () { }


  render () {
    return (
      <View className='wrap'>
        <View>
          <text>未开始</text>
          <text>已打卡</text>
          <text>已放弃</text>
          <text>全部</text>
          
        </View>  
           {
             this.props.list.map((item,index)=>{
             return <View>{item.phone}  {item.address}  </View>
            //  <View>{item.address}</View>
             }))
           }    
      </View>
    )
  }
}


export default SignList as ComponentClass;
