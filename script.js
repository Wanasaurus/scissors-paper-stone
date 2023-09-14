let playerSelect = prompt("Let's play scissors paper stone! Please enter one of three options: scissors, paper, stone").toLowerCase();

if (playerSelect == null || playerSelect == "") {
    alert("That's OK, come play another day.")
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "scissors";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "stone";
    }
}

const computerSelect = getComputerChoice();

function playRound (playerSelect, computerSelect) {

    switch(true) {
        case (playerSelect == "stone" && computerSelect == "scissors"):
            return "You win! Stone beats scissors.";
            break;
        case (playerSelect == "stone" && computerSelect == "paper"):
            return "You lose! Paper beats stone.";
            break;
        case (playerSelect == "paper" && computerSelect == "scissors"):
            return "You lose! Scissors beats paper.";
            break;
        case (playerSelect == "paper" && computerSelect == "stone"):
            return "You win! Paper beats stone.";
            break;
        case (playerSelect == "scissors" && computerSelect == "paper"):
            return "You win! Scissors beats paper.";
            break;
        case (playerSelect == "scissors" && computerSelect == "stone"):
            return "You lose! Stone beats scissors.";
            break;
        case (playerSelect == "scissors" && computerSelect == "scissors"):
        case (playerSelect == "paper" && computerSelect == "paper"):    
        case (playerSelect == "stone" && computerSelect == "stone"):
            return "It's a tie!"
    }

}

console.log(playRound(playerSelect, computerSelect)); 

playerSelect;
getComputerChoice();
console.log(playRound(playerSelect, computerSelect)); 

playerSelect;
getComputerChoice();
console.log(playRound(playerSelect, computerSelect)); 

playerSelect;
getComputerChoice();
console.log(playRound(playerSelect, computerSelect)); 

playerSelect;
getComputerChoice();
console.log(playRound(playerSelect, computerSelect)); 