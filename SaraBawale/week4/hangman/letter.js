console.log("letter.js is working");

//Walked through/modified in Class 5 (10/20)

function Letter(value) {
	this.value = value; //string
	this.hidden = true;

	this.hide = function(){
		this.hidden = true;
	}

	this.show = function(){
		this.hidden = false;
	}

	this.render = function(){
		if(this.hidden){
			return "_";
		} else if(!this.hidden){
			return this.value;
		}
	}
}