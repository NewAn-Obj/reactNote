import React, { useState, memo, useMemo } from 'react'

const App = () => {
  const [count, setCount] = useState(5)
  const [money, setMoney] = useState(1000)

  // 记忆的函数=useCallback(函数, [依赖])
  // 只要依赖项不变，这个函数就不会变化，如果依赖项变了，这个函数就会变化
  const help = useMemo(() => {
    return () => {
      setCount(count + 1)
    }
  }, [count])
  return (
    <div>
      <h1>根组件--{count}</h1>
      <div>金钱：{money}</div>
      <button onClick={() => setCount(count - 1)}>打豆豆</button>
      <button onClick={() => setMoney(money + 100)}>挣钱</button>
      <hr />
      {count > 0 ? <DouDou help={help} count={count}></DouDou> : '豆豆被打死了'}
    </div>
  )
}

const DouDou = memo(({ count, help }) => {
  console.log('豆豆更新了')
  return (
    <div>
      <h3>豆豆组件被打了{count}</h3>
      <button onClick={help}>续命</button>
    </div>
  )
})

export default App
