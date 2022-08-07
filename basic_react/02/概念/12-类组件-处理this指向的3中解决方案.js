import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 0,
  }

  // 在类组件中render的this不会有问题，，，this就指向当前组件

  // 解决react类组件中注册事件的this问题
  // 1. 把函数调用包裹在箭头函数中
  //      原本写法： onClick={this.clickFn}
  //      写法       onClick={() => this.clickFn()}

  // 2. 使用bind修改this的指向
  //          onClick={this.clickFn}
  //      bind优化   onClick={this.clickFn.bind(this)}

  // 3. class新语法： 类实例语法
  //      onClick={this.clickFn}
  //     把方法写法修改一下   clickFn = () => { console.log(this)  }
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
    console.log('123', this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
