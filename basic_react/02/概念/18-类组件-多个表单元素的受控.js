import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    username: '',
    desc: '',
    city: 3,
    agree: true,
  }
  render() {
    return (
      <div>
        <h1>常见的受控组件</h1>
        <h3>文本框</h3>
        <div>
          姓名：
          <input
            type="text"
            value={this.state.username}
            onChange={this.changeUsername}
          />
        </div>
        <h3>文本域</h3>
        <div>
          描述：
          <textarea
            value={this.state.desc}
            onChange={this.changeDesc}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <h3>下拉框</h3>
        <div>
          选择城市
          <select value={this.state.city} onChange={this.changeCity}>
            <option value="1">北京</option>
            <option value="2">上海</option>
            <option value="3">杭州</option>
            <option value="4">深圳</option>
            <option value="5">广州</option>
          </select>
        </div>

        <h3>
          <div>
            <input
              type="checkbox"
              checked={this.state.agree}
              onChange={this.changeAgree}
            />
            是否同意我们的协议
          </div>
        </h3>
      </div>
    )
  }
  changeUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  changeDesc = (e) => {
    this.setState({
      desc: e.target.value,
    })
  }
  changeCity = (e) => {
    this.setState({
      city: e.target.value,
    })
  }
  changeAgree = (e) => {
    this.setState({
      agree: e.target.checked,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
