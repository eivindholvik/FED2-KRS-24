import { lsAdd } from "../services/handleLocalStorage.mjs";
import renderTodos from "../services/renderTodos.mjs";
import Input from "./Input.mjs";
import Button from "./Button.mjs";

export default function InputForm() {
  const inputForm = document.createElement("form");
  const todoInput = Input();
  inputForm.appendChild(todoInput);
  inputForm.appendChild(Button("add task", "submit", (e) => {
    e.preventDefault();
    if (todoInput.value) {
      lsAdd(todoInput.value);
      todoInput.value = "";
      renderTodos();
    }
  }, "submit"))
  return inputForm;
}