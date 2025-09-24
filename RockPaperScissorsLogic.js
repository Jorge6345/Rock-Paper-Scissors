let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const numberOfRounds = 5;

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

const displayCurrentRound = document.querySelector(".current-round");

const displayChoicesContainer = document.querySelector(".choices");
const displayComputerChoice = document.querySelector(".computer-choice");
const displayHumanChoice = document.querySelector(".human-choice");

const displayHumanScore = document.querySelector(".player-score");
const displayComputerScore = document.querySelector(".computer-score");

const displayRoundWinner = document.querySelector(".display-round-winner");

const playAgainButton = document.querySelector(".play-again");

function getComputerChoice() {
    let randomNumber = Math.random();
    let randomChoice = "";

    if (randomNumber <= 0.33) {
        randomChoice = "rock";
    }
    else if (randomNumber <= 0.66) {
        randomChoice = "paper";
    }
    else {
        randomChoice = "scissors";
    }

    return randomChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("This round it's a tie.\n");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win this round! Rock beats Scissors\n");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win this round! Paper beats Rock\n");
        humanScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win this round! Scissors beats Paper\n");
        humanScore += 1;
    }
    else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lose this round. Rock beats Scissors\n");
        computerScore += 1;
    }
    else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lose this round. Paper beats Rock\n");
        computerScore += 1;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lose this round. Scissors beats Paper\n");
        computerScore += 1;
    }
}

function displayScore() {
    displayHumanScore.textContent = "Your Score: " + humanScore;
    displayComputerScore.textContent = "Computer Score: " + computerScore;
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    if (currentRound >= numberOfRounds)
    {
        displayComputerChoice.textContent = "The computer selected " + computerSelection + " on round#" + (currentRound);

        if (humanScore > computerScore) {
            displayRoundWinner.textContent = "You won this match!";
        }
        else if (humanScore < computerScore) {
            displayRoundWinner.textContent = "You lost this match.";
        }
        else {
            displayRoundWinner.textContent = "This match is a tie.";
        }

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;

        playAgainButton.style.display = "block";
        // After match is over, reset match if "Play again" button is pressed 
        playAgainButton.addEventListener("click", () => {
            currentRound = 1;
            humanScore = 0;
            computerScore = 0;

            rockButton.disabled = false;
            paperButton.disabled = false;
            scissorsButton.disabled = false;

            if (currentRound <= numberOfRounds) {
                displayCurrentRound.textContent = "Current Round: " + currentRound + "/" + numberOfRounds;
            }
            displayComputerChoice.textContent = "The computer selected " + computerSelection.toUpperCase() + " on round #" + (currentRound - 1);
            displayHumanChoice.textContent = "You selected " + humanSelection.toUpperCase() + " on round #" + (currentRound - 1);

            displayScore();

            displayRoundWinner.textContent = "";

            playAgainButton.style.display = "none";
            displayComputerChoice.style.display = "none";
            displayHumanChoice.style.display = "none";
        });
    }

    currentRound++;
    if (currentRound <= numberOfRounds) {
        displayCurrentRound.textContent = "Current Round: " + currentRound + "/" + numberOfRounds;
    }
    displayComputerChoice.style.display = "block";
    displayHumanChoice.style.display = "block";
    displayComputerChoice.textContent = "The computer selected " + computerSelection.toUpperCase() + " on round #" + (currentRound - 1);
    displayHumanChoice.textContent = "You selected " + humanSelection.toUpperCase() + " on round #" + (currentRound - 1);

    displayScore();
}

playAgainButton.style.display = "none";
displayCurrentRound.textContent = "Current Round: " + currentRound + "/" + numberOfRounds;
rockButton.addEventListener("click", () => playGame("rock", currentRound));
paperButton.addEventListener("click", () => playGame("paper", currentRound));
scissorsButton.addEventListener("click", () => playGame("scissors", currentRound));