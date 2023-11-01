const myContainer = document.querySelector('.container');

(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    data.forEach(place => {
      myContainer.innerHTML += `<li>${place.title}</li>`;
    })
  } catch (e) {
    console.log(e);
  }
})()
