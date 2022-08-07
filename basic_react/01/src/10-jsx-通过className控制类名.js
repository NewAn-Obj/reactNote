import ReactDOM from 'react-dom'
import './index.css'
// style标签，如果是长度单位，可以使用数字类型，省略px
const isRed = true
const element = (
  <div>
    <h1 className={`${isRed ? 'red' : ''} box`}>通过style控制样式</h1>
    {/* <p className="red">是金子总会花光的</p> */}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
