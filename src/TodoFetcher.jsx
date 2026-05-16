import { useState, useEffect } from "react";
import axios from "axios";

export default function TodoFetcher() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Separate Data Fetching Method
  const loadTodoData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
      setTodos(response.data);
    } catch (err) {
      setError(err.message || "Failed to load todos");
    } finally {
      setLoading(false);
    }
  };

  // 2. Clean, Readable Lifecycle Hook
  useEffect(() => {
    loadTodoData();
  }, []); // Runs once on mount

  // --- RENDER LOGIC ---
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Todo List from jsonplaceholder api</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      {/* 3. Bonus: This method is now reusable, like for a refresh button! */}
      <button onClick={loadTodoData}>Refresh List</button>
    </div>
  );
}