console.log('yo js works');

//put your code here
var userScore = 0;
var compScore = 0;
var compArray = ["rock", "paper", "scissors"];
var playing = confirm("Would you like to play rock, paper scissors?");

while(playing){
  var userMove = prompt("Type rock, paper, or scissors.");
  var compMove = compArray[Math.floor(Math.random()*compArray.length)];
    
    if(userMove == "rock"){
      if(compMove == "paper"){
          compScore++;
      } else if(compMove == "scissors"){
          userScore++;
      }
    }
  
    if(userMove == "paper"){
      if(compMove == "scissors"){
          compScore++;
      } else if(compMove == "rock"){
          userScore++;
      }
    }
  
    if(userMove == "scissors"){
      if(compMove == "rock"){
          compScore++;
      } else if(compMove == "paper"){
          userScore++;
      }
    }
  
  var again = confirm("The score is User: " + userScore + ", Computer: " + compScore + ". Play again?");
  if(again){
    playing = true;
  } else{
    playing = false;
  }
}

alert("Final score: User " + userScore + ", Computer " + compScore);