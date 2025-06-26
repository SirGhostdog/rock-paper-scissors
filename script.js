// compare computer output to human output
const hands = [ "rock", "paper", "scissors" ];

let humanScore = 0
let computerScore = 0

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(3);

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
    return sign
}

if (humanChoice === 'rock' && computerChoice === 'scissors')
    console.log("You win! Rock beats scissors!")






function playRound(humanChoice,computerChoice) {

}