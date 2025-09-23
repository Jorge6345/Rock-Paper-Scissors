let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let humanChoice = prompt("Tell me whether you want to play rock, paper, or scissors:");
    let lowerCaseHumanChoice = humanChoice.toLocaleLowerCase();

    return lowerCaseHumanChoice;
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

function displayScore(currentRound, numberOfRounds) {
    if (currentRound <= numberOfRounds) {
        console.log("Your current score: " + humanScore);
        console.log("Computer current score: " + computerScore);
    }
    else {
        console.log("Your final score: " + humanScore);
        console.log("Computer final score: " + computerScore);
    }
}

function playGame() {
    const numberOfRounds = 5;

    for (let currentRound = 1; currentRound <= numberOfRounds; currentRound++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("You selected: " + humanSelection);
        console.log("The computer selected: " + computerSelection);

        playRound(humanSelection, computerSelection);
        displayScore(currentRound, numberOfRounds);
        console.log();
    }

    if (humanScore > computerScore) {
        console.log("You win the entire match!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose the entire match!");
    }
    else {
        console.log("The match is a tie!");
    }
    displayScore(numberOfRounds + 1, numberOfRounds);
}

playGame();