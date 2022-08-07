import { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
  给类组件提供状态
*/
class App extends Component {
  state = {
    count: 0,
    list: ['张三', '李四', '王五'],
  }
  render() {
    return (
      <div>
        <h1>我是根组件</h1>
        <div>{this.state.count}</div>
        <ul>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={this.clickFn}>+1</button>
        <button onClick={this.add}>增加数据</button>
      </div>
    )
  }
  /* 
    vue：
      vue会通过es5的语法Object.defineProperty()  vue3.0 会通过es6的proxy语法 监测到数据的改变，，，当数据改变的时候，vue会帮助我们自动更新DOM
      使用vue的时候，只需要直接修改数据即可。
      
    react: 
      react并不会去监听数据的变化，，，所以直接修改数据，react不知道。DOM就不会自动更新。
      react提供了一个方法，，，setState
      这个方法有两个作用：1.修改state的值 2. 更新DOM
    
    结论：
      1. react中不能直接修改state中的数据
      2. react中必须使用setState去修改数据。
  
  */
  clickFn = () => {
    // console.log(this.state.count)
    // this.state.count++
    // console.log(this.state.count)

    this.setState({
      count: this.state.count + 1,
    })
  }

  add = () => {
    this.setState({
      list: [...this.state.list, '赵六'],
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
