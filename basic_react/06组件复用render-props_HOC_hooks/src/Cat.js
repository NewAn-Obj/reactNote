import React, { Component } from 'react'
import img from './1.gif'
export default class Cat extends Component {
  render() {
    return (
      <div>
        <img
          src={img}
          style={{
            left: this.props.x,
            top: this.props.y,
            position: 'absolute',
          }}
          alt=""
        />
      </div>
    )
  }
}
