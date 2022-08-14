// 作用：用于提供鼠标的位置的逻辑，不负责去渲染结构
// 需求：在网页中，实时的显示当前鼠标的位置
import { Component } from 'react'
// vue2 没有升 vue3之前， mixins就是最主要的复用方式
export default class Position extends Component {
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
    return this.props.render(this.state)
  }
}
