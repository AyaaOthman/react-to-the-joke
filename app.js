const applause = document.querySelector("#applause");
const boo = document.querySelector("#boo");
const gasp = document.querySelector("#gasp");
const jokePlace = document.querySelector(".joke");
newJoke()
applause.addEventListener("click", () => {
  const applauseAudio = document.querySelector(".applause-audio");
  applauseAudio.play();
  newJoke()
});
boo.addEventListener("click", () => {
  const booAudio = document.querySelector(".boo-audio");
  booAudio.play();
  newJoke()
});
gasp.addEventListener("click", () => {
  const gaspAudio = document.querySelector(".gasp-audio");
  gaspAudio.play();
  newJoke()
});

function newJoke() {
  fetch(" https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: " application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const joke = data.joke;
      jokePlace.textContent = joke;
    });
}
