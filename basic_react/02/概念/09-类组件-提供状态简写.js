import { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
  给类组件提供状态
*/
class App extends Component {
  // constructor() {
  //   super()
  //   // 给this增加一个属性 state
  //   this.state = {
  //     msg: 'hello',
  //     count: 0,
  //   }
  // }
  state = {
    msg: 'hello',
    count: 0,
  }
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.msg}</div>
        <div>{this.state.count}</div>
        <button>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
