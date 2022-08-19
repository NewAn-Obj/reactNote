import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

import './styles/base.css'
import './styles/index.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getList } from './store/actions/todos'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getList())
  }, [dispatch])
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </section>
  )
}

export default App
