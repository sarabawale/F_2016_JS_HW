//once page is loaded, hit the giphy api and get some json
//append the images on the screen

$(document).ready(function(){
	//use AJAX to hit an api
	$.ajax({
		url: "http://api.giphy.com/v1/gifs/search?q=pizza&api_key=dc6zaTOxFJmzC",
		method: "GET" //this is just asking the server for data
	}).done(render); //.done wants a callback function

});

//this is our callback function
var render = function(response){ //the parameter is the response from the server
	debugger;
}