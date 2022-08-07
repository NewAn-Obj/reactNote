import React from 'react'
import ReactDOM from 'react-dom'
/* 
  1. 展示评论列表功能
    1.1 通过state提供评论列表的数据
    1.2 通过map可以动态的渲染
  2. 清空评论的功能
  3. 发表新的评论功能
  4. 删除评论功能
  5. 没有更多评论的处理
*/
import './index.css'

class App extends React.Component {
  state = {
    list: [
      {
        id: 1,
        name: '王思聪',
        content: '想你的夜',
      },
      {
        id: 2,
        name: '王健林',
        content: '定一个小目标，先赚他一个亿',
      },
      {
        id: 3,
        name: '马云',
        content: '我对钱不敢兴趣',
      },
    ],
    name: '',
    content: '',
  }
  render() {
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={this.state.content}
            onChange={this.handleChange}
            name="content"
          />
          <br />
          <button onClick={this.add}>发表评论</button>
          <button onClick={this.clear}>清空评论</button>
        </div>
        {this.renderList()}
      </div>
    )
  }
  renderList() {
    // this有没有问题
    if (this.state.list.length === 0) {
      return <div className="no-comment">暂无评论</div>
    }
    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
            {/* <button onClick={this.del.bind(this, item.id)}>删除</button> */}
            <button onClick={() => this.del(item.id)}>删除</button>
          </li>
        ))}
      </ul>
    )
  }

  // 清空内容
  clear = () => {
    this.setState({
      list: [],
    })
  }

  // 删除
  del = (id) => {
    // console.log('删除')
    // console.log(id)
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  add = () => {
    const { name, content, list } = this.state
    if (!name || !content) {
      return alert('信息不完整')
    }
    // 添加评论
    this.setState({
      list: [{ id: Date.now(), name, content }, ...list],
      name: '',
      content: '',
    })
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
