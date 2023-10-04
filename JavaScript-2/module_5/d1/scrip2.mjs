load();

// register - SAVE THE PW
// -- login after register -- login should add localStrage -- load();


function load() {
  if (!localStorage.getItem("jwt")) {
    window.location.href = "./index.html";
    // console.log(window.location.href);
  }
}


document.querySelector('button').addEventListener("click", (e) => {
  localStorage.removeItem("jwt");
  load();
})
