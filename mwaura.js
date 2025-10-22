const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function computerMove(){
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerMove = '';
  if(randomNumber === 1){
    computerMove = "Rock";
  }
  else if(randomNumber === 2){
    computerMove = "Paper";
  }
  else{
    computerMove = "Scissors";
  }
  return computerMove;
}

rock.onclick = function(){
  console.log(computerMove());
  const compChoice =  computerMove();
  
  results("Rock", compChoice);
}
paper.onclick = function (){
  console.log(computerMove());
  let compChoice = computerMove();
  results("paper", compChoice);
}
scissors.onclick = function (){
  console.log(computerMove());
  let compChoice = computerMove();
  
  results('scissors', compChoice);
}

  function results(userChoice, compChoice){
    if(userChoice === 'scissors'){
      if(compChoice === "Rock"){
    result = "You Lose";
  }
  else if(compChoice === "Paper"){
    result = "You Win";
  }
  else{
    result = "Tie";
  }
  window.alert("Your Choice: " + userChoice + "\n"+ "Computer Choice: " + compChoice + "\n" + result);
    }

    else if(userChoice === 'paper'){
      if(compChoice === "Rock"){
    result = "You Win";
  }
  else if(compChoice === "Paper"){
    result = "Tie";
  }
  else{
    result = "You Lose";
  }
  window.alert("Your Choice: " + userChoice + "\n"+ "Computer Choice: " + compChoice + "\n" + result);
    }

    else{
      if(compChoice === "Rock"){
    result = "Tie";
  }
  else if(compChoice === "Paper"){
    result = "You Lose";
  }
  else{
    result = "You Win";
  }
  window.alert("Your Choice: " + userChoice + "\n"+ "Computer Choice: " + compChoice + "\n" + result);
    }
  }

  