import renderTodos from "./services/renderTodos.mjs";
import InputForm from "./components/InputForm.mjs";
import { root } from "./env.mjs";

// Heading
const heading = document.createElement("h1");
heading.textContent = "Todos";
root.appendChild(heading);

// Input form - should never rerender
root.appendChild(InputForm());

// Creatng the container for todos, and render todos from localStorage
const todosContainer = document.createElement("div");
todosContainer.classList.add("todosContainer");
root.appendChild(todosContainer);
renderTodos();
