import { getApiBase } from "../env.mjs";

document.querySelector('[data-name="my-button"]').addEventListener("click", () => {
  const searchParameters = new URLSearchParams(window.location.search);
  // for (const parameter of searchParameters) {
  //   console.log(parameter[1]);
  // }
  searchParameters.set('country', 'Norway');
  console.log(searchParameters.get("id"));

})

await fetch(`${getApiBase}/auth/register`, body);


// fetch api with single GET fx: /profile/id - where id is dynanic