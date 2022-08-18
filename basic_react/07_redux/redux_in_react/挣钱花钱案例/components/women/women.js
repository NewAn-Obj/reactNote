import { useSelector, useDispatch } from 'react-redux'
import { use_money } from '../../store/action'
export default function Women() {
  const money = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>女人组件</h3>
      <h5>剩余金额:{money}</h5>
      <button onClick={() => dispatch(use_money(20))}>买包 -20</button>
    </div>
  )
}
