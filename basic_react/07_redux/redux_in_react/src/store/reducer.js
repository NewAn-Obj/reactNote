import { combineReducers } from 'redux'

function money(state = 1000, action) {
  if (action.type === 'add_money') return state + action.money
  if (action.type === 'use_money') return state - action.money
  return state
}

function user(state = { name: '张三', age: 18 }) {
  return state
}

const rootReducer = combineReducers({
  money,
  user,
})

export default rootReducer
