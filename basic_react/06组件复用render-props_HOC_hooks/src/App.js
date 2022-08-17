import React, { useMemo, useState } from 'react'

const App = () => {
  const [money, setMoney] = useState(10000)
  const total = useMemo(() => {
    console.log('我执行了吗')
    return Array.from(new Array(money))
      .map((item, index) => index + 1)
      .reduce((prev, item) => prev + item, 0)
  }, [money])
  return (
    <div>
      <h1>根组件-{total}</h1>
      <div>{money}</div>
      <button onClick={() => setMoney(money + 100)}>按钮</button>
    </div>
  )
}

export default App
