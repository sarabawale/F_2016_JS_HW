console.log("word.js is working");

function Word(letters) {
	this.letters = letters; //array of letter objects

	this.getLetters = function(newWord){
		var allLetters = [];
		for(var i=0; i<newWord.length; i++){
			var letterOb = new Letter(newWord[i]);
			allLetters.push(letterOb);
		}

		return allLetters;
	}

	//Need to test with game class
	this.isFound = function(){
		var found = false;
		for(var i=0; i<letters.length; i++){
			if(letters[i].hidden){
				found = false;
			} else if(!letters[i].hidden){
				found = true;
			}
		}

		return found;
	}

	this.try = function(letter){ //accepts an input argument, a string goes through letters and reveals the ones whose value matches the input argument `letter`returns a boolean indicating if the letter was found
		var match = false;
		for(var i=0; i<letters.length; i++){
			if(letters[i] == letter){
				match = true;
				letters[i].show();
			}
		}

		return match;
	}

	//Need to test with game class
	this.render = function(){ //returns the word in its "guessed state." ex: for the word 'closure', if the letters l, s, and e have been guessed, this function should return the string `"_ l _ s _ _ e"`
		var ren = "";
		for(var i=0; i<letters.length; i++){
			if(letters[i].isFound()){
				ren += letters[i];
			} else if(!letters[i].isFound()){
				ren += "_";
			}
		}

		return ren;
	}
}

var W = new Word("test");
