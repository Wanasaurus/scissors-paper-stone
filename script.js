let playerSelection = prompt("Let's play scissors paper stone! Please enter one of three options: scissors, paper, stone");

if (playerSelection == null || playerSelection == "") {
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