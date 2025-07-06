const hands = [ "rock", "paper", "scissors" ];
const results = document.querySelector("#results")
const rockButton = document.querySelector("#rockbutton")
const paperButton = document.querySelector("#paperbutton")
const scissorsButton = document.querySelector("#scissorsbutton")

let humanScore = 0
let computerScore = 0



function getComputerChoice(max) {
    const randomHand = Math.floor(Math.random() * max);
    return hands [randomHand];
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

const currentScore = document.createElement("p");

function displayScore() {
let newScore = currentScore.textContent = ("You: " + humanScore + " | " + "Computer: " + computerScore);
results.appendChild(currentScore);  
}

rockButton.addEventListener ("click", () => {
    let computerSelection = getComputerChoice(3);
    playRound("rock",computerSelection);
    displayScore();
    scoreCheck();
})
paperButton.addEventListener ("click", () => {
    let computerSelection = getComputerChoice(3); 
    playRound("paper",computerSelection);
    displayScore();
    scoreCheck();
})
scissorsButton.addEventListener ("click", () => {
    let computerSelection = getComputerChoice(3);
    playRound("scissors",computerSelection);
    displayScore();
    scoreCheck();
})



function scoreCheck() {
    if (humanScore === 5) {
        alert ("You Win! Play another round!");
        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        alert("Game Over! You Lose!");
        humanScore = 0;
        computerScore = 0;
    }
}

