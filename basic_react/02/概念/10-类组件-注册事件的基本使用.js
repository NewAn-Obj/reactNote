import { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    count: 0,
  }

  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn} onMouseEnter={this.mouseFn}>
          +1
        </button>
        <a href="http://www.baidu.com" onClick={this.clickFn}>
          百度一下
        </a>
      </div>
    )
  }

  clickFn(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log('点击事件')
  }
  mouseFn() {
    console.log('鼠标进入事件')
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
