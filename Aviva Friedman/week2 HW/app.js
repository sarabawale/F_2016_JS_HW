console.log('yo js works');

//put your code here

var userscore = 0; 
var computerscore = 0; 


var ask = confirm('Do you want to play Rock, Paper, Scissors?');  
if (ask == true){
	alert ('start playing!');
}
 else { 
 	alert ("thanks for playing! You're score is ("+  userscore + ")");

 }


var computerplayer;

var decimal = Math.random()*3;
console.log(decimal);
var random = Math.floor(decimal);
console.log(random);


if (random == 0); 
{computerplayer = "rock";}


if (random == 1); 
{computerplayer = "paper";}


if (random == 2); 
{computerplayer = "scissor";}

console.log(computerplayer);


var userplayer = prompt('Do you chose rock, paper, or scissors?')




if 
	(computerplayer == userplayer){
		alert('its a tie!')

	}

else if(computerplayer == 'rock' && userplayer == 'paper')

	{
		alert('User wins!'); 
		userscore++
	}

else if (computerplayer == 'rock' && userplayer == 'scissor')

{
	alert('Computer wins!'); 
	computerscore++
}


else if 
	(computerplayer == 'paper' && userplayer == 'rock')

{
	alert('Computer wins!');
	computerscore++
}

else if 
	(computerplayer == 'paper' && userplayer == 'scissor') 

{
	alert('User wins!'); 
	userscore++
}

else if
	(computerplayer == 'scissor' && userplayer == 'paper')

{
	alert('Computer wins!');
	computerscore++
}

else if 
	(computerplayer == 'scissor' && userplayer == 'rock')
{
	alert('User wins!');


	userscore++
}











