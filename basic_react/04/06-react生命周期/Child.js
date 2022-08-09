import React, { Component } from 'react'

export default class Child extends Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('别打我，我怕~')
    }, 1000)
  }
  render() {
    console.log('豆豆的render')
    return (
      <div>
        <h3>我是豆豆组件，我被打了{this.props.count}次</h3>
      </div>
    )
  }
  componentDidUpdate() {
    console.log('豆豆的componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('豆豆被打死了')
    clearInterval(this.timer)
  }
}
