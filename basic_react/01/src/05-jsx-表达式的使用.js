import ReactDOM from 'react-dom'
const username = '吴签'
const address = '监狱'
const car = {
  brand: '小黄车',
}
const friends = ['罗xx', '吴xx']
const age = 18

const fn = () => {
  return (
    <div>
      <p>你看这面，它又大又宽</p>
      <p>你看这牢，它又大又方</p>
    </div>
  )
}

const element = (
  <div>
    <h1>jsx的表达式</h1>
    <div>姓名：{username + '大碗牢饭'}</div>
    <div>地址：{address}</div>
    <div>车：{car.brand}</div>
    <div>朋友：{friends[0]}</div>
    <div title={car.brand}>喜好：{age > 18 ? '成年' : '未成年'}</div>

    <div>{fn()}</div>
    <hr />

    {/* <div>{for()}</div> */}
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
