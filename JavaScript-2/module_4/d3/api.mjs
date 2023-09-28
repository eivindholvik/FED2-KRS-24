const url = "https://crud-examples.onrender.com/";
const prefix = "e1924";

const ul = document.querySelector('.display');


export async function callApi(method, body) {
  try {
    body.name = `${prefix} ${body.name}`;
    let response;
    if (method === "GET") {
      response = await fetch(`${url}${body.id}`, {
        method: method,
      })
    } else {
      response = await fetch(`${url}${method !== "POST" ? `${body.id}` : ""}`, {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
    }
    const data = await response.json();
    console.log(data);
    if (method === "GET") {
      populateWithData(data);
    }
  } catch (e) {
    console.log(e);
  }
}

function populateWithData(data) {
  ul.innerHTML = "";
  if (Array.isArray(data)) {
    data.forEach(item => addListItem(item));
  } else {
    addListItem(item);
  }
}

function addListItem({ id, name, content }) {
  ul.innerHTML += `<li>${id}, ${name}, ${content}</li>`
}