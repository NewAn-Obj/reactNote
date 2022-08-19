import { useSelector, useDispatch } from 'react-redux'
import { change_type } from '../store/actions/type'
const TodoFooter = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.todos)
  const count = list.filter((item) => item.done === false).length
  const type = useSelector((state) => state.filter)
  // console.log(type)
  const changetype = (type) => {
    // console.log(type)
    dispatch(change_type(type))
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a
            className={type === 'All' ? 'selected' : ''}
            href="#/"
            onClick={() => changetype('All')}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={type === 'Active' ? 'selected' : ''}
            href="#/active"
            onClick={() => changetype('Active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={type === 'Completed' ? 'selected' : ''}
            href="#/completed"
            onClick={() => changetype('Completed')}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}

export default TodoFooter
