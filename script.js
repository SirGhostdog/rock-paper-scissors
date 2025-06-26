// Computer randomly picks a one of the options
// Player manually types in their option.
// program needs to know which combinations win or lose
// Program needs to keep track of wins
const hands = [ "rock", "paper", "scissors" ];

const humanScore = 0
const computerScore = 0



function getComputerChoice(max) {
    const randomHand = Math.floor(Math.random() * max);
    return hands [randomHand];
}


function getHumanChoice() {
    let sign = prompt("Test your luck!")

    if (sign === "") {
        console.log("You have to put something!")
    } else if (sign.toLowerCase() === "rock") {
        console.log("Solid Choice!")
    } else if (sign.toLowerCase() === "scissors"){
        console.log("You're Sharp!")
    } else if (sign.toLowerCase() === "paper") {
        console.log("Crispy.")
    } else {console.log("That's not an option...")}  
}

getHumanChoice();

function playRound(humanChoice,computerChoice) {

}