import { useDispatch } from 'react-redux'
import { del_todo, change_todo } from '../store/actions/todos'
export default function TodoItem({ item }) {
  //   console.log(item.name)
  const dispatch = useDispatch()
  const delTodo = (id) => {
    dispatch(del_todo(id))
  }
  const changeDone = (id, done) => {
    dispatch(change_todo(id, done))
  }
  return (
    <li className={item.done ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={() => changeDone(item.id, item.done)}
        />
        <label>{item.name}</label>
        <button className="destroy" onClick={() => delTodo(item.id)} />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  )
}
