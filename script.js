const buttons = document.querySelectorAll('.allbuttons');
const results = document.getElementById("displayres");
const score = document.getElementById("displayscore");

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

function playGame(){
    let humanScore = 0, computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toString().toLowerCase();
        computerChoice = computerChoice.toString().toLowerCase();
        score.textContent =   `Computer: ${computerScore} - Player: ${humanScore}`;
        if(humanChoice == "rock"){
            if(computerChoice == "rock"){
                results.textContent = "You Tie! Try Again!";
            }else if(computerChoice == "scissors"){
                results.textContent = "You Win!";
                score.textContent = "hi";
                playerScore+=1;
                
            }else{
                results.textContent = "You Lose!";
                computerScore+=1;
                
            }
        }else if(humanChoice == "scissors"){
            if(computerChoice == "scissors"){
                results.textContent = "You Tie! Try Again!";
            }else if(computerChoice == "paper"){
                results.textContent = "You Win!";
                humanScore+=1;
                
            }else{
                results.textContent = "You Lose!";
                computerScore+=1;
                
            }
        }else{
            if(computerChoice == "paper"){
                results.textContent = "You Tie! Try Again!";
            }else if(computerChoice == "rock"){
                results.textContent = "You Win!";
                humanScore+=1;
                
            }else{
                results.textContent = "You Lose!";
                computerScore+=1;
                
            }
        }
        score.textContent =   `Computer: ${computerScore} - Player: ${humanScore}`;
    }
    buttons.forEach(btn => {
        btn.addEventListener("click", () => playRound(btn.textContent, getComputerChoice()));
            
    })
        
    
    
    
}

playGame();

/*let humanSelection = 
    let computerSelection = getComputerChoice();
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
    playRound(humanSelection, computerSelection); */