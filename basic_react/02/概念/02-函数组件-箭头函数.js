import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => <div>我是Hello组件</div>

const element = (
  <div>
    <h1>函数组件</h1>
    {/* 使用组件 */}
    <Hello></Hello>
    <Hello></Hello>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
