import { useContext } from "react";

import styled from "styled-components";
import themeStyles from "../assets/theme.js";
import { ThemeContext } from "../App";

const StyledForm = styled.form`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 #000;
    display: flex;
    flex-direction: column;
    align-content: stretch;
`;

const Input = styled.input`
    background-color: #fff;
    padding: 10px;
    color: #000;
    border: none;
    border-radius: 5px;
    width: 100%;
`;

const HeadingTwo = styled.h2`
    color: darkblue;
    margin: 10px;
    font-size: 20px;
    margin-top: 0;
    margin-inline: 0;
`;

const Button = styled.button`
    display: flex;
    flex: 1;
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const InputContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
`;

const Label = styled.label`
    color: #000;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    const { theme, themeDispatch } = useContext(ThemeContext);

    const chosenTheme = themeStyles[theme.theme];

    console.log(theme);
    return (
        <>
            <Button
                onClick={() => {
                    themeDispatch({ type: "TOGGLE_THEME" });
                }}
            >
                Toggle Theme {theme.theme === "light" ? "🌞" : "🌚"}
            </Button>
            <p>{chosenTheme.colors.background}</p>
            <StyledForm onSubmit={handleSubmit} theme={chosenTheme}>
                <HeadingTwo>Some shizzle</HeadingTwo>
                <InputContainer>
                    <Label>
                        Label for input
                        <Input type="text" />
                    </Label>
                </InputContainer>
                <Button>Submit</Button>
            </StyledForm>
        </>
    );
}

export default Form;
