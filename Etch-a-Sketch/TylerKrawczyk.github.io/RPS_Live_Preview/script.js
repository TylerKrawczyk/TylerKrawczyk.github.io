
let playerScore = 0;
let computerScore = 0;

const winnerMessage = "";
const loserMessage = "";
const tieMessage  = "";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const container = document.querySelector(".main-container");
const gameMessage = document.querySelector(".message-container");
const gameScore = document.querySelector("#score-container");

const div = document.createElement("div");
const p = document.createElement("p");

const playerScores = document.querySelector(".computerScores");
const computerScores = document.querySelector(".playerScores");

// Computer randomly returns Rock, Paper or Scissors
function computerPlay() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

// Single Round
function playRound(playerSelection, computerSelection) {
  let win =
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper");
  let lose =
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper");

  while (playerScore < 5 && computerScore < 5) {
    if (win) {
      playerScore++;
      div.innerText = `You won! ${playerSelection} beats ${computerSelection}! ${winnerMessage}`;

      
    } else if (lose) {
      computerScore++;
      div.innerText = `You lost! ${computerSelection} beats ${playerSelection}! ${loserMessage}`;

     
    } else if (playerSelection === computerSelection) {
      div.innerText = `It's a tie! You both chose ${computerSelection}. ${tieMessage}`;

     
    }
    gameScore.innerHTML = `Player: ${playerScore} <br> Computer: ${computerScore}`;

   	gameMessage.appendChild(div);
    return;
  }
  let winner = "";
  if (computerScore > playerScore) {
    winner = "The Computer";
  } else {
    winner = "You";
  }

  div.innerText = `Game Over! ${winner} Won! Play Again?`;
  reset.adddEventListener('click', () => resetGame());
}

  
rock.addEventListener("click", this.game.bind(this, "Rock"));
paper.addEventListener("click", this.game.bind(this, "Paper"));
scissors.addEventListener("click", this.game.bind(this, "Scissors"));

// Plays the game
function game(playerSelection) {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

const refresh = document.createElement("button"); //creates button
refresh.innerText = "Play Again"; //adds text to button
refresh.classList.add("refresh"); // adds class to button
refresh.addEventListener("click", goRefresh);
function goRefresh() {
  location.href = "./index.html"; // refreshes game
}

gameMessage.appendChild(refresh);