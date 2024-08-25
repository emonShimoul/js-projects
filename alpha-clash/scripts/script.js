// function play() {
//   // hide the home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
}
