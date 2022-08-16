import React, { useState, useContext } from 'react'
const Context = React.createContext()
const App = () => {
  const [color, setColor] = useState('red')
  return (
    <Context.Provider value={color}>
      <div>
        <h1>我是根组件</h1>
        <div>颜色：{color}</div>
        <button onClick={() => setColor('yellow')}>修改</button>
        <Father></Father>
      </div>
    </Context.Provider>
  )
}

const Father = () => {
  return (
    <div>
      <h3>我是父组件</h3>
      <Child></Child>
    </div>
  )
}

const Child = () => {
  const color = useContext(Context)
  return (
    <div>
      <h5>我是子组件--{color}</h5>
    </div>
  )
}

export default App
