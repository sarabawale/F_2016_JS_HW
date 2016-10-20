console.log("main.js working");

var testWords = ["acres", "adult", "advice", "arrangement", "attempt", "August", "autumn", "border", "breeze", "brick", 
			 "calm", "canal", "casey", "cast", "chose", "claws", "coach", "constantly", "contrast", "cookies", "customs", 
			 "damage", "danny", "deeply", "depth", "discussion", "doll", "donkey", 
			 "egypt", "ellen", "essential", "exchange", "exist", "explanation", 
			 "facing", "film", "finest", "fireplace", "floating", "folks", "fort", 
			 "garage", "grabbed", "grandmother", "habit", "happily", "Harry", "heading", "hunter", 
			 "illinois", "image", "independent", "instant", "january", "kids", "label", "lee", "lungs", 
			 "manufacturing", "martin", "mathematics", "melted", "memory", "mill", "mission", "monkey", "mount", "mysterious", 
			 "neighborhood", "norway", "nuts", "occasionally", "official", "ourselves", 
			 "palace", "pennsylvania", "philadelphia", "plates", "poetry", "policeman", "positive", "possibly", "practical", "pride", "promised", 
			 "recall", "relationship", "remarkable", "require", "rhyme", "rocky", "rubbed", "rush", 
			 "sale", "satellites", "satisfied", "scared", "selection", "shake", "shaking", "shallow", "shout", "silly", "simplest", "slight", "slip", "slope", "soap", "solar", "species", "spin", "stiff", "swung", 
			 "tales", "thumb", "tobacco", "toy", "trap", "treated", "tune", 
			 "university", "vapor", "vessels", "wealth", "wolf", "zoo"];


var playHangman = function() {
	var x = new Game();

	x.startGame(testWords);

	while(!x.isOver()){
		var response = prompt("This is the game so far: " + x.render() + " Please type in a letter to guess.");
		x.guess(response);
		if(x.guess(response) == true){

		} else{
			reponse = prompt("Sorry, that letter isn't in the word. Guess another:");
		}
	}
	
	if(x.isOver()){
		var replay = prompt("Game over. Would you like to play again? Type Y or N.");
		if(replay == "Y"){
			x.isOver() == false;
		} else if(replay == "N"){
			return x.overMessage();
		}
	}
}

//Lets play hangman!
playHangman();