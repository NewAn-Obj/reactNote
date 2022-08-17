import React, { useState, memo } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>根组件--{count}</h1>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <Child1 count={count}></Child1>
      <Child2></Child2>
    </div>
  )
}

const Child1 = memo(({ count }) => {
  console.log('child1更新')
  return <div>Child1组件{count}</div>
})

const Child2 = memo(() => {
  console.log('child2更新')
  return <div>Child2组件</div>
})

export default App
