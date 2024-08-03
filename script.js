

function getComputerChoice(){
    let num = Math.random();
    if(num < 0.333){
        return "Paper";
    }else if(num < 0.667){
        return "Rock";
    }else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let answer = prompt("What do you choose?");
    return answer;
}


function playGame(){
    let humanScore, computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toString().toLowerCase();
        computerChoice = computerChoice.toString().toLowerCase();
        if(humanChoice == "rock"){
            if(computerChoice == "rock"){
                console.log("Tie! Try again");
            }else if(computerChoice == "scissors"){
                console.log("You win!");
                humanScore+=1;
            }else{
                console.log("You lose!");
                computerScore+=1;
            }
        }else if(humanChoice == "scissors"){
            if(computerChoice == "scissors"){
                console.log("Tie! Try again");
            }else if(computerChoice == "paper"){
                console.log("You win!");
                humanScore+=1;
            }else{
                console.log("You lose!");
                computerScore+=1;
            }
        }else{
            if(computerChoice == "paper"){
                console.log("Tie! Try again");
            }else if(computerChoice == "rock"){
                console.log("You win!");
                humanScore+=1;
            }else{
                console.log("You lose!");
                computerScore+=1;
            }
        }
    }
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
    
}

playGame();