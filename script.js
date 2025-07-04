const hands = [ "rock", "paper", "scissors" ];
const results = document.querySelector("#results")
const rockButton = document.querySelector("#rockbutton")
const paperButton = document.querySelector("#paperbutton")
const scissorsButton = document.querySelector("#scissorsbutton")

let humanScore = 0
let computerScore = 0

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice(3);

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
    return sign.toLowerCase();
}




function playRound(humanChoice,computerChoice) {
    
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++; 
        console.log("You win! Rock beats scissors!");
        }

        else if (humanChoice === 'rock' && computerChoice === 'paper'){
            computerScore++;
            console.log("You lose! Paper beats rock!");
            }

        else if (humanChoice === 'rock'  && computerChoice === 'rock'){
            console.log("Tie! Try again!");
            }

        else if (humanChoice === 'scissors'  && computerChoice === 'paper'){
            humanScore++
            console.log("You win! Scissors beats paper!");
            }

        else if (humanChoice === 'scissors'  && computerChoice === 'rock'){
            computerScore++
            console.log("You lose! Rock beats scissors!");
            }

        else if (humanChoice === 'scissors'  && computerChoice === 'scissors'){
            console.log("Tie! Try again!");
            }

        else if (humanChoice === 'paper'  && computerChoice === 'rock'){
            humanScore++
            console.log("You win! Paper beats rock!");
            }

        else if (humanChoice === 'paper'  && computerChoice === 'scissors'){
            computerScore++
            console.log("You lose! Scissors beats paper!");
            }

        else if (humanChoice === 'paper'  && computerChoice === 'paper'){
            console.log("Tie! Try again!");
            }
}

function playGame() {
    playRound(humanSelection,computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(3);
    playRound(humanSelection,computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(3);
    playRound(humanSelection,computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(3);
    playRound(humanSelection,computerSelection);
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice(3);
    playRound(humanSelection,computerSelection);

    if (humanScore > computerScore) {
        console.log("You Win! Bask in the Glory of Alex!!!")
    }
    else if (humanScore === computerScore) {
        console.log("Tie. Awkward...")
    }
        else(console.log("You Lose! Pathetic."))
}

playGame();

const currentScore = document.createElement("p");
let newScore = currentScore.textContent = (humanScore + " : " + computerScore);
results.appendChild(currentScore);  

