import { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
  给类组件提供状态
*/
class App extends Component {
  state = {
    count: 0,
    msg: 'hello',
    user: {
      name: 'zs',
      age: 18,
    },
    list: ['张三', '李四', '王五'],
  }
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>
          {this.state.count} - {this.state.msg}
        </div>
        <div>
          {this.state.user.name} - {this.state.user.age}
        </div>
        <div>{this.state.list}</div>
        <button onClick={this.clickFn}>修改</button>
      </div>
    )
  }

  clickFn = () => {
    this.setState({
      count: 1,
      msg: 'world',
      user: {
        ...this.state.user,
        name: 'ls',
      },
      list: this.state.list.filter((item) => item !== '李四'),
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
