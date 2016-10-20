console.log("letter.js is working");

function Letter(value) {
	this.value = value;
	this.hidden = false;

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


var A = new Letter("a");