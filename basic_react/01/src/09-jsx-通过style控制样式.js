import ReactDOM from 'react-dom'

const color = 'red'
const bgColor = 'pink'
// style标签，如果是长度单位，可以使用数字类型，省略px
const element = (
  <div>
    <h1 style={{ backgroundColor: bgColor, width: 400, height: 400 }}>
      通过style控制样式
    </h1>
    <p style={{ color }}>是金子总会花光的</p>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
