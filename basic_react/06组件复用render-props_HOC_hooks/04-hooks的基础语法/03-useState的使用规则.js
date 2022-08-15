import React, { useState } from 'react'
import ReactDom from 'react-dom'

function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(1000)

  return (
    <div>
      <h3>我是根组件</h3>
      <div>我点击了{count}次</div>
      <div>我的金钱：{money}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setMoney(money + 100)}>加钱</button>
    </div>
  )
}

ReactDom.render(<App></App>, document.getElementById('root'))
