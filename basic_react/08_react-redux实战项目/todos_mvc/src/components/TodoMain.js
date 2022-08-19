import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
const TodoMain = () => {
  const list = useSelector((state) => state.todos)
  const type = useSelector((state) => state.filter)
  // console.log(type)
  // console.log('list', list)
  let showList = []
  switch (type) {
    case 'All':
      showList = list
      break
    case 'Active':
      showList = list.filter((item) => item.done === false)
      break

    case 'Completed':
      showList = list.filter((item) => item.done === true)
      break
    default:
      break
  }
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {showList.map((item) => {
          // console.log(item.id)
          return <TodoItem key={item.id} item={item}></TodoItem>
        })}
      </ul>
    </section>
  )
}

export default TodoMain
