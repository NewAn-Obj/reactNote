import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建react元素
const element = React.createElement('ul', { className: 'list' }, [
  React.createElement('li', null, '香蕉'),
  React.createElement('li', null, '橘子'),
  React.createElement('li', null, '苹果'),
])

// 3. 渲染
ReactDOM.render(element, document.getElementById('root'))
