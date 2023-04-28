const scoreHistory = []; //set score history to null

const MINIMUM_MS_TILL_CHANGE = 3000; // set the min ms until screen colour change
const MAXIMUM_MS_TILL_CHANGE = 10000; // set the maximum ms until screen colour change

let msSinceEpochOnTimeout = 0; // set the timer to 0
let waitingForClick = false; // set the eventlistener waitingforclick to false, true is returned when click received

function play() {
  // generate random number between 0 and 1. and multiply it by a value between the min and max ms until change
  const msTillChange =
    Math.floor(
      Math.random() * (MAXIMUM_MS_TILL_CHANGE - MINIMUM_MS_TILL_CHANGE) // generate random number from 1 to 10000
    ) + MINIMUM_MS_TILL_CHANGE; // ensure random number is greater than min

  // Default to CSS defined background colour
  clickArea.style.backgroundColor = null;

  displayText.textContent = "";

  setTimeout(() => {
    msSinceEpochOnTimeout = Date.now(); //set timer to start

    clickArea.style.backgroundColor = "#e0680d"; //change background colour
    waitingForClick = true; // record time click received
  }, msTillChange); 
}

function addScore(score) {
  // add score to array in index 0
  scoreHistory.unshift(score);
  // create for loop to populate the score boxes restarting at 5
  for (let i = 0; i < Math.min(scoreHistory.length, 5); i++) {
    const score = scoreHistory[i];

    scoreElements[i].textContent = `${score} ms`;
  }
}

function scorefeedback(score) {
  // set constants for the returned message
scoretext =  'Your time was ' + score + ' ms!\r\n';
agerange = getagerange(score)
displayText.setAttribute('style', 'white-space: pre;');
displayText.textContent = scoretext + "\r\n" + agerange + "\r\n\r\nClick to play again.";
}

// defines the score ranges and retunred message
function getagerange(score) {
  switch (true) {
  case  score <= 298:
    return "Your reaction age is less than 18 years old!";
  case score >= 299 && score <= 387:
    return "Your reaction age is: \r\n\ 20 to 30 years old!";
  case score >= 388 && score <= 475:
    return "Your reaction age is: \r\n\ 30 to 40 years old!";
  case score >= 476 && score <= 574:
    return "Your reaction age is: \r\n\ 40 to 50 years old!";
  case score >= 575 && score <= 684:
    return "Your reaction age is: \r\n\ 50 to 60 years old!";
  case score > 685 && score <= 806:
    return "Your reaction age is: \r\n\ 60 to 70 years old!";
  case score >= 807 && score <= 940:
    return "Your reaction age is: \r\n\ 70 to 80 years old!"
  case score >= 941:
    return "Your reaction age is: \r\n\ 80 to 90 years old!"
  }
}

module.exports = { getagerange } // enable npm testing