export default function Todo({ title, id, completed, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
      </label>
      {title}
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
    </li>
  )
}