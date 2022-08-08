import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Demo from './Demo'
import Hello from './Hello'
class App extends Component {
  state = {
    money: 100,
    user: { name: 'zs', age: 18 },
  }
  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        <div>父组件的金钱：{this.state.money}</div>
        <button onClick={this.buy}>买烟</button>
        <Demo
          name="zs"
          money={this.state.money}
          flag={true}
          fn={() => {
            console.log('fn函数')
          }}
          list={[1, 2, 3]}
          user={this.state.user}
          content={<div>我是内容</div>}
        ></Demo>

        <hr />
        <Hello money={100}></Hello>
      </div>
    )
  }
  buy = () => {
    this.setState({
      money: this.state.money - 10,
    })
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
