import React, { Component } from 'react'
import { Consumer } from './index'
export default class Sun extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {({ color, bgColor, changeColor }) => (
            <h5 style={{ color, backgroundColor: bgColor }}>
              <div>我是孙组件</div>
              <button onClick={() => changeColor('yellow')}>修改</button>
            </h5>
          )}
        </Consumer>
      </div>
    )
  }
}
