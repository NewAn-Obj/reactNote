import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
  state = {
    count: 0,
  }
  render() {
    return (
      <div>
        <h3>根组件</h3>
        <div>我被点击了{this.state.count}次</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          点击
        </button>
      </div>
    )
  }
  componentDidMount() {
    document.title = `点击了${this.state.count}次`
  }
  componentDidUpdate() {
    document.title = `点击了${this.state.count}次`
  }
}

ReactDom.render(<App></App>, document.getElementById('root'))
