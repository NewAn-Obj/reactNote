import React, { Component } from 'react'
import classnames from 'classnames'

export default class TodoMian extends Component {
  state = {
    currentId: '',
    currentName: '',
  }
  render() {
    let typeList = []
    if (this.props.type === 'active') {
      typeList = this.props.list.filter((item) => !item.done)
    } else if (this.props.type === 'completed') {
      typeList = this.props.list.filter((item) => item.done)
    } else {
      typeList = this.props.list
    }
    return (
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={this.props.list.every((item) => item.done)}
          onChange={this.checkAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {typeList.map((item) => {
            return (
              <li
                className={classnames({
                  completed: item.done,
                  editing: item.id === this.state.currentId,
                })}
                key={item.id}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={item.done}
                    onChange={() => {
                      this.updataDone(item.id)
                    }}
                    value={this.name}
                  />
                  <label
                    onDoubleClick={() => {
                      this.showEdit(item)
                    }}
                  >
                    {item.name}
                  </label>
                  <button
                    className="destroy"
                    onClick={() => {
                      this.delTodo(item.id)
                    }}
                  ></button>
                </div>
                <input
                  className="edit"
                  value={this.state.currentName}
                  onChange={(e) => {
                    this.setState({
                      currentName: e.target.value,
                    })
                  }}
                  onKeyUp={this.handleKeyUp}
                />
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
  //删除任务
  delTodo = (id) => {
    this.props.delTodoById(id)
  }
  //修改任务是否完成状态
  updataDone = (id) => {
    this.props.updataDone(id)
  }
  showEdit = ({ id, name }) => {
    this.setState({
      currentId: id,
      currentName: name,
    })
  }
  handleKeyUp = (e) => {
    console.log(e.keyCode)
    if (e.code === 'Escape') {
      this.setState({
        currentId: '',
      })
    }
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      if (this.state.currentName.trim() === '') {
        return alert('修改内容不能为空')
      }
      this.props.editTodo(this.state.currentName, this.state.currentId)
      this.setState({
        currentId: '',
      })
    }
  }
  checkAll = (e) => {
    this.props.checkAll(e.target.checked)
    // console.log(e.target.value)
  }
}
