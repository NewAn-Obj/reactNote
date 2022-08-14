import React, { Component } from 'react'

export default class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  }

  move = (e) => {
    console.log(e.pageX, e.pageY)
    this.setState({
      x: e.pageX,
      y: e.pageY,
    })
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.move)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.move)
  }

  render() {
    return this.props.children(this.state)
  }
}
