import { useRef } from 'react'
/* 
  1. 使用useRef能够创建一个ref对象，  有current属性  {current: null}
    const xxRef = useRef(null)
  
  2. 通过ref属性关联到某个DOM对象上  {current: DOM}
    <div ref={xxRef}></div>
  
  3. 可以通过 xxRef.current访问到对应的DOM
*/
const App = () => {
  const inputRef = useRef(null)
  const add = () => {
    console.log(inputRef.current.value)
  }
  return (
    <section className="todoapp">
      <input type="text" placeholder="请输入内容" ref={inputRef} />{' '}
      <button onClick={add}>添加</button>
    </section>
  )
}

export default App
