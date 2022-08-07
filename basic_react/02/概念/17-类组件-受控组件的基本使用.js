import { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
  给类组件提供状态
*/
class App extends Component {
  state = {
    msg: 'hello',
  }
  render() {
    return (
      <div>
        <h1>受控组件</h1>
        {/* input框值通过value属性进行控制 */}
        <input
          type="text"
          value={this.state.msg}
          onChange={this.handleChange}
        />
      </div>
    )
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      msg: e.target.value,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
