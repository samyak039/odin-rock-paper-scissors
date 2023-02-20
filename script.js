function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function playRound(playerChoice, computerChoice) {
  playerChoice = playerChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();

  if (playerChoice === computerChoice) {
    return `It's Draw! ${playerChoice} and ${computerChoice}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You Won! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Choose rock / paper / scissors ??");
    let roundResult = playRound(playerChoice, getComputerChoice());

    console.log("=> ~ game ~ roundResult:", roundResult);

    if (roundResult.includes("Won")) {
      playerScore += 1;
      console.log("=> ~ game ~ playerScore:", playerScore);
    } else if (roundResult.includes("Lose")) {
      computerScore += 1;
      console.log("=> ~ game ~ computerScore:", computerScore);
    } else {
      console.log("=> ~ game ~ DRAW");
    }
  }
}

game();
