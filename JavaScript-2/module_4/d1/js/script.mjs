import { displayHighscore } from "./handleScores/api.mjs";

export async function updateHighscore() {
  const data = await displayHighscore();
  const scores = data.filter((item) => {
    if (item.name.startsWith("flappy")) return true;
  });
  const sortedScores = scores.sort((a, b) => {
    const [aGarbage, aScore] = a.content.split(" ");
    const [bGarbage, bScore] = b.content.split(" ");
    return bScore - aScore;
  })
  const ulHighscore = document.querySelector('#highscore');
  ulHighscore.innerHTML = "";
  const limit = sortedScores.length > 4 ? 5 : sortedScores.length
  for (let i = 0; i < limit; i++) {
    const [sGarbage, score] = sortedScores[i].content.split(" ");
    const [nGarbage, name] = sortedScores[i].name.split(" ");
    ulHighscore.innerHTML += `<li>${name}: ${score}`;
  }
  return sortedScores;
}

export async function deleteHighscores() {
  try {
    if (localStorage.getItem("player") !== "admin") return;
    const promises = [];
    const sortedScores = await updateHighscore();
    const deleteURLs = sortedScores.map(score => {
      return `https://crud-examples.onrender.com/${score.id}`;
    })
    for (const url of deleteURLs) {
      promises.push(fetch(url, {
        method: "DELETE"
      }))
    }
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
}

(async () => {
  await updateHighscore();
})();

document.querySelector('#delete').addEventListener("click", async (e) => {
  e.preventDefault();
  await deleteHighscores();
  await updateHighscore();
})
