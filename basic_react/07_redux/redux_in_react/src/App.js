import Man from './components/man/man'
import Women from './components/women/women'
import { useSelector } from 'react-redux'

export default function App() {
  const { money, user } = useSelector((state) => state)
  return (
    <div>
      <h3>家庭剩余金额：{money}</h3>
      <hr />
      <Man></Man>
      <hr />
      <Women></Women>
      <hr />
      <hr />
      <hr />
      <h2>用户管理</h2>
      <span>用户名：{user.name}</span>
      <br />
      <span>用户年龄：{user.age}</span>
    </div>
  )
}
