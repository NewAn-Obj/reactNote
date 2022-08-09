import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Jack from './Jack'
import Rose from './Rose'
class App extends Component {
  // 1. 状态提升到父组件
  state = {
    msg: '',
  }
  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        <Jack say={this.changeMsg}></Jack>
        {/* 2. 把状态给子组件显示 */}
        <Rose msg={this.state.msg}></Rose>
      </div>
    )
  }
  changeMsg = (msg) => {
    this.setState({
      msg,
    })
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
