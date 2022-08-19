//提供todos相关的action
import axios from 'axios'
//获取请求列表
export const getList = () => {
  return async (dispatch) => {
    const { data: res } = await axios.get('http://localhost:8000/todos')
    // console.log(res)
    dispatch({
      type: 'GET_LIST',
      list: res,
    })
  }
}
export const addTodo = (name) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:8000/todos', {
      name,
      done: false,
    })
    // console.log(res.data)

    dispatch({
      type: 'ADD_TODO',
      todo: res.data,
    })
  }
}

export const del_todo = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:8000/todos/${id}`)
    dispatch({
      type: 'DEL_TODO',
      id,
    })
  }
}

export const change_todo = (id, done) => {
  return async (dispatch) => {
    const res = await axios.patch(`http://localhost:8000/todos/${id}`, {
      done: !done,
    })
    // console.log(res.data)
    dispatch({
      type: 'CHANGE_TODO',
      todo: res.data,
    })
  }
}

// export const check_All = (done) => ({
//   type: 'CHECKALL',
//   done,
// })
