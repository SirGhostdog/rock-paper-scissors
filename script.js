// Computer randomly picks a one of the options
// Player manually types in their option.
// program needs to know which combinations win or lose
// Program needs to keep track of wins
const hands = [ "Rock", "Paper", "Scissors" ];

function getComputerChoice(max) {
    const randomHand = Math.floor(Math.random() * max);
    return hands [randomHand];
}

function getHumanChoice() {

}

function playRound(humanChoice,computerChoice) {

}