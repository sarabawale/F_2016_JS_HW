//objects.js

var myCar = {
	make: "Oldsmobile",
	year: "1988",
	color: "white",
	miles: 0,

	drive: function(distance){
		this.miles += distance; //refers to this car object
	}
}

var movie = {
	title: "Mulan",
	director: "Tony Bancroft and Barry Cook",
	year: "1998",
	stars: ["Ming-Na", "Eddie Murphy", "Miguel Ferrer", "BD Wong"],
	genre: ["comedy", "drama", "family"],
	watched: 0,

	watch: function(){
		alert("You are watching a movie!");
		this.watched++;
	},

	characters: function(){
		for(var i=0; i<this.stars.length; i++){
			console.log(this.stars[i] + " rocks!");
		}
	}
}