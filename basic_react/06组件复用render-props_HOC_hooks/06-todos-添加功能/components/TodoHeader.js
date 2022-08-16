import { useState } from 'react'

const TodoHeader = ({ addTodo }) => {
  const [name, setName] = useState('')

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      // 子传父
      addTodo(name)
      setName('')
    }
  }

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
      />
    </header>
  )
}

export default TodoHeader
