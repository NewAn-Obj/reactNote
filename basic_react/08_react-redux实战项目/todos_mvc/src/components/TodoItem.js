export default function TodoItem({ item }) {
  //   console.log(item.name)
  return (
    <li className={item.done ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={item.done} />
        <label>{item.name}</label>
        <button className="destroy" />
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  )
}
