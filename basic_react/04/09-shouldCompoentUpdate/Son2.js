import React, { Component } from 'react'

export default class Son2 extends Component {
  render() {
    console.log('son2 render...')
    return (
      <div>
        <h3>我是Son2组件---{this.props.car}</h3>
      </div>
    )
  }
}
