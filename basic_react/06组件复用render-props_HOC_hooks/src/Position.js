// 需求：在网页中，实时的显示当前鼠标的位置
import React, { Component } from 'react'
// vue2 没有升 vue3之前， mixins就是最主要的复用方式
export default class Position extends Component {
  render() {
    return (
      <div>
        <h3>当前鼠标的位置</h3>
        <div>
          ({this.props.x}, {this.props.y})
        </div>
      </div>
    )
  }
}
