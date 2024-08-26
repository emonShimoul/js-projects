// function play() {
//   // hide the home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the playground
//   const playGroundSection = document.getElementById("play-ground");
//   playGroundSection.classList.remove("hidden");
// }

function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // console.log("Player pressed", playerPressed);

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // checked match or not
  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");
  } else {
    console.log("you missed. you lost a life.");
  }
}
// capture keyboard key press
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log(alphabet);

  // set randomly generated alphabet to the screen (display it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBGColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}
