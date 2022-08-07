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
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </div>
        <h3>文本域</h3>
        <div>
          描述：
          <textarea
            name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <h3>下拉框</h3>
        <div>
          选择城市
          <select
            value={this.state.city}
            onChange={this.handleChange}
            name="city"
          >
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
              name="agree"
              type="checkbox"
              checked={this.state.agree}
              onChange={this.handleChange}
            />
            是否同意我们的协议
          </div>
        </h3>
      </div>
    )
  }
  handleChange = (e) => {
    const { name, type, checked, value } = e.target
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
