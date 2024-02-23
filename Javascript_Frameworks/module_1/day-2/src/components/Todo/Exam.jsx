import { useEffect, useState } from "react";

function Exam() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        const myInternval = setInterval(() => {
            console.log("count", count);
        }, 1000);
        return () => {
            clearInterval(myInternval);
        };
    }, [count]);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Click me {count}
            </button>
            <button onClick={() => setCount2(count2 + 1)}>
                Click me {count2}
            </button>
        </>
    );
}

export default Exam;
