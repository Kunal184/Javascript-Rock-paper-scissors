function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        return "rock";
    }
    else if(randomNumber == 1){
        return "paper";
    }
    else 
        return "scissors";
}

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const results = document.querySelector("#results");
const roundResult = document.createElement("p");
results.appendChild(roundResult);

const runningScore = document.createElement("p");
results.appendChild(runningScore);
runningScore.textContent = `Human Score = ${humanScore} : Computer Score = ${computerScore}`;

const winner = document.createElement("p");
results.appendChild(winner);

const resetButton = document.createElement("button");
results.appendChild(resetButton);
resetButton.style.display = "none";
resetButton.addEventListener("click", resetFunction);

function playRound(humanChoice, computerChoice) {
  if(humanScore === 5 || computerScore ===5) return;
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    roundResult.textContent = "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    roundResult.textContent = "Computer Wins! Paper beats Rock";
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    roundResult.textContent = "You Win! Rock beats Scissors";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    roundResult.textContent = "You Win! Paper beats Rock";
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    roundResult.textContent = "Computer Wins! Scissors beats Paper";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    roundResult.textContent = "Computer Wins! Rock beats Scissors";
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    roundResult.textContent = "You Win! Scissors beats Paper";
    humanScore++;
  }
  runningScore.textContent = `Human Score = ${humanScore} : Computer Score = ${computerScore}`;
  if(humanScore == 5) {
    winner.textContent = "Human Wins!";
    resetButton.style.display = "inline-block";
    resetButton.textContent = "Reset";
  }
  if(computerScore == 5) {
    winner.textContent = "Computer Wins!";
    resetButton.style.display = "inline-block";
    resetButton.textContent = "Reset";
  }

}


function resetFunction(){
humanScore = 0;
computerScore = 0;
runningScore.textContent = `Human Score = ${humanScore} : Computer Score = ${computerScore}`;
roundResult.textContent = "";
winner.textContent = "";
resetButton.style.display = "none";
}




