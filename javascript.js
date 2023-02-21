const choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
   let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playerVsComp() {
    let playerChoice = prompt('Rock, Paper, or Scissors?');
    return randomChoice;
}

function checkWinner (playerChoice, randomChoice){
    switch (playerChoice){
        case 'Rock':
        return randomChoice == 'Scissors' ? 'Player' : 'Computer';
        case 'Scissors':
        return randomChoice == 'Paper' ? 'Player' : 'Computer';
        case 'Paper':
        return randomChoice == 'Rock' ? 'Player' : 'Computer';
    
        } 
    } 

    getComputerChoice();
    playerVsComp();
    checkWinner();
    function playRound(playerChoice, randomChoice){
        const result = checkWinner(playerChoice, randomChoice);
        if(result == 'Tie'){
            return 'It is a tie';
        }
        else if(result == 'Player'){
            return 'You have won!'
        }
        else{
            return 'You lose!'
        }
    }

playerVsComp();
getComputerChoice();
checkWinner();
playRound();




    

