console.log("game.js is working");

function Game() {
	this.guesses = 0;
	this.guessedLetters = []; //array of strings
	this.words = []; //array of strings
	this.currentWord = "";

	this.startGame = function(wordsArray){ //wordsArray is array of strings
		guesses = 10;
		guessedLetters = []; //reset guessedLetters
		words = []; //reset words

		//Selects random word from wordsArray
		var randLoc = Math.floor((Math.random() * wordsArray.length-1) + 1);
		var rand = new Word(wordsArray[randLoc]);
		currentWord = rand;

		for(var i=0; i<wordsArray.length; i++){
			words.push(wordsArray[i]);
		}

	}

	this.wordArray = function(){
		var loc = Math.floor((Math.random() * words.length-1) + 1);
		currentWord = new Word(words[loc]);
		currentWord.getLetters(currentWord.letters);
	}

	this.guess = function(letter){
		var match = false;
		if(guessedLetters.indexOf(letter) >= 0){
			var resp = prompt("You've already guessed that letter. Try another:");
			letter = resp;
		} else if (guessedLetters.indexOf(letter) < 0){
			guessedLetters.push(letter);
			var state = currentWord.try(letter);
			if(state){
				letter.show();
				match = true;
			} else{
				match = false;
			}
		}

		return match;
	}

	this.isOver = function(){
		if(guesses == 0 || currentWord.isFound()){
			return true;
		} else{
			return false;
		}
	}

	this.overMessage = function(){
		if(currentWord.isFound()){
			return "You win!";
		} else if(guesses == 0){
			return "You lose.";
		} else if(!this.isOver()){
			return "";
		}
	}

	this.render = function(){
		return currentWord.render() + " with " + guesses + " left.";
	}
}
