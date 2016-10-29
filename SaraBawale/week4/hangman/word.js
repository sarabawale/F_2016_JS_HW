console.log("word.js is working");

//Walked through/modified in Class 5 (10/20)

function Word() {
	this.letters = []; //array of letter objects

	this.getLetters = function(newWord){ //takes in string
		var temp = newWord.split(""); //splits string by every letter, forms array
		for(var i=0; i<temp.length; i++){ //creates Letter object for every letter
			this.letters.push(new Letter(temp[i]));
		}
	}

	this.isFound = function(){
		for(var i=0; i<this.letters.length; i++){
			if(this.letters[i].hidden){
				return false; //breaks out of function if returns false
			}
		}

		return true; //only returns true if no letters are hidden
	}

	this.try = function(letter){
		var match = false;
		for(var i=0; i<this.letters.length; i++){
			if(this.letters[i].value == letter){
				this.letters[i].show();
				match = true;
			}
		}

		return match;
	}

	this.render = function(){
		var ren = "";
		for(var i=0; i<this.letters.length; i++){
			ren += this.letters[i].render() + " "; //uses render function from Letter
		}

		return ren;
	}
}