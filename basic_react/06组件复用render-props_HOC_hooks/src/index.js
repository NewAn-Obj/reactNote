import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

ReactDom.render(<App></App>, document.getElementById('root'))

/* 
1. 为什么要有hooks 
  1.1 代码逻辑复用：mixins(废弃) render-props HOC  hooks  自定义hooks  useXXX
  1.2 class的缺点
    class中的this指向总是让人难以理解
    考虑到底使用函数组件还是class组件，，，需要学习两套组件的用法
    class组件不利于代码的压缩和优化
    class组件提供了生命周期函数，导致一个功能被拆开到多个钩子函数中。

  hooks解决的什么问题
    1. 逻辑复用
    2. 不在使用this
    3. 减轻开发者的心智负担，，，不用考虑函数组件和类组件
    4. 使用函数方便代码压缩和优化（tree shaking）
    5. 一个功能写到一起

  hooks是16.8开始的，，，没有准备去移除class组件


2. useState
  作用：给函数组件提供状态以及修改状态的方法
  语法：const [count, setCount] = useState(100)
       const [money, setMoney] = useState(() => { return xxx })
  
  注意：hooks只能在函数组件中或者自定义hooks中使用功能，而且不能包含在if else for while语句中

3. useEffect
  作用：处理react中的副作用，，，，实现class组件中的钩子函数的功能。
  语法： useEffect(() => {})  组件第一次渲染以及每一次更新后都会执行
        useEffect(() =>{}, [count])  组件第一次渲染以及count发生改变后都会执行
        useEffect(() => {}, [])  组件第一次渲染
  
  清理副作用
        useEffect( () => {
          return () => {
            // 清理函数
          }
        })
        清理函数 会在销毁的时候以及每一次回调函数执行之前执行。



        useEffect( () => {
          return () => {
            // 清理函数
          }
        }, [])
        清理函数只会在组件销毁的时候执行


4. useRef
  作用：用于操作DOM或者组件
    const inputRef = useRef(null)

    <div ref={inputRef}></div>

    inputRef.current 操作DOM

5. useContext
  作用：可以获取到context中的数据

  <Context.Provider value={value}></Context.Provider>


  const value = useContext(Context)


6. React.memo()
  作用：高阶组件，用于缓存一个组件，，，对比组件的props和state是否发生改变，如果不变，就不会更新。

  如果给组件传递一个函数或者复杂类型，会导致memo失效，，，因为浅层对比

7. useCallback()
  作用：缓存一个函数，除非依赖项发生了变化，重新缓存，，，，，配合React.memo

    const newFn = useCallback(fn, [depts])

8. useMemo
  作用：缓存任意类型的数据

    const memoData = useMemo(() => data, [depts])

  提供计算属性，避免昂贵的计算

9. useReducer 替代redux  action 
*/
