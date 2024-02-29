import { createContext, useReducer } from "react";

import CustomForm from "./components/CustomForm";

export const ThemeContext = createContext();

const initialState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };
        default:
            throw Error();
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <ThemeContext.Provider value={{ state, dispatch }}>
                <CustomForm />
            </ThemeContext.Provider>
        </>
    );
}

export default App;
