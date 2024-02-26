const playerBtns = document.querySelectorAll(".btn-play");

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
    winner = "",
    moves = 0;

  // for each butt
  playerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const player = btn.innerText;

      console.log("*************************************");
      const computer = getComputerChoice();
      const round = playRound(player, computer);

      console.log("Player choice = ", player);
      console.log(round);
      moves++;
      console.log(`Move number : ${moves}`);

      console.log("*************************************");

      /*
        if the # of moves = 5
          - display the results
          - call game over function
          - call restart the game function
      
      */
      if (moves === 5) {
        gameOver();

        // Trial : set time out to restart the enable btn click
        setTimeout(() => {
          for (const ply of playerBtns) {
            ply.disabled = false;
            // set move counter back to zero
            moves = 0;
            console.log("Restart the game");
          }
        }, 5000);
      }
    });
  });
}

playGame();

// Trial Function

// trial Game over function
function gameOver() {
  for (const ply of playerBtns) {
    ply.disabled = true;
  }
  console.log("Game Over");
}

// se
