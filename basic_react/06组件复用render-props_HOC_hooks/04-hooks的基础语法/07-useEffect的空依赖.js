import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(100)

  // 参数1：回调函数
  // 参数2：数组，useEffect的依赖项，，如果指定了依赖项，，回调函数只会在依赖项发生了改变的时候才会执行。
  // componentDidMount
  useEffect(() => {
    document.addEventListener('click', function () {
      console.log('我点击了')
    })
  }, [])

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
