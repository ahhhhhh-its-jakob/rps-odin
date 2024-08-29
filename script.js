let playerScore = 0, computerScore = 0;

const buttons = document.querySelector('.buttons');
const roundResults = document.querySelector('.round-results');
const playerTally = document.querySelector('.player-score');
const computerTally = document.querySelector('.computer-score');


buttons.addEventListener('click', (event) => {
    let playerChoice = event.target.id;console.log(playerChoice);
    playRound(playerChoice, getComputerChoice());
});

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
    let computer = computerChoice; 
    
    if((human == 'rock' && computer == 'paper') 
        || (human == 'paper' && computer == 'scissors') 
        || (human == 'scissors' && computer == 'rock')){
        roundResults.textContent = `You lose this round! ${computer} beats ${human}`;
        computerScore++;
    }

    if((human == 'rock' && computer == 'scissors') 
        || (human == 'paper' && computer == 'rock') 
        || (human == 'scissors' && computer == 'paper')){
        roundResults.textContent = `You win this round! ${human} beats ${computer}`;
        playerScore++;
    }

    if(human == computer){
        roundResults.textContent = `DRAW`;
    }

    if(playerScore === 5){
        roundResults.textContent = `YOU WIN! ${playerScore} - ${computerScore}.`;
        computerScore = 0;
        playerScore = 0;
    }

    if(computerScore === 5){
        roundResults.textContent = `YOU LOSE! ${playerScore} - ${computerScore}.`;
        computerScore = 0;
        playerScore = 0;
    }

    playerTally.textContent = playerScore;
    computerTally.textContent = computerScore;
}



