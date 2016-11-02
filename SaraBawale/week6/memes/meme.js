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

	$(".new").click(function(){
		var arr = ["https://imgflip.com/s/meme/One-Does-Not-Simply.jpg", "https://imgflip.com/s/meme/Y-U-No.jpg", "http://www.relatably.com/m/img/funny-blank-memes/Confused-Baby-Meme-Blank-07.jpg", "https://imgflip.com/s/meme/Hipster-Ariel.jpg", "https://s-media-cache-ak0.pinimg.com/236x/34/3f/06/343f061e25ba86b98bf6c983130d2783.jpg", "https://i.imgflip.com/cgp1b.jpg"];
		var ran = Math.floor((Math.random() * arr.length));
		$(".start").text("");
		$(".punch").text("");
		$(".image").css("background-image", "url(" + arr[ran] + ")");
	});

});



