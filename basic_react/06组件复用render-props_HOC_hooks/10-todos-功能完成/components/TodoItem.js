import { Context } from '../App'
import { useContext, useEffect, useRef, useState } from 'react'
const TodoItem = ({ item }) => {
  const { delTodo, changeDone, changeName } = useContext(Context)
  const [current, setCurrent] = useState({
    id: '',
    name: '',
  })
  // 创建ref
  const inputRef = useRef(null)

  // 当current发生改变的时候，让input获取焦点
  useEffect(() => {
    inputRef.current.focus()
  }, [current])

  const showEdit = ({ id, name }) => {
    setCurrent({
      id,
      name,
    })
  }

  const onKeyUp = (e) => {
    if (e.keyCode === 27) {
      // 隐藏
      setCurrent({ id: '', name: '' })
    }
    if (e.keyCode === 13) {
      // 修改
      changeName(current.id, current.name)
      // 修改
      setCurrent({ id: '', name: '' })
    }
  }
  return (
    <li
      key={item.id}
      className={[
        item.done ? 'completed' : '',
        item.id === current.id ? 'editing' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={() => changeDone(item.id)}
        />
        <label onDoubleClick={() => showEdit(item)}>{item.name}</label>
        <button className="destroy" onClick={() => delTodo(item.id)} />
      </div>
      <input
        className="edit"
        value={current.name}
        ref={inputRef}
        onBlur={() => setCurrent({ id: '', name: '' })}
        onChange={(e) => setCurrent({ ...current, name: e.target.value })}
        onKeyUp={onKeyUp}
      />
    </li>
  )
}
export default TodoItem
