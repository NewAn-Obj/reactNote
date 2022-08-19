import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
/**
 * 1. 安装 yarn add react-thunk
 * 2.引入thunk
 * 3.使用中间件thunk
 */
import thunk from 'redux-thunk'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
