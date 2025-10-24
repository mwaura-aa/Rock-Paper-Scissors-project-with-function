const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0
};
const reset = document.getElementById("reset");



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
reset.onclick = function (){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0
  localStorage.removeItem('score');
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
  
    }

    if(result === "You Win"){
      score.wins += 1;
    }
    else if(result === "You Lose"){
      score.losses += 1;
    }
    else if(result === "Tie"){
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    window.alert("Your Choice: " + userChoice + "\n"+ "Computer Choice: " + compChoice + "\n" + result + "\n" + "Wins: " + score.wins + "Losses: " + score.losses + "Ties: " + score.ties);
  }

  localStorage.setItem("name", 'joseph');

  console.log(localStorage.getItem("name"));

  
