import Todo from "./Todo";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

  return (
    <ul className="list">
      {todos.length === 0 && "No todos yet!" }
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} id={todo.id} completed={todo.completed} toggleTodo={toggleTodo} deleteTodo={deleteTodo}   />
      ))}
   </ul>
  )
}