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
    pageSize: 10,
    curIndex:0,
    list:[{
      text:"未开始",
      id:1
    },{
      text:"已打卡",
      id:2
    },{
      text:"已放弃",
      id:3
    },{
      text:"全部",
      id:4
    }]
  }

  componentDidShow () {
    let params = {...this.state};
    if (params.status === 2){
      delete params.status;
    }
    this.props.getSignList(params);
  }

  componentDidHide () { }

  setCurIndex = (index) => {
    console.log('index',index)
    this.setState({
      // curIndex : index
    })
    // this.setState({
    //   curIndex :index
    // })
  }
  render () {
    return (
      <View className='wrap'>
          <View className="header">
            {
              this.state.list.map((item,index)=>{
                   return  <View key={index}>
                          <Text  
                            onClick={()=>this.state.curIndex = index}
                            className={this.state.curIndex == index ?'active':""}>{item.text}
                     </Text></View>
              })
            }
          </View>
          <View className="content">
            {
              this.props.list.map((item, index) => {
                  return <View className="item" key={index} >
                        <View className="title">
                            <Text>123</Text>
                            <Text>未开始</Text>
                        </View>
                        <View className="text">北京市朝阳区东方南路与东三环北路辅路交叉口东北角</View>
                        <View className="time">
                            <Text>面试时间：2020-02-22 00:00</Text>
                            <Text>未提醒</Text>
                        </View>
                  </View>
              })
            }
                
          </View>
      </View>
    )
  }
}


export default SignList as ComponentClass;
