import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo from './Demo'
import Hello from './Hello'
class App extends Component {
  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        {/* 1. 通过属性的方式，给组件提供数据 */}
        {/* 2. 子组件中通过参数props就能够获取到数据 */}
        <Demo car="小黄车" money={100} check={true}></Demo>

        <Hello car="小黄车" money={100} check={true}></Hello>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
