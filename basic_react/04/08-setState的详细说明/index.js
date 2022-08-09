import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    isShowInput: false,
  }
  inputRef = React.createRef()
  // 点击按钮，显示输入框并且，让输入框有焦点
  render() {
    return (
      <div>
        <h1>app组件</h1>

        {this.state.isShowInput ? (
          <input type="text" placeholder="请输入你的评论" ref={this.inputRef} />
        ) : (
          <button onClick={this.handleClick}>发表评论</button>
        )}
      </div>
    )
  }
  handleClick = () => {
    this.setState(
      {
        isShowInput: true,
      },
      () => {
        this.inputRef.current.focus()
      }
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
