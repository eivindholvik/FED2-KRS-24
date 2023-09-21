export function lsAdd(todo) {
  let todos = [];
  localStorage.getItem("todos") ? todos = JSON.parse(localStorage.getItem("todos")) : "";
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function lsGet() {
  let todos = [];
  localStorage.getItem("todos") ? todos = JSON.parse(localStorage.getItem("todos")) : "";
  return todos;
}

export function lsRemoveI(i) {
  const filteredTodos = lsGet().filter((todo, index) => index !== i);
  localStorage.setItem("todos", JSON.stringify(filteredTodos));
}