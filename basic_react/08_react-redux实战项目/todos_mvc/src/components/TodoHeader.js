import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/actions/todos'

const TodoAdd = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const onKeyUp = (e) => {
    // console.log(e.code)
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      // console.log('添加todo')
      dispatch(addTodo(name))
      setName('')
    }
    if (e.code === 'Escape') {
      return setName('')
    }
  }
  // onKeyUp()
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={onKeyUp}
        onBlur={() => setName('')}
      />
    </header>
  )
}

export default TodoAdd
