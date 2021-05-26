// Generate a choice for the computer
function computerPlay() {
  let num = Math.floor(Math.random() * 3);

  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log("You: " + playerScore);
    return `You win this round! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    console.log("CPU: " + computerScore);
    return `You lose this round! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Make your choice!", "").toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore === computerScore) {
    console.log("It's a tie! " + playerScore + " to " + computerScore);
  } else if (playerScore < computerScore) {
    console.log("CPU wins! " + computerScore + " to " + playerScore);
  } else if (playerScore > computerScore) {
    console.log("You win! " + playerScore + " to " + computerScore);
  }
}

let playerScore = 0;
let computerScore = 0;

game();
