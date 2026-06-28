let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

const options = ["Rock", "Paper", "Scissors"];

function getPlayerChoice() {}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  const playerIndex = options.indexOf(playerChoice);
  const computerIndex = options.indexOf(computerChoice);
  console.log(` Player: ${playerChoice} Computer: ${computerChoice} `);

  if (playerIndex === computerIndex) {
    return "There is a tie!";
  } else if (
    (playerIndex - computerIndex + options.length) % options.length ===
    1
  ) {
    playerScore++;
    return "The Player wins this round!";
  } else {
    computerScore++;
    return "The Computer wins this round!";
  }
}

const output = document.getElementById("output-results");

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const results = playRound(playerChoice, computerChoice);
    output.textContent = `The result is: ${results}`;
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const endGameModal = document.getElementById("endGameModal");
const restartBtn = document.getElementById("restartBtn");
const overlay = document.getElementById("overlay");

rockBtn.addEventListener("click", () => handleClick("Rock"));
paperBtn.addEventListener("click", () => handleClick("Paper"));
scissorsBtn.addEventListener("click", () => handleClick("Scissors"));

function handleClick(playerChoice) {
  if (isGameOver()) {
    openEndgameModal();
    return;
  }
  const computerChoice = getComputerChoice();
  const results = playRound(playerChoice, computerChoice);
  output.textContent = results;
}
