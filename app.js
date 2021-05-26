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
  let playerScore = 0;
  let computerScore = 0;

  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("p: " + playerSelection + " c: " + computerSelection);
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("p: " + playerSelection + " c: " + computerSelection);
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("p: " + playerSelection + " c: " + computerSelection);
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("p: " + playerSelection + " c: " + computerSelection);
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("p: " + playerSelection + " c: " + computerSelection);
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("p: " + playerSelection + " c: " + computerSelection);
    playerScore++;
    `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == computerSelection) {
    console.log("p: " + playerSelection + " c: " + computerSelection);
    return "It's a tie!";
  }
}

const playerSelection = prompt("Make your choice!", "").toLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
