import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
class App extends Component {
  state = {
    money: 1000,
  }
  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        <div>{this.state.money}</div>

        <Child money={this.state.money} buy={this.buy}></Child>
      </div>
    )
  }
  // 类实例方法
  buy = (money) => {
    this.setState({
      money: +(this.state.money - money).toFixed(2),
    })
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
