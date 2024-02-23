import { useState } from "react";

function TodoForm({ setTodos, todos }) {
    const [incrementer, setIncrementer] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.elements.todoInput.value;
        addTodo(value);
        setIncrementer((prev) => prev + 1);
        event.target.reset();
    };

    function createTodo(value) {
        return {
            id: incrementer,
            value,
            completed: false,
        };
    }

    function addTodo(value) {
        const trimmedValue = value.trim();
        const duplicateIndex = todos.findIndex(
            (todo) => todo.value === trimmedValue
        );
        if (duplicateIndex !== -1) {
            if (todos[duplicateIndex].completed) {
                setTodos((prev) => {
                    return prev.map((todo, i) => {
                        if (i === duplicateIndex) {
                            return { ...todo, completed: false };
                        }
                        return todo;
                    });
                });
            }
        } else {
            value.trim() &&
                setTodos((prev) => {
                    return [...prev, createTodo(value)];
                });
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoInput">Add a new task:</label>
            <input name="todoInput" type="text" className="todoInput" />
            <button type="submit">Add todo</button>
        </form>
    );
}

export default TodoForm;
