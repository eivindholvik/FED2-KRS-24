import Form from "./components/Form";
import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
    theme: "dark",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };
        default:
            return state;
    }
};

function App() {
    const [theme, themeDispatch] = useReducer(reducer, initialState);
    return (
        <ThemeContext.Provider value={{ theme, themeDispatch }}>
            <Form />
        </ThemeContext.Provider>
    );
}

export default App;
