import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Parent from './Parent'
class App extends PureComponent {
  // 点击按钮，显示输入框并且，让输入框有焦点
  state = {
    list: ['如花', '凤姐', '乔碧萝'],
    current: 0,
  }
  render() {
    console.log('app render')
    return (
      <div>
        <h1>app组件</h1>
        <div>女朋友：{this.state.list[this.state.current]}</div>
        <button onClick={this.random}>随机</button>
        {/* <Parent></Parent> */}
      </div>
    )
  }
  random = () => {
    this.setState({
      current: parseInt(Math.random() * this.state.list.length),
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.current === nextState.current) {
  //     // 没有变化
  //     return false
  //   } else {
  //     return true
  //   }
  // }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
