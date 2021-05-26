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
