const btns = document.querySelectorAll(".btn-play");

console.log(` Rock Paper Scissors Game 
**************************
`);

// step #3:
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const rand = Math.floor(Math.random() * choices.length);

  console.log("Computer choice = " + choices[rand]);

  return choices[rand];
}

// step #4:
function playRound(playerSelection, computerSelection) {
  // 1. ROCK beats SCISSORS
  // 2. PAPER beats ROCK
  // 3. SCISSORS beats PAPER

  if (playerSelection === "Rock") {
    switch (computerSelection) {
      case "Rock":
        return `It's a tie!`;
        break;

      case "Scissors":
        return `You win! Rock beats Scissors`;
        break;

      case "Paper":
        return `You loose! Paper beats Rock`;
    }
  } else if (playerSelection === "Paper") {
    switch (computerSelection) {
      case "Rock":
        return `You win! Paper beats Rock`;
        break;

      case "Paper":
        return `It's a tie!`;
        break;

      case "Scissors":
        return `You loose! Scissors beats Paper`;
        break;
    }
  } else if (playerSelection === "Scissors") {
    switch (computerSelection) {
      case "Rock":
        return `You loose! Rock beats Scissors`;
        break;

      case "Paper":
        return `You win! Scissors beats Paper`;
        break;

      case "Scissors":
        return `it's a tie!`;
        break;
    }
  }
}

function playGame() {
  let playerScore = 0,
    computerScore = 0,
    tieScore = 0,
    max = 0,
    winner = "";

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const player = btn.innerText;

      console.log("*************************************");
      console.log("Player choice = ", player);
      const computer = getComputerChoice();
      const round = playRound(player, computer);
      console.log(round);
      console.log("*************************************");
    });
  });
}

playGame();
