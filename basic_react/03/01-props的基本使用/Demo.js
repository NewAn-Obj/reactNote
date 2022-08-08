// 函数组件
export default function Demo({ car, money, check }) {
  return (
    <div>
      <h3>我是Demo组件</h3>
      <div>{car}</div>
      <div>{money}</div>
      <div>{check ? '是' : '否'}</div>
    </div>
  )
}
