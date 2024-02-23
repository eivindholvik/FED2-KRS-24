import { useState, useEffect } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo({ name = "Todo List" }) {
    const [todos, setTodos] = useState();

    useEffect(() => {
        const data = localStorage.getItem(`todos${name}`);
        if (data) {
            setTodos(JSON.parse(data));
        } else {
            setTodos([]);
        }
    }, []);

    useEffect(() => {
        if (todos) {
            localStorage.setItem(`todos${name}`, JSON.stringify(todos));
        }
    }, [todos]);

    return (
        <div className="todoList">
            <h2>{name}</h2>
            <TodoForm name={name} todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Todo;
