const url = "https://crud-examples.onrender.com/";
const prefix = "e19245346"; // skal være unik for deg

const ul = document.querySelector('.display');


export async function callApi(method, body) {
  try {
    let deleteAll = false;
    if (method === "DELETE" && body.id === "") {
      deleteAll = true;
      method = "GET";
    }
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
    if (deleteAll) {
      const deleteIDs = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].name.startsWith(prefix)) {
          deleteIDs.push(data[i].id);
        }
      }
      const promises = [];
      for (const id of deleteIDs) {
        promises.push(fetch(`${url}${id}`, {
          method: "DELETE"
        }))
      }
      await Promise.all(promises);
    }
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
    addListItem(data);
  }
}

function addListItem({ id, name, content }) {
  if (name.startsWith(prefix)) {
    const outName = name.substr(prefix.length + 1);
    ul.innerHTML += `<li>${id}, ${outName}, ${content}</li>`
  }
}