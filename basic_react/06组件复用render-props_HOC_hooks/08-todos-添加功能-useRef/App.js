import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

import './styles/base.css'
import './styles/index.css'
import { useState } from 'react'

const todos = [
  { id: 1, name: '学习hooks', done: false },
  { id: 2, name: '学习redux', done: false },
  { id: 3, name: '学习react', done: true },
]
const App = () => {
  const [list, setList] = useState(todos)

  const addTodo = (name) => {
    setList([
      {
        id: Date.now(),
        name,
        done: false,
      },
      ...list,
    ])
  }

  return (
    <section className="todoapp">
      <TodoHeader addTodo={addTodo} />
      <TodoMain list={list} />
      <TodoFooter />
    </section>
  )
}

export default App
