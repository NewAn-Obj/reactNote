// const fn = () => {
//   return <div>123</div>
// }

// const element = <div>{fn()}</div>
// const element1 = fn()
import ReactDOM from 'react-dom'

const list = [
  { id: 1, name: '杭州黑马21期', salary: 15000 },
  { id: 2, name: '上海黑马83期', salary: 13800 },
  { id: 3, name: '北京黑马21期', salary: 5000 },
]
const element = (
  <div style={{ backgroundColor: 'red', width: '500px' }}>
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <h3>班级：{item.name}</h3>
            <p>工资: {item.salary}</p>
          </li>
        )
      })}
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
