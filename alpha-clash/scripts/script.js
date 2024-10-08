function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;

  // stop the game if pressed 'Esc'
  if (playerPressed === "Escape") {
    gameOver();
  }

  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  // checked match or not
  if (playerPressed === expectedAlphabet) {
    // console.log("you get a point");
    // update score
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);
    removeBGColorById(expectedAlphabet);
    continueGame();
  } else {
    // console.log("you missed. you lost a life.");
    // reduce life
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
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
  // hide everything show only the plaground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // update final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getTextElementById("current-alphabet");
  removeBGColorById(currentAlphabet);
}
