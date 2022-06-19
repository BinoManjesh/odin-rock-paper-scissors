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
    let capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
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
        return "player";
    } else {
        return "computer";
    }
}
