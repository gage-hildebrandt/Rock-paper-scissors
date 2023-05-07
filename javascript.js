document.body.style.backgroundColor = 'grey';

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let comptuterScore = 0;

function computerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playGame(playerChoice) {
  let computer = computerChoice();
  let div = document.createElement('div');
  document.body.appendChild(div);
  
  // add if/else statement to determine winner
  if (playerChoice === computer) {
    alert('It is a tie');
  } else if (playerChoice === 'rock' && computer === 'scissors' ||
             playerChoice === 'paper' && computer === 'rock' ||
             playerChoice === 'scissors' && computer === 'paper') {
    alert('You win!');
    playerScore++;
  } else {
    alert('Computer wins!');
    computerScore++;
  }
  return computerChoice;
}

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Player score :';
document.body.appendChild(paragraph2);
paragraph2.style.position = 'absolute';
paragraph2.style.top = '80%';
paragraph2.style.right = '45%';
paragraph2.style.fontSize = '40px';

const paragraph = document.createElement('p');
paragraph.textContent = 'Computer score :';
document.body.appendChild(paragraph);
paragraph.style.position = 'absolute';
paragraph.style.top = '85%';
paragraph.style.right = '45%';
paragraph.style.fontSize = '40px';

const header2 = document.createElement('Header');
header2.textContent = 'What will you choose?';
document.body.appendChild(header2);
header2.style.textAlign = 'center';
header2.style.position = 'absolute';
header2.style.top = '25%';
header2.style.left = '38%';
header2.style.fontSize = '40px';

const header = document.createElement('HEADER');
header.textContent = 'Rock, Paper, Scissors!';
header.style.color = 'white';
header.style.textAlign = 'center';
header.style.fontSize = '40px';
document.body.appendChild(header);

const button1 = document.createElement('button');
button1.textContent = 'Rock';
button1.style.padding = '110px';
button1.style.margin = '45px';
button1.style.marginLeft = '200px';
button1.style.alignContent = 'left';
button1.style.fontSize ='35px';
button1.addEventListener('click', function() {
  playGame('rock');
});
document.body.appendChild(button1);

const button2 = document.createElement('button');
button2.textContent = 'Paper';
button2.style.padding = '110px';
button2.style.marginLeft ='570px';
button2.style.fontSize ='35px';
button2.addEventListener('click', function() {
  playGame('paper');
});
document.body.appendChild(button2);

const button3 = document.createElement('button');
button3.textContent = 'Scissors';
button3.style.fontSize ='35px';
button3.style.padding = '110px';
button3.style.marginLeft = '630px';
button3.addEventListener('click', function() {
  playGame('scissors');
});
document.body.appendChild(button3);

if (playerScore === 5 || computerScore === 5) {
  let winner = playerScore > computerScore ? 'Player' : 'Computer';
  alert(`${winner} wins the game!`);
}


