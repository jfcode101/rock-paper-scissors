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

  for (let i = 0; i < 3; i++) {
    console.log(` =========> Count: ${i + 1}`);
    let userInput = prompt("Make a choice: ").toUpperCase();
    const playerSelection =
      userInput[0] + userInput.slice(1).toLocaleLowerCase();

    console.log("User choice = " + playerSelection);
    const computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));

    if (playRound(playerSelection, computerSelection).includes("You win!")) {
      playerScore++;
    } else if (
      playRound(playerSelection, computerSelection).includes(`It's a tie!`)
    ) {
      tieScore++;
    } else if (
      playRound(playerSelection, computerSelection).includes("You loose")
    ) {
      computerScore++;
    }

    // find the winner
    max = Math.max(playerScore, computerScore, tieScore);

    if (max === playerScore) {
      winner = "Player";
    } else if (max === computerScore) {
      winner = "Computer";
    } else if (max === tieScore) {
      winner = `None,`;
    }

    console.log(`**************************************************`);
  }

  console.log(`
  Player Score: ${playerScore}
  Computer Score: ${computerScore}
  Tie score: ${tieScore}

  " ${winner} is the winner! "`);
}

playGame();
