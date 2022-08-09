import React, { Component } from 'react'

export default class Son1 extends Component {
  render() {
    console.log('son1 render...')
    return (
      <div>
        <h3>我是Son1组件---{this.props.money}</h3>
      </div>
    )
  }

  shouldComponentUpdate(nextProps) {
    // console.log(this.props)
    // console.log(nextProps)
    // 返回true或者false
    if (this.props.money === nextProps.money) {
      return false
    }
    return true
  }
}
