let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    switch (random){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'rock';
    }
}

function getHumanChoice(){
    return prompt('Choose your fighter! (Enter Rock, Paper, or Scissors)');
}

function playRound(humanChoice = "", computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice; //0 = rock, 1 = paper, 2 = scissors
    
    if((human == 'rock' && computer == 'paper') 
        || (human == 'paper' && computer == 'scissors') 
        || (human == 'scissors' && computer == 'rock')){
        console.log(`You Lose! ${computer} beats ${human}`);
        computerScore++;
    }

    if((human == 'rock' && computer == 'scissors') 
        || (human == 'paper' && computer == 'rock') 
        || (human == 'scissors' && computer == 'paper')){
        console.log(`You Win! ${human} beats ${computer}`);
        humanScore++;
    }

    if(human == computer){
        console.log(`DRAW`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
