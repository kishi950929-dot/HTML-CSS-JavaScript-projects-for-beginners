const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");

const choiceIcons = {
  rock: "✊",
  paper: "🖐",
  scissors: "✌️",
};

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    const playerChoice = button.id;
    const computerChoice = computerPlay();

    playerChoiceEl.textContent = choiceIcons[playerChoice];
    computerChoiceEl.textContent = choiceIcons[computerChoice];

    playerChoiceEl.classList.remove("animate-choice");
    computerChoiceEl.classList.remove("animate-choice");
    
    setTimeout(() => {
      playerChoiceEl.classList.add("animate-choice");
      computerChoiceEl.classList.add("animate-choice");
    }, 10);
    //内置函数，要执行的代码+等待时间（ms），实际上是为了remove刷新
    //"animate-choice"是在css里定义的一个class样式

    playerChoiceEl.classList.remove("winner");
    computerChoiceEl.classList.remove("winner");

    const result = playRound(playerChoice, computerChoice);
    resultEl.textContent = result.message;

    if (result.winner === "player") {
        playerChoiceEl.classList.add("winner");
    }

    if (result.winner === "computer") {
        computerChoiceEl.classList.add("winner");
    }
        
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return {
      winner: "tie",
      message: "It's a tie!"
    }
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return {
      winner: "player",
      message: "You win! " + playerSelection + " beats " + computerSelection
    }
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return {
      winner: "computer",
      message: "You lose! " + computerSelection + " beats " + playerSelection
    }
  }}
