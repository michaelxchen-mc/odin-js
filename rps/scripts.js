// improve scoretable logic to be automatic in playround()
//how to remove event listener properly
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  event.target.classList.remove('clicked');
}
function computerPlay () {
  const hands = ["paper", "rock", "scissors"];
  return hands[Math.floor((Math.random()* hands.length))];
}
function battle (computerSelection, playerSelection) {
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

function playRound(playerHand) {
    playerHand.classList.add("clicked");
    let playerSelection = playerHand.id;
    let computerSelection= computerPlay();
    let matchResultMsg = battle(computerSelection, playerSelection)
    const matchResult = document.querySelector("#match-container-result");
    matchResult.innerHTML = matchResultMsg;

    if (matchResultMsg.includes("win")) {
      playerScore++;
    } else if(matchResultMsg.includes("lose")) {
      compScore++;
    }
    scoreTablePlayer.innerHTML = playerScore
    scoreTableComp.innerHTML = compScore

    const finalResult = document.querySelector("#score-table-finalResult");
    if (playerScore == 5) {
      finalResult.innerHTML="Final result : YOU WIN!"
      document.addEventListener("click",handler,true);

      function handler(e){
        e.stopPropagation();
        e.preventDefault();
      }
    } else if (compScore == 5) {
      finalResult.innerHTML="Final result : you lose..."
      document.addEventListener("click",handler,true);

      function handler(e){
        e.stopPropagation();
        e.preventDefault();
      }
    }


}


let playerScore = 0;
let compScore = 0;
const scoreTablePlayer = document.querySelector("#score-table-playerScore");
const scoreTableComp = document.querySelector("#score-table-compScore");
scoreTablePlayer.innerHTML = playerScore
scoreTableComp.innerHTML = compScore

const playerHandAll = document.querySelectorAll(".player-hand");
playerHandAll.forEach((playerHand)=>playerHand.addEventListener("transitionend", removeTransition))
playerHandAll.forEach((playerHand)=> {
  playerHand.addEventListener("click", function() {
    playRound(playerHand)
  });
  })
