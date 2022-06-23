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

function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function getWinner(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    let isValid = str => str === "Rock" || str === "Paper" || str === "Scissors";
    if (!isValid(playerSelection) || !isValid(computerSelection)) {
        return undefined;
    }
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

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let winner = getWinner(playerSelection, computerSelection);
    switch(winner) {
        case "Player":
            ++playerScore;
            console.log(`You won! ${playerSelection} beats ${computerSelection}`);
            break;
        case "Computer":
            ++computerScore;
            console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
            break;
        case null:
            console.log(`It's a tie! ${playerSelection} ties ${computerSelection}`);
            break;
    }
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
