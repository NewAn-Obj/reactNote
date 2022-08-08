import { Component } from 'react'
export default class Child extends Component {
  state = {
    wife: '',
  }
  render() {
    return (
      <div>
        <h3>我是子组件</h3>
        <div>妈妈的名字: {this.props.wife}</div>
        <div>
          配偶的名字：
          <input
            type="text"
            value={this.state.wife}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({ wife: e.target.value })
    // 传递给父组件
    this.props.changeName(e.target.value)
  }
}
