let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(){
    return prompt("Choose your fighter! (Enter Rock, Paper, or Scissors)");
}

console.log(getHumanChoice())
