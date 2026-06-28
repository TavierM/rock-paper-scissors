let playerScore = 0;
let computerScore = 0;

const options = ["Rock", "Paper", "Scissors"];

function getPlayerChoice() {
  let answer = prompt("Please input your selection: Rock, Paper or Scissors: ");
  answer = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();

  if (!options.includes(answer)) {
    alert("Invalid Answer! Please input Rock, Paper or Scissors");
    return getPlayerChoice();
  }
  return answer;
}

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

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const results = playRound(playerChoice, computerChoice);
    console.log(results);
  }

  console.log(
    `The Final Score - Player: ${playerScore} Computer: ${computerScore} `,
  );

  if (playerScore > computerScore) {
    console.log("Player wins this game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins this game!");
  } else {
    console.log("There is no winner, the game is tied!");
  }
}

//UI

const choiceBtn = document.getElementById("rockBtn");
const choiceBtn = document.getElementById("paperBtn");
const choiceBtn = document.getElementById("scissorsBtn");

choiceBtn.addEventListener("click", () => handleClick("Rock"));
choiceBtn.addEventListener("click", () => handleClick("Paper"));
choiceBtn.addEventListener("click", () => handleClick("Scissors"));

playGame();
