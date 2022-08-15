import React, { useState } from 'react'
import ReactDom from 'react-dom'

function App() {
  // 参数：初始值
  // 返回值：是一个数组，长度为2
  // 数组下标0： 就是这个状态  数组下标1：修改这个状态的函数
  // setState
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(1000)

  const [user, setUser] = useState({
    name: 'zs',
    age: 18,
  })
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
