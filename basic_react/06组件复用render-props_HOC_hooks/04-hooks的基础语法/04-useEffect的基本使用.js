import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

function App() {
  const [count, setCount] = useState(0)

  // 参数是一个函数， 这个函数会在 组件渲染好的时候执行（componentDidMount + componentDidUpdate）
  useEffect(() => {
    document.title = `当前点击了${count}次`
    console.log('我执行了吗')
  })

  return (
    <div>
      <h3>我是根组件</h3>
      <div>我点击了{count}次</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}

ReactDom.render(<App></App>, document.getElementById('root'))
