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
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      money: 200,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 2,
    })
    console.log(this.state.count)
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
