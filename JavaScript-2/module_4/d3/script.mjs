import { callApi } from "./api.mjs";

const htmlForm = document.querySelector(`[data-name="api-form"]`);
const submitBtn = document.querySelector('[type="submit"]');


htmlForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(htmlForm);
  const body = { content: formData.get("content"), id: formData.get("id"), name: formData.get("name") };
  callApi(document.querySelector('[name="method"]:checked').value, body)
});

//hmmm
document.querySelectorAll('[name="method"]').forEach((radio) => radio.addEventListener("click", (e) => {
  const formData = new FormData(htmlForm);
  if (radio.value === "GET" && formData.get("id") === "") {
    submitBtn.value = "get all posts";
  }
  if (radio.value === "GET" && formData.get("id") !== "") {
    submitBtn.value = `get single post`;
  }
  if (radio.value === "DELETE" && formData.get("id") !== "") {
    submitBtn.value = `delete post`;
  }
  if (radio.value === "DELETE" && formData.get("id") === "") {
    submitBtn.value = `delete all posts`;
  }
  if (radio.value === "PUT") {
    submitBtn.value = "update post";
  }
  if (radio.value === "POST") {
    submitBtn.value = "create new post";
  }

}));

