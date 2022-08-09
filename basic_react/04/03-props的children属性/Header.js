import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div
        className="header"
        style={{
          height: 40,
          backgroundColor: 'skyblue',
          lineHeight: '40px',
          textAlign: 'center',
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
