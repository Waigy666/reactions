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


function scorefeedback(score) {
scoretext =  'Your time was ' + score + ' ms!\r\n';
agerange = getagerange(score)
displayText.setAttribute('style', 'white-space: pre;');
displayText.textContent = scoretext + "\r\n" + agerange + "\r\n\r\nClick to play again.";
}

function getagerange(score) {
  switch (true) {
  case  score <= 298:
    return "Your reaction age is less than 18 years old!";
  case score >= 299 && score < 387:
    return "Your reaction age is: \r\n\ 20 to 30 years old!";
  case score >= 388 && score < 475:
    return "Your reaction age is: \r\n\ 30 to 40 years old!";
  case score >= 476 && score < 574:
    return "Your reaction age is: \r\n\ 40 to 50 years old!";
  case score >= 575 && score < 684:
    return "Your reaction age is: \r\n\ 50 to 60 years old!";
  case score > 685 && score < 806:
    return "Your reaction age is: \r\n\ 60 to 70 years old!";
  case score >= 807 && score < 940:
    return "Your reaction age is: \r\n\ 70 to 80 years old!"
  case score >= 941:
    return "Your reaction age is: \r\n\ 80 to 90 years old!"
  }
}

module.exports = { getagerange }