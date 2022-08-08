import React, { Component } from 'react'

export default class TodoFooter extends Component {
  render() {
    const leftNum = this.props.list.filter((item) => item.done === false).length
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{leftNum}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={this.props.type === 'all' ? 'selected' : ''}
              href="#/"
              onClick={() => {
                this.changeType('all')
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={this.props.type === 'active' ? 'selected' : ''}
              onClick={() => {
                this.changeType('active')
              }}
              href="#/active"
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={this.props.type === 'completed' ? 'selected' : ''}
              onClick={() => {
                this.changeType('completed')
              }}
              href="#/completed"
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.clearDone}>
          Clear completed
        </button>
      </footer>
    )
  }
  clearDone = () => {
    this.props.clearDone()
  }
  changeType = (type) => {
    this.props.changeType(type)
  }
}
