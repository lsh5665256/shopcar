import React from 'react'

//引入数据库
import store from '../store/index'

//创建context
export default React.createContext(store)