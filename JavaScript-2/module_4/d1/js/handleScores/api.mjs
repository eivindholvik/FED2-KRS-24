export async function submitScore(score) {
  try {
    const response = await fetch("https://crud-examples.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `flappy ${localStorage.getItem("player")}`,
        content: `flappy ${score}`
      })
    }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}


export async function displayHighscore() {
  try {
    const response = await fetch("https://crud-examples.onrender.com/");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}