document.querySelector('#login-form').addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("email", document.querySelector("#email").value);
  window.location.href = "./profile.html";
})
