import { Box, Input, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    setCounter,
} from "../../../services/store/counterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // console.log(Number(event.target.value));
        dispatch(setCounter(event.target.value));
    };

    return (
        <Box
        // sx={{
        //     background: "cornflowerblue",
        //     display: "flex",
        //     flexDirection: "column",
        // }}
        >
            <Button variant="contained" onClick={() => dispatch(decrement())}>
                ➖
            </Button>
            <Input value={count} onChange={handleChange} />
            <Button variant="contained" onClick={() => dispatch(increment())}>
                ➕
            </Button>
            <Button variant="contained" onClick={() => dispatch(reset())}>
                🔁
            </Button>
        </Box>
    );
}

export default Counter;
