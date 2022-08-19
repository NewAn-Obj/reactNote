import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
// import { check_All } from '../store/actions/todos'
const TodoMain = () => {
  const list = useSelector((state) => state.todos)
  const type = useSelector((state) => state.filter)
  // const dispatch = useDispatch()
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
  // const checkAll = (e) => {
  //   dispatch(check_All(e.target.checked))
  // }
  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={list.every((item) => item.done)}
        // onChange={(e) => checkAll(e)}
      />
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
