/* 
  // 1. 导入React和ReactDOM
  // 2. 创建react元素  1. React.createElement  2. jsx
  // 3. 渲染
*/
import ReactDOM from 'react-dom'

const element = <div id="box">
  <h1>我是标题</h1>
  <ul>
    <li>哈哈</li>
    <li>嘻嘻</li>
  </ul>
</div>

ReactDOM.render(element, document.getElementById('root'))