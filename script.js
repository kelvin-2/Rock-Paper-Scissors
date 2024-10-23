function playGame() {
    var userChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase(); // Convert user input to lowercase
    var pcChoice = getComputerChoice();  // Get the computer's choice

    // Calculate and display the winner
    var result = calculateWinner(userChoice, pcChoice);
    alert("User chose: " + userChoice + ", PC chose: " + pcChoice + ". " + result);
}
