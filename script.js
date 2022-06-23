function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return null;
    }
    let playerWon = 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper");
    if (playerWon) {
        return "Player";
    } else {
        return "Computer";
    }
}

let playerScore = 0;
let computerScore = 0;
let scoreDisplay = document.querySelector("h2");
let resultDisplay = document.querySelector("h3");

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let winner = getWinner(playerSelection, computerSelection);
    let resultText;
    switch(winner) {
        case "Player":
            ++playerScore;
            resultText = `You won! ${playerSelection} beats ${computerSelection}`;
            break;
        case "Computer":
            ++computerScore;
            resultText = `You lost! ${computerSelection} beats ${playerSelection}`;
            break;
        case null:
            resultText = `It's a tie! ${playerSelection} ties ${computerSelection}`;
            break;
    }
    scoreDisplay.textContent = playerScore + " - " + computerScore;
    resultDisplay.textContent = resultText;
}

function rockClick() {
    playRound("Rock");
}

function paperClick() {
    playRound("Paper");
}

function scissorsClick() {
    playRound("Scissors");
}
