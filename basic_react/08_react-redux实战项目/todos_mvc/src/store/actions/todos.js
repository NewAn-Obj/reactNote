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
