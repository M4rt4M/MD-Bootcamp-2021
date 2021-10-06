console.log("Rock paper scissors");

const movesDropDown = document.getElementById("movesId");
const message = document.querySelector(".message");

let result = "";

movesDropDown.addEventListener("change", function (event) {
  let computerChoice = "";

  let random = Math.random()*3;

// assigning a random figure to computerChoicerockpap
  if (random <= 1) {
    computerChoice = "paper";computerChoice = "Paper";
  } else if (random <= 2 ) {
  computerChoice = "Scissors";
  } else {
  computerChoice = "Rock"; // that's a nice boulder
  }
  
  const userChoice = event.target.value;

  if (userChoice !== "-1") {
    // game engineif 
    if (userChoice == computerChoice) {
      result = "It's a tie!";
  } else if (userChoice == 'rock') {
    if (computerChoice == 'scissors') {
      result = "User wins!";
    } else if (computerChoice == 'paper') {
        result = "Computer wins!";
    } 
  } else if (userChoice == 'paper') {
    if (computerChoice == 'scissors') {
      result = "Computer wins!";
    } else if (computerChoice == 'rock') {
        result = "User wins!";
    }
  }

  }
  message.innerHTML = "You have chosen " + userChoice +
" Computer chose "+ computerChoice + " " + result;
});

/* Ideas for enhancements:
- dynamically updated field with images
- play again?
- score track
*/