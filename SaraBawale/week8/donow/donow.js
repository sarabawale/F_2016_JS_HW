console.log('working yo')

$(document).ready(function(){

	//add an event listener for the button

	$(".pushme").click(addImage);

})

//function addimage
//add an image to the body tag

var addImage = function(){
	var arr = ["https://imgflip.com/s/meme/One-Does-Not-Simply.jpg", "https://imgflip.com/s/meme/Y-U-No.jpg", "http://www.relatably.com/m/img/funny-blank-memes/Confused-Baby-Meme-Blank-07.jpg", "https://imgflip.com/s/meme/Hipster-Ariel.jpg", "https://s-media-cache-ak0.pinimg.com/236x/34/3f/06/343f061e25ba86b98bf6c983130d2783.jpg", "https://i.imgflip.com/cgp1b.jpg"];
	var ran = Math.floor((Math.random() * arr.length));
	var im = $("<img>").attr("src", arr[ran]);
	$("body").append(im);
}