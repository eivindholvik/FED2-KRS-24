import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo({ name = "Todo List" }) {
    const [todos, setTodos] = useState([]);
    return (
        <div className="todoList">
            <h2>{name}</h2>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Todo;
