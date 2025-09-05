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

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice : ");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Computer Wins! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Computer Wins! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Computer Wins! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win! Scissors beats Paper");
    humanScore++;
  }
}

function playGame(){
    for(let i = 1; i <= 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore)
        console.log("You won");
    else if(computerScore > humanScore)
        console.log("Computer won");
    else console.log("Game Tied");
}

playGame();
