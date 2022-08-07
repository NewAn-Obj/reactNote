import { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
  给类组件提供状态
*/
class App extends Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>+1</button>
      </div>
    )
  }
  clickFn = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
