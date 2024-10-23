// script.js
function getComputerChoice() {
    var things = ['rock', 'paper', 'scissors'];
    return things[Math.floor(Math.random() * things.length)];
}

function calculateWinner(userChoice, pcChoice) {
    if (userChoice === pcChoice) {
        return "It's a tie!";
    } else if ((userChoice === "rock" && pcChoice === "scissors") ||
               (userChoice === "scissors" && pcChoice === "paper") ||
               (userChoice === "paper" && pcChoice === "rock")) {
        return "You win!";
    } else {
        return "PC wins!";
    }
}

function playGame() {
    var userChoice = alert(prompt("Enter your choice: rock, paper, or scissors").toLowerCase()); 

    // Validate user input
    if (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return; // Exit the function if the input is invalid
    }

    var pcChoice = getComputerChoice(); // Get computer's choice
    var result = calculateWinner(userChoice, pcChoice); // Get the result

    alert("You chose: " + userChoice + "\nPC chose: " + pcChoice + "\nResult: " + result); // Show result in alert

    // Ask if the user wants to play again
    var playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame(); // Restart the game
    }
}

// Automatically start the game when this script runs
playGame();