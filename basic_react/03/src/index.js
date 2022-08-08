import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

import './style/base.css'
import './style/index.css'

import TodoHeader from './components/todoHeader'
import TodoMain from './components/TodoMian'
import TodoFooter from './components/TodoFooter'

class App extends Component {
  state = {
    list: [
      { id: 1, name: '吃饭', done: false },
      { id: 2, name: '睡觉', done: true },
      { id: 3, name: '打豆豆', done: false },
    ],
    //type有三个属性，为完善底部三个按钮切换渲染列表功能
    type: 'all',
  }

  render() {
    // console.log(this.state.type)
    return (
      <section className="todoapp">
        <TodoHeader addTodo={this.addTodo}></TodoHeader>
        <TodoMain
          list={this.state.list}
          type={this.state.type}
          delTodoById={this.delTodoById}
          updataDone={this.updataDone}
          editTodo={this.editTodo}
          checkAll={this.checkAll}
        ></TodoMain>
        <TodoFooter
          list={this.state.list}
          clearDone={this.clearDone}
          changeType={this.changeType}
          type={this.state.type}
        ></TodoFooter>
      </section>
    )
  }
  //删除任务
  delTodoById = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  //修改任务是否完成状态
  updataDone = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        } else {
          return {
            ...item,
          }
        }
      }),
    })
  }

  //添加任务
  addTodo = (name) => {
    this.setState({
      list: [
        {
          id: Date.now(),
          name,
          done: false,
        },
        ...this.state.list,
      ],
    })
  }

  //修改任务
  editTodo = (name, id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            name,
          }
        } else {
          return {
            ...item,
          }
        }
      }),
    })
  }
  //完成任务删除按钮
  clearDone = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.done),
    })
  }
  //完成按钮切换渲染列表
  changeType = (type) => {
    this.setState({
      type,
    })
  }
  //全选按钮
  checkAll = (ischeck) => {
    this.setState({
      list: this.state.list.map((item) => {
        return {
          ...item,
          done: ischeck,
        }
      }),
    })
  }
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
