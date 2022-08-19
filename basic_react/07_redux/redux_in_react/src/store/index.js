import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
/**
 * 1. 安装 yarn add react-thunk
 * 2.引入thunk
 * 3.使用中间件thunk
 */
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

export default store
