import ListCard from "../components/ListCard.mjs";
import { lsGet } from "./handleLocalStorage.mjs";

export default function renderTodos() {
  const container = document.querySelector('.todosContainer');
  container.innerHTML = "";

  const todos = lsGet();
  todos.forEach((todo, i) => {
    container.append(ListCard(todo, i), document.createElement("hr"));
  });

}