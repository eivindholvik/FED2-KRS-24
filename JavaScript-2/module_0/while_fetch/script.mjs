import api from "./api.mjs";

const jwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE2LCJuYW1lIjoiRWl2aW5kZHNzIiwiZW1haWwiOiJlaXZpbmQuaG9saEBub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjk1OTg4NzM5fQ.Dd6AXzwF5ItrsbLFz16eH6xpDsNSdiHMLuVbbVzjFKw`;
const endpoint = "/profiles";


const input = document.querySelector('#search');

async function createAllProfiles() {
  let done = false;
  let allProfiles = [];
  let i = 0;

  while (!done) {
    const moreProfiles = await api(endpoint, jwt, i);
    allProfiles = [...allProfiles, ...moreProfiles];
    if (moreProfiles.length < 100) {
      done = true;
    }
    i++;
  }

  input.removeAttribute("disabled");
  input.placeholder = "... profiles / tags"

  return allProfiles;
}

function getBubbleRes(input, allProfiles) {
  return allProfiles.filter(item => item.name.includes(input));
}



function createSearchResults(searchResult) {
  const searchBox = document.querySelector(".search_box");
  searchBox.innerHTML = "";
  const length = searchResult.length > 10 ? 10 : searchResult.length;
  for (let i = 0; i < length; i++) {
    searchBox.innerHTML += `<div>
    <h2>${searchResult[i].name}</h2>
    <p>${searchResult[i].email}</p>
    </div>`
  }

}

(async () => {
  const allProfs = await createAllProfiles();

  let timer = 0;

  input.addEventListener("keyup", (e) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => {
      createSearchResults(getBubbleRes(e.target.value, allProfs));
    }, e.code === "Enter" ? 0 : 500);

  })

})();



