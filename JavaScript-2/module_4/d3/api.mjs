const url = "https://crud-examples.onrender.com/";
const prefix = "e1924";

const ul = document.querySelector('.display');


export async function callApi(method, body) {
  try {
    body.name = `${prefix} ${body.name}`;
    let tempBody;
    if (method === "GET") {
      tempBody = {
        method: method,
      };
    } else {
      tempBody = {
        method: method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      };
    }
    const response = await fetch(`${url}${method !== "POST" ? `${body.id}` : ""}`, tempBody)
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
  if (name.startsWith(prefix)) {
    const outName = name.substr(prefix.length + 1);
    ul.innerHTML += `<li>${id}, ${outName}, ${content}</li>`
  }
}