// Generate a choice for the computer
function computerPlay() {
  let num = Math.floor(Math.random() * 3);
  let choice;

  if (num === 1) {
    choice = "rock";
  } else if (num === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}
