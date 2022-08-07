/* 
  1. 导入react 和 react-dom 
  2. 通过react的api创建react元素  虚拟DOM
  3. 把react元素渲染到页面中 
*/
import React from 'react'
import ReactDOM from 'react-dom'

// <h1 id="box">我是内容</h1>
// 参数1：标签的名字 h1 p div
// 参数2：标签的属性 对象
// 参数3：标签的内容
const element = React.createElement(
  'div',
  { id: 'demo', className: 'aa' },
  '我是内容'
)

// 参数1：渲染的react元素
// 参数2：需要渲染到哪个容器中
ReactDOM.render(element, document.getElementById('root'))

// <div id="demo" class="aa">我是一个盒子</div>
