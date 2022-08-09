import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Father from './Father'
// 1. createContext方法能够得到Provider和Consumer
// 2. Provider包裹根元素，Provider组件就是最大的根元素
const { Provider, Consumer } = React.createContext()
export { Consumer }

class App extends Component {
  state = {
    color: 'green',
    bgColor: 'red',
  }
  changeColor = (color) => {
    this.setState({ color })
  }

  render() {
    const { color, bgColor } = this.state
    return (
      <Provider value={{ color, bgColor, changeColor: this.changeColor }}>
        <div>
          <h1>我是App组件</h1>
          <Father></Father>
        </div>
      </Provider>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
