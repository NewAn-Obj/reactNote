// footer组件过滤todos列表功能
export default function filter(state = 'All', action) {
  if (action.type === 'CHANGE_LIST') {
    return action.form
  }
  return state
}
