import React, { useState, useEffect } from 'react'
import ReactDom from 'react-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>根组件</h3>
      <div>我被点击了{count}次</div>
      <button onClick={() => setCount(count + 1)}>打豆豆</button>

      {count < 5 ? <Child count={count}></Child> : '豆豆被打死了'}
    </div>
  )
}

function Child({ count }) {
  // 开启定时器，打印
  // 参数1： 函数
  // 参数2： 依赖
  // componentDidMount + componentWillUnMount
  useEffect(() => {
    console.log('effect执行了')
    let timer = window.setInterval(() => {
      console.log('我是豆豆，别打我')
    }, 1000)
    // 返回的函数称为清理副作用的函数
    // 这个函数会在组件销毁的时候执行。componentWillUnmount
    return () => {
      console.log('清理副作用')
      clearInterval(timer)
    }
  }, [])
  return (
    <div>
      <h3>我是子组件---{count}</h3>
    </div>
  )
}

ReactDom.render(<App></App>, document.getElementById('root'))

/* 
  1. useEffect的语法
  
  useEffect(() => {})  // 组件第一次渲染以及每一次更新都会执行

  useEffect(() => {}, []) // 组件第一次渲染会执行

  useEffect(() => {}, [count]) // 组件第一次渲染会执行，并且count发生变化就会执行

  2. 清理副作用的语法

  // 当组件销毁的时候，以及每次回调函数执行之前，都会清理副作用
  useEffect(() => {
    // xxxxx
    return () => {
      // 清理副作用
    }
  })


  // 当组件销毁的时候，清理副作用
  useEffect(() => {
    // xxxxx
    return () => {
      // 清理副作用
    }
  }, [])
*/
