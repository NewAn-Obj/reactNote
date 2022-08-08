import { Component } from 'react'

export default class Hello extends Component {
  render() {
    // console.log(this.props)
    const { car, money, check } = this.props
    return (
      <div>
        <h3>类组件</h3>
        <div>{car}</div>
        <div>{money}</div>
        <div>{check ? '是' : '否'}</div>
      </div>
    )
  }
}
