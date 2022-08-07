import ReactDOM from 'react-dom'

// 通过ajax请求获取
const list = ['张飞', '赵云', '马超']

// const list = [<li>张飞</li>, <li>赵云</li>, <li>马超</li>]
// const arr = list.map((item) => <li>{item}</li>)
// console.log(arr)
const element = (
  <div>
    <h1>列表的渲染</h1>
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

/* 
const list = [
  { id: 1, name: '杭州黑马21期', salary: 15000 },
  { id: 2, name: '上海黑马83期', salary: 13800 },
  { id: 3, name: '北京黑马21期', salary: 5000 }
]

  <ul>
    <li>
      <h3>班级：杭州黑马21期</h3>
      <p>工资：15000</p>
    </li>
  </ul>
*/
