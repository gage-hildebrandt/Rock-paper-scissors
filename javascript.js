document.body.style.backgroundColor = 'black';

const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playGame() {
  let playerChoice = ('Rock, Paper, or Scissors?').toLowerCase();
  let computer = computerChoice();
}
  
  // add if/else statement to determine winner
function result() {
  if (playerChoice === computer) {
    alert('It is a tie');
  } else if (playerChoice === 'rock' && computer === 'scissors' ||
             playerChoice === 'paper' && computer === 'rock' ||
             playerChoice === 'scissors' && computer === 'paper') {
    alert('You win!');
  } else {
    alert('Computer wins!');
  }
  return computerChoice;
}

const resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  document.body.appendChild(resultDiv);

  // playGame();

const button1 = document.createElement('button');
  button1.textContent = 'Rock';
  button1.addEventListener('click', function() {
  alert('You chose Rock!');
});
  document.body.appendChild(button1);

const button2 = document.createElement('button');
  button2.textContent = 'Paper';
  button2.addEventListener('click', function() {
  alert('You chose Paper!');
});
  document.body.appendChild(button2);

const button3 = document.createElement('button');
  button3.textContent = 'Scissors';
  button3.addEventListener('click', function() {
  alert('You chose Scissors!');
});
  document.body.appendChild(button3);

  resultDiv.textContent = result;

    

