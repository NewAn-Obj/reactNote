import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0,
    money: 100,
  }
  render() {
    return (
      <div>
        <h1>app组件</h1>
        <div>
          点击次数：{this.state.count}--{this.state.money}
        </div>
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
  handleClick = () => {
    // state: 保证是最新的state，上一次的state
    this.setState((state) => {
      return {
        count: state.count + 1,
      }
    })
    this.setState((state) => ({ count: state.count + 1 }))
    this.setState((state) => ({ count: state.count + 1 }))
    this.setState((state) => ({ count: state.count + 1 }))
    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count)
      }
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
