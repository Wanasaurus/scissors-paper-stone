let playerSelect = prompt("Let's play scissors paper stone! Please enter one of three options: scissors, paper, stone");

if (playerSelect == null || playerSelect == "") {
    alert("That's OK, come play another day.")
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Scissors";
    } else if (choice === 1) {
        return "Paper";
    } else if (choice === 2) {
        return "Stone";
    }
}

const computerSelect = getComputerChoice();

function playRound (playerSelect, computerSelect) {

    switch(true) {
        case (playerSelect == "Stone" && computerSelect == "Scissors"):
            return "You win! Stone beats scissors.";
            break;
        case (playerSelect == "Stone" && computerSelect == "Paper"):
            return "You lose! Paper beats stone.";
            break;
        case (playerSelect == "Paper" && computerSelect == "Scissors"):
            return "You lose! Scissors beats paper.";
            break;
        case (playerSelect == "Paper" && computerSelect == "Stone"):
            return "You win! Paper beats stone.";
            break;
        case (playerSelect == "Scissors" && computerSelect == "Paper"):
            return "You win! Scissors beats paper.";
            break;
        case (playerSelect == "Scissors" && computerSelect == "Stone"):
            return "You lose! Stone beats scissors.";
            break;
        case (playerSelect == "Scissors" && computerSelect == "Scissors"):
        case (playerSelect == "Paper" && computerSelect == "Paper"):    
        case (playerSelect == "Stone" && computerSelect == "Stone"):
            return "It's a tie!"
    }

}

console.log(playRound(playerSelect, computerSelect));

