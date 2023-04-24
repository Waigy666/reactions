const clickArea = document.querySelector(".click-area");
const displayText = document.querySelector(".display-text");
const scoreElements = document.querySelectorAll(".score");

const scoreHistory = [];

const MINIMUM_MS_TILL_CHANGE = 3000;
const MAXIMUM_MS_TILL_CHANGE = 10000;

let msSinceEpochOnTimeout = 0;
let waitingForClick = false;

function play() {
  const msTillChange =
    Math.floor(
      Math.random() * (MAXIMUM_MS_TILL_CHANGE - MINIMUM_MS_TILL_CHANGE)
    ) + MINIMUM_MS_TILL_CHANGE;

  // Revert the colour back to red
  clickArea.style.backgroundColor = null;

  displayText.textContent = "";

  setTimeout(() => {
    msSinceEpochOnTimeout = Date.now();

    clickArea.style.backgroundColor = "#e0680d";
    waitingForClick = true;
  }, msTillChange);
}

function addScore(score) {
  // add score to array in index 0
  scoreHistory.unshift(score);

  for (let i = 0; i < Math.min(scoreHistory.length, 5); i++) {
    const score = scoreHistory[i];

    scoreElements[i].textContent = `${score} ms`;
  }
}

clickArea.addEventListener("click", () => {
  if (waitingForClick) {
    const score = Date.now() - msSinceEpochOnTimeout;

    waitingForClick = false;
    scoretext =  'Your time was ' + score + ' ms!\r\n';
    displayText.setAttribute('style', 'white-space: pre;');
    if (score < 298) {
      displayText.textContent = scoretext + '\r\n'
      displayText.textContent += 'Your reaction age is less than 18 years old!.\r\n';
      displayText.textContent += 'Click to play again.';
    }
    else if (score > 311 && score < 387) {
      displayText.textContent = scoretext  + '\r\nYour reaction age is: \r\n\ 20 to 30 years old!\r\n\r\nClick to play again.';
    }
    else if (score > 388 && score < 475) {
      displayText.textContent = scoretext  + '\r\nYour reaction age is: \r\n\ 30 to 40 years old!\r\n\r\nClick to play again.';
    } 
    else if (score > 476 && score < 574) {
      displayText.textContent = scoretext + '\r\nYour reaction age is: \r\n\ 40 to 50 years old!\r\n\r\nClick to play again.';
    } 
    else if (score > 575 && score < 684) {
      displayText.textContent = scoretext + '\r\nYour reaction age is: \r\n\ 50 to 60 years old!\r\n\r\nClick to play again.';
    } 
    else if (score > 685 && score < 806) {
      displayText.textContent = scoretext + '\r\nYour reaction age is: \r\n\ 60 to 70 years old!\r\n\r\nClick to play again.';
    } 
    else if (score > 807 && score < 940) {
      displayText.textContent = scoretext + '\r\nYour reaction age is: \r\n\ 70 to 80 years old!\r\n\r\nClick to play again.';
    } 
    else if (score > 941) {
      displayText.textContent = scoretext + '\r\nYour reaction age is: \r\n\ 80 to 90 years old!\r\n\r\nClick to play again.';
  } 

    addScore(score);
  } else {
    play();
  }
});