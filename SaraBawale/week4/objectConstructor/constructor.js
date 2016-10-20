console.log('working');
//constructor function: job is to create new objects

var Car = function(make, model, year, color, miles){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.miles = miles;

	this.drive = function(distance){
		this.miles += distance;
	}
}

var oliviaCar = new Car("Toyota", "Prius", "2006", "Blue", 20000);
var avivaCar = new Car("Honda", "Odyssey", "2008", "Silver", 150000);


var Movie = function(title, director, year, stars, genre, rating, watched){
	this.title = title;
	this.director = director;
	this.year = year;
	this.stars = stars;
	this.genre = genre;
	this.rating = rating;
	this.watched = watched;

	this.watch = function(){
		this.watched++;
	};

	this.printOut = function(){
		var actors = "";
		for(var i=0; i<stars.length; i++){
			if(i == stars.length-1){
				actors += "and " + stars[i] + ". ";
			} else{
				actors += stars[i] + ", ";
			}
		}

		var response = title + " came out in " + year + ". The movie stars " + actors + "I rated it " + rating + " stars and have watched it " + watched + " times.";

		return response;
	}
}

var Mulan = new Movie("Mulan", "Tony Bancroft and Barry Cook", "1998", ["Ming-Na", "Eddie Murphy", "Miguel Ferrer", "BD Wong"], ["comedy", "drama", "family"], 4.5, 3);