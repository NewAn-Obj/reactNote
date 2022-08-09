import React, { Component } from 'react'
import PropTypes from 'prop-types'
// console.log(PropTypes)

export default class Son extends Component {
  static propTypes = {
    // 接收的money必须是数字类型
    money: PropTypes.number,
    list: PropTypes.array,
    car: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  }

  static defaultProps = {
    money: 0,
  }

  render() {
    return (
      <div>
        <div>我的金钱：{this.props.money + 100}</div>
        <div>
          {this.props.car.price}-{this.props.car.brand}
        </div>
        <ul>
          {this.props.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

// 给Son组件增加校验
// Son.propTypes = {
//   // 接收的money必须是数字类型
//   money: PropTypes.number,
//   list: PropTypes.array,
//   car: PropTypes.shape({
//     brand: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }),
// }

// Son.defaultProps = {
//   money: 0,
// }
