document.querySelector('#player_form').addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  localStorage.setItem("player", formData.get("player"));
  document.querySelector('#player').value = "";
})