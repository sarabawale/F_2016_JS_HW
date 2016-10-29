$(document).ready(function(){
	$("#title").html("Sara's Playlist");

	$(".playlist").append("<li>One Woman Army</li>", "<li>Disturbia</li>", "<li>Circus for a Psycho</li>");

	$('li:first-child').addClass('now-playing');

	$("li").addClass("played");

	$.each(["Lazy Song", "Loca", "Mad Hatter", "Rise", "Starting Today"], function(index, item){
		$("ul").append("<li>" + item + "</li>");
	});

});