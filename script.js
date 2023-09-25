function getPlayerChoice() {

    let choice = prompt("Let's play scissors paper stone! Please enter one of three options: scissors, paper, stone");
    if (choice === null || choice === ""){
      alert("Thats OK, come play again another day.");
    } else if (choice.toLowerCase() && (choice.toLowerCase() == "scissors" || choice.toLowerCase() == "paper" || choice.toLowerCase() == "stone")){
      return choice.toLowerCase();
    } else {
      alert("Oops! You must have made a typo.");  
        
    }
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
let playerSelect = getPlayerChoice();

let computerSelect = getComputerChoice();

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

playerSelect = getPlayerChoice();
computerSelect = getComputerChoice();
console.log(playRound(playerSelect, computerSelect));

playerSelect = getPlayerChoice();
computerSelect = getComputerChoice();
console.log(playRound(playerSelect, computerSelect));

playerSelect = getPlayerChoice();
computerSelect = getComputerChoice();
console.log(playRound(playerSelect, computerSelect));

playerSelect = getPlayerChoice();
computerSelect = getComputerChoice();
console.log(playRound(playerSelect, computerSelect));