import api from "./api.mjs";

const jwt = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE2LCJuYW1lIjoiRWl2aW5kZHNzIiwiZW1haWwiOiJlaXZpbmQuaG9saEBub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjk1OTg4NzM5fQ.Dd6AXzwF5ItrsbLFz16eH6xpDsNSdiHMLuVbbVzjFKw`;
const endpoint = "/profiles";

async function createAllProfiles() {
  let done = false;
  let allProfiles = [];
  let i = 0;

  while (!done) {
    const moreProfiles = await api(endpoint, jwt, i);
    if (moreProfiles.length > 0) {
      allProfiles = [...allProfiles, ...moreProfiles];
    } else {
      done = true;
    }
    i++;
  }

  return allProfiles;
}

function getBubbleRes(input, allProfiles) {
  return allProfiles.filter(item => item.name.includes(input));
}

const input = document.querySelector('#search');


(async () => {
  const allProfs = await createAllProfiles();

  let timer = 0;

  input.addEventListener("keyup", (e) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(getBubbleRes(e.target.value, allProfs));
    }, 500);
    console.log(timer);
  })

})();



