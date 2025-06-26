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



function playRound(humanChoice,computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++; 
        console.log("You win! Rock beats scissors!");
            console.log(humanScore,computerScore);}

        else if (humanChoice === 'rock' && computerChoice === 'paper'){
            computerScore++;
            console.log("You lose! Paper beats rock!");
                console.log(humanScore,computerScore);}

        else if (humanChoice === 'rock'  && computerChoice === 'rock'){
            console.log("Tie! Try again!");
                console.log(humanScore,computerScore);}

        else if (humanChoice === 'scissors'  && computerChoice === 'paper'){
            humanScore++
            console.log("You win! Scissors beats paper!");
                console.log(humanScore,computerScore);}

        else if (humanChoice === 'scissors'  && computerChoice === 'rock'){
            computerScore++
            console.log("You lose! Rock beats scissors!");
                console.log(humanScore,computerScore);}

        else if (humanChoice === 'scissors'  && computerChoice === 'scissors'){
            console.log("Tie! Try again!");
                console.log(humanScore,computerScore)}

        else if (humanChoice === 'paper'  && computerChoice === 'rock'){
            humanScore++
            console.log("You win! Paper beats rock!");
                console.log(humanScore,computerScore)}

        else if (humanChoice === 'paper'  && computerChoice === 'scissors'){
            computerScore++
            console.log("You lose! Scissors beats paper!");
                console.log(humanScore,computerScore)}

        else if (humanChoice === 'paper'  && computerChoice === 'paper'){
            console.log("Tie! Try again!");
                console.log(humanScore,computerScore)}
}

playRound();