function computerPlay () {
  const hands = ["paper", "rock", "scissors"];
  return hands[Math.floor((Math.random()* hands.length))];
}
function playRound (computerSelection, playerSelection) {
  const winMsg = `You win! ${playerSelection} beats ${computerSelection}`;
  const loseMsg = `You lose! ${computerSelection} beats ${playerSelection}`;
  const drawMsg = `Draw! Both of you choose ${playerSelection}`;

  if (playerSelection == "paper") {
    if (computerSelection == "paper") {
      return drawMsg;
    } else if (computerSelection == "rock") {
      return winMsg;
    } else {
      return loseMsg;
    }
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return loseMsg;
    } else if (computerSelection == "rock") {
      return drawMsg;
    } else {
      return winMsg;
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return winMsg;
    } else if (computerSelection == "rock") {
      return loseMsg;
    } else {
      return drawMsg;
    }
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;

  for (let i = 0; i < 3; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("please choose paper, rock, or scissors").toLowerCase();
    let result = playRound(computerSelection, playerSelection);

    if (result.includes("win")) {
      playerScore++;
    } else if(result.includes("lose")) {
      compScore++;
    }

    console.log(`Round ${i+1} - ${result}
      score
      player: ${playerScore}
      computer: ${compScore}
      `)
  }

  if (playerScore-compScore > 0) {
    console.log("Final result : YOU WIN!");
  } else if (playerScore-compScore < 0) {
    console.log("Final result : you lose...");
  } else {
    console.log("Final result : It is a draw");
  }
}

game();
