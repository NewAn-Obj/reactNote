import React from 'react'
import ReactDOM from 'react-dom'

/* 
  1. 通过函数创建一个组件即可
    1. 组件的名字必须是大写开头  为了区分html原有的标签
    2. 组件必须返回一段结构
    3. 如果组件不想渲染任何的内容  也需要return null
*/
function Hello() {
  return <div>我是hello组件</div>
}

const element = (
  <div>
    <h1>函数组件</h1>
    {/* 使用组件 */}
    <Hello></Hello>
    <Hello></Hello>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
