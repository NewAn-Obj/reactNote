import { useSelector, useDispatch } from 'react-redux'
import { add_money } from '../../store/action'
export default function Man() {
  const money = useSelector((state) => state.money)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>男人组件</h3>
      <h5>剩余金额:{money}</h5>
      <button onClick={() => dispatch(add_money(10))}>搬砖 +10</button>
    </div>
  )
}
