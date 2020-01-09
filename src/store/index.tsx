import React from 'react'
// 导入store
import classify from './module/classify'
import PageContent from './module/PageContent'
import search from './module/search'

export default {
    classify: new classify(),
    PageContent:new PageContent(),
    search:new search()
}