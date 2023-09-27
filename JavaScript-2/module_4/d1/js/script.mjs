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
}

(async () => {
  await updateHighscore();
})();