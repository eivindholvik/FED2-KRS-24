import { useState } from "react";

function TodoForm({ setTodos }) {
    const [incrementer, setIncrementer] = useState(0);

    function getId() {
        const id = incrementer;
        setIncrementer((prev) => prev + 1);
        return id;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.elements.todoInput.value;
        addTodo(value);
        event.target.reset();
    };

    function createTodo(value) {
        return {
            id: getId(),
            value,
            completed: false,
        };
    }

    function addTodo(value) {
        value.trim() &&
            setTodos((prev) => {
                return [...prev, createTodo(value)];
            });
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
