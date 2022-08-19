//todos列表
export default function todos(state = [], action) {
  switch (action.type) {
    case 'GET_LIST':
      return action.list
    case 'ADD_TODO':
      return [...state, action.todo]
    default:
      return state
  }
}
