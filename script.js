//Event listeners for three buttons

let scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", getPlayerChoice);


let paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", getPlayerChoice);


let stoneButton = document.querySelector("#stone");
stoneButton.addEventListener("click", getPlayerChoice);

let playerSelect = "";

function getPlayerChoice(event) {

    let compChoice = getComputerChoice();
    let compResults = document.createElement("p");
    compResults.textContent = `The computer picked ${compChoice}`;
    document.querySelector(".scoreboard").appendChild(compResults);

    playerSelect = event.target.id;
    let playerResults = document.createElement("p");
    playerResults.textContent = `You picked ${playerSelect}`;
    document.querySelector(".scoreboard").appendChild(playerResults);

    //
    console.log(playRound(playerSelect, compChoice));
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


let computerSelect = getComputerChoice();

let playerScore = 0;

let computerScore = 0;

function playRound (playerSelect, computerSelect) {

    switch(true) {
        case (playerSelect == "stone" && computerSelect == "scissors"):
            return `You win! Stone beats scissors. You get ${++playerScore} points.`;
            break;
        case (playerSelect == "stone" && computerSelect == "paper"):
            return `You lose! Paper beats stone. The computer gets ${++computerScore} points.`;
            break;
        case (playerSelect == "paper" && computerSelect == "scissors"):
            return `You lose! Scissors beats paper. The computer gets ${++computerScore} points.`;
            break;
        case (playerSelect == "paper" && computerSelect == "stone"):
            return `You win! Paper beats stone. You get ${++playerScore} points.`;
            break;
        case (playerSelect == "scissors" && computerSelect == "paper"):
            return `You win! Scissors beats paper. You get ${++playerScore} points.`;
            break;
        case (playerSelect == "scissors" && computerSelect == "stone"):
            return `You lose! Stone beats scissors. The computer gets ${++computerScore} points.`;
            break;
        case (playerSelect == "scissors" && computerSelect == "scissors"):
        case (playerSelect == "paper" && computerSelect == "paper"):    
        case (playerSelect == "stone" && computerSelect == "stone"):
            return "It's a tie!"
            break;
        
    }

}

// console.log(playRound(playerSelect, computerSelect));

// playerSelect = getPlayerChoice();
// computerSelect = getComputerChoice();
// console.log(playRound(playerSelect, computerSelect));

// playerSelect = getPlayerChoice();
// computerSelect = getComputerChoice();
// console.log(playRound(playerSelect, computerSelect));

// playerSelect = getPlayerChoice();
// computerSelect = getComputerChoice();
// console.log(playRound(playerSelect, computerSelect));

// playerSelect = getPlayerChoice();
// computerSelect = getComputerChoice();
// console.log(playRound(playerSelect, computerSelect));

// if (playerScore > computerScore) {
//     alert("Congrats, you're the winner! :D");
// } else if (computerScore > playerScore) {
//     alert("The computer won, better luck next time!")
// } else {
//     alert("There is no clear winner. Try the game all over again!")
// }   
