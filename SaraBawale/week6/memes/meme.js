console.log('working');

function memeMe(){
	var setup = prompt("Type a setup line for your meme:");
	var punch = prompt("Now type the punch line:");

	$(".start").text(setup);
	$(".punch").text(punch);
}

function addLike(){
	var count = parseInt($(".likes").text());
	count++;
	$(".likes").text(count);

}

$(document).ready(function(){
	$(".wrapper").append("<h1></h1>");

	$(".generate").click(function(){
		memeMe();
	});

	$(".like").click(function(){
		addLike();
	});

});

// BONUS!
// Create a new button
// If this button is pressed
  // clear the text
  // change the image to a new meme image
  // hint: the image is a background image to the .image class
  // Use the .css function to change it.

// SUPER BONUS!
// Create an an array of meme urls!
// When the new button is pressed, randomly select a meme image from the array!

// need help finding meme worthy images? 
// there are a ton of examples at https://memegenerator.net



