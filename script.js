function getComputerChoice()
{
    var things = ['Rock', 'Paper', 'Scissor'];
    var thing = things[Math.floor(Math.random()*things.length)];
    return thing;
}
function getHumanChoice(choice){
    let pcChoicie=getComputerChoice();
    if(pcChoice === choice) {
        console.log("We have a tie");
        alert("We have a tie");  // Use alert to display the message to the user
    } 
    else if(choice === "rock" && pcChoice === "Paper") {
        console.log(pcChoice + " PC wins ");
        alert(pcChoice + " PC wins ");
    } 
    else if(choice === "rock" && pcChoice === "Scissors") {
        console.log("You win!");
        alert("You win!");
    } 
    else if(choice === "paper" && pcChoice === "Rock") {
        console.log("You win!");
        alert("You win!");
    } 
    else if(choice === "paper" && pcChoice === "Scissors") {
        console.log(pcChoice + " PC wins ");
        alert(pcChoice + " PC wins ");
    } 
    else if(choice === "scissors" && pcChoice === "Rock") {
        console.log(pcChoice + " PC wins ");
        alert(pcChoice + " PC wins ");
    } 
    else if(choice === "scissors" && pcChoice === "Paper") {
        console.log("You win!");
        alert("You win!");
    }
    
}