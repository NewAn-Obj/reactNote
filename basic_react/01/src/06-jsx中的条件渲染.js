import ReactDOM from 'react-dom'

const loading = false

function render() {
  // if (loading) {
  //   return <div>数据正在加载中....</div>
  // } else {
  //   return <div>数据加载完成，显示加载的数据</div>
  // }

  return loading ? (
    <div>数据正在加载中....</div>
  ) : (
    <div>数据加载完成，显示加载的数据</div>
  )
}
const element = (
  <div>
    {/* {loading ? (
      <div>数据正在加载中....</div>
    ) : (
      <div>数据加载完成，显示加载的数据</div>
    )} */}
    {loading && <div>数据加载中...</div>}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
