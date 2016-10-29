console.log("game.js is working");

//Walked through/modified in Class 5 (10/20)

function Game() {
	this.guesses;
	this.guessedLetters = []; //array of strings
	this.currentWord = ""; //later becomes Word object
	this.answer = "";

	this.startGame = function(wordsArray){ //wordsArray is array of strings
		this.guesses = 10;

		//selects random word from wordsArray
		var ranNum = Math.floor(Math.random() * wordsArray.length);
		var ranWord = wordsArray[ranNum];

		this.currentWord = new Word();
		this.currentWord.getLetters(ranWord);
		this.answer = ranWord;

		this.guessedLetters = []; //resets guessedLetters
	}

	this.guess = function(letter){
		if(this.guessedLetters.indexOf(letter) == -1){ //has the letter been guessed yet?
			if(this.currentWord.try(letter) == false){
				this.guesses--;
				this.guessedLetters.push(letter);
			}
		}
	}

	this.isOver = function(){
		if(this.guesses == 0 || this.currentWord.isFound()){
			return true;
		} else{
			return false;
		}
	}

	this.overMessage = function(){
		if(this.currentWord.isFound() && this.guesses > 0){
			return "You win!";
		} else if(this.guesses == 0){
			return "You lose.";
		} else if(!this.isOver()){
			return "";
		}
	}

	this.render = function(){
		return this.currentWord.render() + "\n" +
		this.guesses + " guesses left." + "\n"
		+ "Guessed letters: " + this.guessedLetters;
	}
}