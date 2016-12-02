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
	$(".result").empty();
	
	var title = $("<h1>").text(response.Title);
	var year = $("<h2>").text(response.Year);
	var director = $("<p>").text("Director: " + response.Director);
	var actors = $("<p>").text("Actors: " + response.Actors);
	var plot = $("<p>").text(response.Plot);

	if(response.Awards != "N/A"){
		title.append("*");
	}

	$(".result").append(title, year, director, actors, plot);
	
}