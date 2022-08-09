import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Son from './Son'
class App extends Component {
  state = {
    car: {
      brand: 'abc',
      price: 100,
    },
  }
  render() {
    return (
      <div>
        <h3>props校验</h3>
        <Son list={[]} car={this.state.car}></Son>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
