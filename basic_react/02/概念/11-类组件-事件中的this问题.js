import { Component } from 'react'
import ReactDOM from 'react-dom'
class App extends Component {
  state = {
    count: 0,
  }

  render() {
    console.log('render', this)
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>+1</button>
      </div>
    )
  }

  clickFn() {
    console.log(this)
    console.log('点击事件')
    console.log(this.state.count)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
