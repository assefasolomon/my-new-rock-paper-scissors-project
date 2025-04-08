let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
}

function updateScoreAndDisplay(resultText, playerChoice, computerChoice) {
  document.getElementById("round-result").textContent = `
    You chose ${playerChoice}, computer chose ${computerChoice}.
    ${resultText}
  `;

  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
}

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    updateScoreAndDisplay(result, playerChoice, computerChoice);
  });
});
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
      const finalMessage = playerScore === 5 ? "🎉 You win the game!" : "💻 Computer wins the game!";
      alert(finalMessage);
      playerScore = 0;
      computerScore = 0;
    }
  }
  
  // After updating score
  updateScoreAndDisplay(result, playerChoice, computerChoice);
  checkWinner();
  