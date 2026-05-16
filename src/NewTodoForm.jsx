import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
    const [todo, setTodo] = useState("");

     function addNewTodo(e) {
        addTodo(todo);
        setTodo("");
    }

    return (
        <form onSubmit={(e) => {
             e.preventDefault();
            addNewTodo(e);
        }} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" placeholder="Add a new todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
            </div>
            <button className="btn">Add</button>
        </form>
    )

}