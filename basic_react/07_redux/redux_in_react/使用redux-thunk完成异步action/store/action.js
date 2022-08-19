export const add_money = (money) => ({ type: 'add_money', money })
export const use_money = (money) => ({ type: 'use_money', money })

//异步action
//两种不同的写法
//如果跟现有的action一样，可以在dispatch里面调用
//如果没有现有的的方法，在dispatch里面写action对象dispatch({ type: 'use_money', money })
export const bAsync = (money) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'use_money', money })
    }, 3000)
  }
}

export const buyAsync = (money) => {
  return (dispatch) => {
    setTimeout(() => dispatch(use_money(money)), 3000)
  }
}
