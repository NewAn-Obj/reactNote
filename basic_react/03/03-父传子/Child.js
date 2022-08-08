export default function Child({ wife: mother }) {
  return (
    <div>
      <h3>我是子组件</h3>
      <div>妈妈的名字: {mother}</div>
    </div>
  )
}
