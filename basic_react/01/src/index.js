import ReactDOM from 'react-dom'
import './index.css'

const list = [
  { id: 1, name: '刘德华', content: '给我一杯忘情水' },
  { id: 2, name: '五月天', content: '不打扰，是我的温柔' },
  { id: 3, name: '毛不易', content: '像我这样优秀的人' },
]

function render() {
  if (list.length === 0) {
    return <div>暂无数据</div>
  }
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h3 className="pink">评论人：{item.name}</h3>
            <p className="skyblue">评论内容：{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(render(), document.getElementById('root'))
