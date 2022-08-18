import Man from './components/man/man'
import Women from './components/women/women'
import { useSelector } from 'react-redux'

export default function App() {
  const money = useSelector((state) => state)
  return (
    <div>
      <h3>家庭剩余金额：{money}</h3>
      <hr />
      <Man></Man>
      <hr />
      <Women></Women>
    </div>
  )
}
