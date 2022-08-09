import React, { Component } from 'react'
import Son1 from './Son1'
import Son2 from './Son2'
export default class Parent extends Component {
  state = {
    money: 100,
    car: '小黄车',
  }
  render() {
    console.log('parent render...')
    const { money, car } = this.state
    return (
      <div>
        <h2>我是parent组件</h2>
        <Son1 money={money}></Son1>
        <Son2 car={car}></Son2>
        <button onClick={() => this.setState({ money: 200 })}>改钱</button>
        <button onClick={() => this.setState({ car: '宝马' })}>改车</button>
      </div>
    )
  }
}
