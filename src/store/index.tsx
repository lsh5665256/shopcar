import React from 'react'
// 导入store
import classify from './module/classify'
import PageContent from './module/PageContent'

export default {
    classify: new classify(),
    PageContent:new PageContent()
}