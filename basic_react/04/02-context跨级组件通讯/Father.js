import React, { Component } from 'react'
import Son from './Son'
export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>我是父组件</h3>
        <Son></Son>
      </div>
    )
  }
}
