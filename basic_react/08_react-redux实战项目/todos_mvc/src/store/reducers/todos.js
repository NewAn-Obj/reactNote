//todos列表
export default function todos(state = [], action) {
  switch (action.type) {
    case 'GET_LIST':
      return action.list
    case 'ADD_TODO':
      return [action.todo, ...state]
    case 'DEL_TODO':
      return state.filter((item) => item.id !== action.id)
    case 'CHANGE_TODO':
      return state.map((item) => {
        if (item.id === action.todo.id) {
          return { ...item, done: !item.done }
        } else {
          return { ...item }
        }
      })
    // case 'EDIT_TODO':
    //   return state.map((item) => {
    //     if (item.id === action.todo.id) {
    //       return { ...item, name: action.name }
    //     } else {
    //       return { ...item }
    //     }
    //   })
    default:
      return state
  }
}
