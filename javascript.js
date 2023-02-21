const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playGame() {
  let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
  let computer = computerChoice();
  
  // add if/else statement to determine winner
  if (playerChoice === computer) {
    console.log('It is a tie');
  } else if (playerChoice === 'rock' && computer === 'scissors' ||
             playerChoice === 'paper' && computer === 'rock' ||
             playerChoice === 'scissors' && computer === 'paper') {
    console.log('You win!');
  } else {
    console.log('Computer wins!');
  }
}

playGame();




    

