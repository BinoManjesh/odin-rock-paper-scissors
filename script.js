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

function playRound(playerSelection, computerSelection) {
    let capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    if (playerSelection === computerSelection) {
        return `It's a Tie! ${playerSelection} ties ${computerSelection}`
    }
    let playerWon = 
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper");
    if (playerWon) {
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lost! ${computerSelection} beats ${playerSelection}`;
    }
}
