import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/* 
  ref的使用步骤
  1. 通过React.createRef()创建一个ref
  2. 通过ref={this.textRef}关联给某个DOM对象或者组件
  3. 通过this.txtRef.current属性就可以获取到对应的dom
*/
class Form extends Component {
  render() {
    return <div>form组件</div>
  }
  validate() {
    console.log('我会进行校验')
  }
}

class App extends Component {
  txtRef = React.createRef()
  formRef = React.createRef()

  render() {
    return (
      <div>
        <h1>常见的受控组件</h1>
        <h3>文本框</h3>
        <input type="text" ref={this.txtRef} />
        <Form ref={this.formRef}></Form>
        <button onClick={this.clickFn}>获取值</button>
      </div>
    )
  }
  clickFn = () => {
    console.log(this.txtRef.current.value)
    this.formRef.current.validate()
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
