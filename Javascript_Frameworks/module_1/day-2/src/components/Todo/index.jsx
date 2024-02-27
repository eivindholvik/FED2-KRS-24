import { useState, useEffect, useReducer } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo({ name = "Todo List" }) {
    const initialState = { count: 0 };
    const reducer = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            case "set":
                return { count: action.payload };
            default:
                throw new Error();
        }
    };
    const [todos, setTodos] = useState();

    const [state, dispatch] = useReducer(reducer, initialState);

    // const [counter, setCounter] = useState(0);

    // function increaseCount() {
    //     setCounter(counter + 1);
    // }

    // function decreaseCount() {
    //     setCounter(counter - 1);
    // }

    // function setIncrementer(value) {
    //     setCounter(value);
    // }

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

    const doThis = () => {
        console.log("Nå ble jeg trigget");
    };

    // const dependencyArray = [counter, todos];

    // useEffect(doThis, dependencyArray);

    return (
        <div className="todoList">
            <button
                onClick={() => {
                    dispatch({ type: "decrement" });
                }}
            >
                -
            </button>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({
                        type: "set",
                        payload: Number(e.target.elements.count.value),
                    });
                }}
            >
                <input name="count" />
                <input type="submit" value="Set" />
            </form>
            {state.count}
            <button
                onClick={() => {
                    dispatch({ type: "increment" });
                }}
            >
                +
            </button>
            <h2>{name}</h2>
            <TodoForm name={name} todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Todo;
