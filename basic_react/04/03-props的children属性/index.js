import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Dialog from './Dialog'
class App extends Component {
  render() {
    return (
      <div>
        <h1>children属性</h1>
        <Header>哈哈哈</Header>
        <Header>登录</Header>

        <hr />
        <Dialog title={<h4>温馨提示</h4>}>
          <div>我是内容</div>
        </Dialog>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
