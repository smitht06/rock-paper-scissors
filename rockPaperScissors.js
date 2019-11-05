const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper'){
    return userInput;
  }else{
    return 'Error'
  }
};
const getComputerChoice = computerChoice => {
  randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1: 
      return 'paper';
    case 2:
      return 'scissors';
  }
}
const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'The game is a tie!';
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won!';
    }else{
      return 'You Won!';
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer Won';
    }else{
      return 'You won!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The Computer won!';
    }else{
      return 'You Won!';
    }
  }
}
var user = getUserChoice('paper');
var computer = getComputerChoice();
console.log(user);
console.log(computer);
console.log(determineWinner(user,computer));