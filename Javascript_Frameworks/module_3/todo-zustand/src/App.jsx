import Input from "./components/Input";
import Button from "./components/Button";

import { useStore } from "./store/store";

function App() {
    const count = useStore((state) => state.count);
    const increment = useStore((state) => state.increment);
    const decrement = useStore((state) => state.decrement);
    const incrementLater = useStore((state) => state.incrementLater);
    const fetchSomething = useStore((state) => state.fetchSomething);
    const todo = useStore((state) => state.todo);

    return (
        <div className="m-4 p-4">
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
            <div className="flex flex-col gap-6 w-72 mt-2">
                <Input>{count}</Input>
            </div>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={incrementLater}>Later</Button>
            <Button
                onClick={() => fetchSomething(Math.ceil(Math.random() * 10))}
            >
                {todo.title}
            </Button>
        </div>
    );
}

export default App;
