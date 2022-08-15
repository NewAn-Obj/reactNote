import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h3>我是根组件</h3>
        <div>我点击了{this.state.count}次</div>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
}

ReactDom.render(<App></App>, document.getElementById('root'))
