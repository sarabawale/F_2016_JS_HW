$(document).ready(function() {
	 $(".go").click(function(){
		var term = $(".search").val();
	 	search(term);
	 })
});

var search = function(term){
	$.ajax({
    	url: "http://www.omdbapi.com/?t=" + term + "&y=&plot=full&r=json",
    	method: "GET"
    }).done(render);

}

var render = function(response){
	var wrapper = $(".wrapper");
	wrapper.empty();

	for(var i = 0; i < response.data.length; i++){
		var title = $("<h1>").text(response.data[i].title);
		var year = $("<h2>").text(response.data[i].year);
		var director = $("<p>").text("Director: " + response.data[i].director);
		var actors = $("<p>").text("Actors: " + response.data[i].actors);
		var plot = $("<p>").text(response.data[i].plot);

		wrapper.append(title, year, director, actors, plot);
	}
}

//function, render(response)
//render the response to the wrapper

//first, clear out the contents of the wrapper
//use the reponse object to create the following content
//h1, set the contents to the movie title
//append to the result

//h2, set the contents to the movie year
//append to the result

//paragraph, set contents to "Director: " + the directors name
//append to the result

//paragraph, set contents to "Actors: " + the directions name
//append to the result

//paragraph, set contentes to the plot

//Bonuse, if the movie received an award, put a star next to the title.