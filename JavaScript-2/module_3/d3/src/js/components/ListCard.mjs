import Button from "./Button.mjs";
import { lsRemoveI } from "../services/handleLocalStorage.mjs";
import renderTodos from "../services/renderTodos.mjs";

export default function ListCard(task, i) {
  const listCard = document.createElement("div");
  const taskText = document.createElement("p");
  taskText.innerText = task;

  listCard.append(taskText, Button("X", "warning", () => {
    lsRemoveI(i);
    renderTodos();
  }));

  return listCard;
}