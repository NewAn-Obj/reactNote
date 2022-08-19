export default function reducer(state = 1000, action) {
  if (action.type === 'add_money') return state + action.money
  if (action.type === 'use_money') return state - action.money
  return state
}
