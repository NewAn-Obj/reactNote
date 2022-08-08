// 函数组件
export default function Demo(props) {
  const buy = () => {
    // props.money = props.money - 10
    props.user.name = 'ls'
    props.user.age = 20
    props.user.gender = 20
  }
  return (
    <div>
      <h3>我是Demo组件</h3>
      <div>金钱：{props.money}</div>
      <div>
        {props.user.name} -- {props.user.age}
      </div>
      <button onClick={buy}>买皮肤</button>
    </div>
  )
}
