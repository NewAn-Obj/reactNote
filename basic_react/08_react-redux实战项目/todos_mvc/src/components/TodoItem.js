import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { del_todo, change_todo, edit_todo } from '../store/actions/todos'
export default function TodoItem({ item }) {
  //   console.log(item.name)
  const dispatch = useDispatch()
  const delTodo = (id) => {
    dispatch(del_todo(id))
  }
  const changeDone = (id, done) => {
    dispatch(change_todo(id, done))
  }
  const [CurrentId, setCurrentId] = useState('')
  const inputRef = useRef()

  const showEditing = async (id) => {
    await setCurrentId(id)
    //setCurrentId在react里面表现的是异步的，所以在他下面写inputRef.current.focus()无效,可以用async await或用useEffect解决
    inputRef.current.focus()
  }
  // useEffect(() => {
  //   inputRef.current.focus()
  // }, [CurrentId])
  const editTodo = (e, id, name) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      dispatch(edit_todo(e.target.value, id))
      // console.log(e.target.value, id)
      setCurrentId('')
    }
    if (e.code === 'Escape') {
      e.target.value = name
      setCurrentId('')
    }
  }
  return (
    <li
      className={[
        item.done ? 'completed' : '',
        item.id === CurrentId ? 'editing' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={() => changeDone(item.id, item.done)}
        />
        <label onDoubleClick={() => showEditing(item.id)}>{item.name} </label>
        <button className="destroy" onClick={() => delTodo(item.id)} />
      </div>
      <input
        className="edit"
        defaultValue={item.name}
        ref={inputRef}
        onBlur={() => setCurrentId('')}
        onKeyUp={(e) => editTodo(e, item.id, item.name)}
      />
    </li>
  )
}
