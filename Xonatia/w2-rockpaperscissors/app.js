console.log('yo js works');

//put your code here
//The while loop doesnt work after I try to confirm that I want to play again

var play = confirm("Let's play rock, paper, or scissors!"); 

//this keeps track of how many games the player has played
var computerscore = 0;
var playerscore = 0; 
var tie = 0;

while(play == true){
  
  var player = prompt("Choose rock, paper, or scissors.");
  var array = ["rock", "paper", "scissors"];
  var randomValue = array[Math.floor(Math.random() * array.length)];
  
if(player == "rock") {
   alert("The computer chooses: " + randomValue);
   if(randomValue != player && randomValue == "paper")
   {
     alert("Computer score is " + (computerscore = computerscore + 1));
   }
   else if(randomValue != player && randomValue == "scissors")
     {
     alert("The player score is " + (playerscore = playerscore + 1));
     }
   else alert("The tie is " + (tie = tie + 1));
   
} 
else if(player == "paper"){
    alert("The computer chooses: " + randomValue);
    if(randomValue != player && randomValue == "scissors") {
      alert("The computer scores is " + (computerscore = computerscore + 1));
    }
    else if(randomValue != player && randomValue == "rock") {
      alert("The player score is" + (playerscore = playerscore + 1));
    }
    else alert("The tie is" + (tie = tie + 1));
    
}
else if(player == "scissors")
{
  alert("The computer chooses: " + randomValue); 
  if(randomValue != player && randomValue == "rock") 
    {
      alert("The computer score " + (computerscore = computerscore + 1));
    }
   else if (randomValue != player && randomValue == "paper"){
     alert("The player score is " + (playerscore = playerscore + 1)); 
   }
   else alert("The tie is " + (tie = tie + 1)); 
}

var playagain = confirm("Do you want to play again?")
   if(playagain == true){
     //I need help returning to the while loop
   }
   else console.log("Your score is: " + playerscore + "The computerscore score is " + computerscore + "The number of ties are " + tie);
   
}