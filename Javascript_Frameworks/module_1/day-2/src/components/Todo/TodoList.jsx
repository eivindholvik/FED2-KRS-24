function TodoList({ todos, setTodos }) {
    function handleComplete(event) {
        event.preventDefault();
        const key = event.target.id;
        setTodos((prev) => {
            return prev.map((todo) => {
                if (todo.id === Number(key)) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        });
    }

    function createLi(todo) {
        return (
            <li onClick={handleComplete} id={todo.id} key={todo.id}>
                {todo.value}
            </li>
        );
    }

    const [pending, completed] = todos.reduce(
        (acc, todo) => {
            const li = createLi(todo);
            todo.completed ? acc[1].push(li) : acc[0].push(li);
            return acc;
        },
        [[], []]
    );
    return (
        <>
            <h2>Pending</h2>
            <ul>{pending}</ul>
            {Boolean(completed.length) && (
                <>
                    <h2>Completed</h2>
                    <ul>{completed}</ul>
                </>
            )}
        </>
    );
}

export default TodoList;
