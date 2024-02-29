import styled from "styled-components";
import { useContext } from "react";

import { ThemeContext } from "../App";
import themes from "../assets/themes";

const Form = styled.form`
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    width: 300px;
    border-radius: 5px;
    shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    legend {
        color: ${({ theme }) => theme.colors.text};
    }
    label {
        color: ${({ theme }) => theme.colors.text};
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        input {
            padding: 10px;
            color: ${({ theme }) => theme.colors.text};
            background: ${({ theme }) => theme.colors.backgroundSecondary};
            border: none;
            border-radius: 5px;
        }
    }
`;

const Button = styled.button`
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    margin: 10px;
`;

function CustomForm() {
    const { state, dispatch } = useContext(ThemeContext);

    const theme = themes[state.theme];

    return (
        <>
            <Button
                theme={theme}
                onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            >
                {state.theme === "light" ? "☀️" : "🌑"}
            </Button>
            <Form theme={theme}>
                <legend>My form</legend>
                <label>
                    Enter your name:
                    <input />
                </label>
                <label>
                    Enter your city:
                    <input />
                </label>
                <Button theme={theme}>Submit</Button>
            </Form>
        </>
    );
}

export default CustomForm;
