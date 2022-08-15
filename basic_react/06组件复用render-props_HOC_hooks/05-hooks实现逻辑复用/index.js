import ReactDom from 'react-dom'
import img from './1.gif'
import useMouse from './hooks/useMouse'
import useScroll from './hooks/useScroll'

function Cat() {
  const { x, y } = useMouse()
  return (
    <img src={img} style={{ position: 'absolute', left: x, top: y }} alt="" />
  )
}

function Position() {
  const { x, y } = useMouse()
  const { left, top } = useScroll()
  return (
    <div style={{ width: 10000, height: 10000 }}>
      <h3>
        当前的位置：{x}, {y}
      </h3>
      <div>
        滚动的位置： {left} - {top}
      </div>
    </div>
  )
}

ReactDom.render(<Position></Position>, document.getElementById('root'))
