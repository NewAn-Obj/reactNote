import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(100)

  useEffect(() => {
    console.log('count', count)
    console.log('money', money)
  }, [count, money])

  return (
    <div>
      <h3>根组件</h3>
      <div>我被点击了{count}次</div>
      <div>我的钱：{money}</div>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <button onClick={() => setMoney(money + 100)}>加钱</button>
    </div>
  )
}

ReactDom.render(<App></App>, document.getElementById('root'))
