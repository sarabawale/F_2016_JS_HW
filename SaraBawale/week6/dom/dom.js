//this function fires once the document is loaded and ready
//i'm going to put all the code I want to run in here

$(document).ready(function(){
	var heading = $('#title').html('Daily to do list'); //accesses html of item with id #title, can modify the html
	var list = $('ul');
	list.prepend('<li>get up</li>'); //adds to the beginning of the list
	list.append('<li>snore</li>'); //adds to end of list

	// one line (omitting the list variable)
	$('ul').append('<li>dream</li>');

	//cycle: first create a new element then append/prepend it
	var happy = $('<h1>').text('all done!').css('color', '#BADA55'); //accessing and changing css
	var sad = $('<h2>').text('sad face');
	$('.wrapper').append(happy, sad); //wrapper is a parent element

	//same thing all in one line
	$('.wrapper').append($('<h1>').text('all done!'));

	//give 'teach class' a css class name of current
	$('li:contains("Teach Class")').addClass('current');

	//ITERATORS
	//explicit iteration, basically a for loop to go over the list
	// $("li").each(function(){ //function() is an anonymous callback function
	// 	$(this).addClass("done"); //this accesses the current item
	// });

	//implicit iteration, since li is an array, it will automatically iterate over the array
	//$("li").addClass("done");

	//add event listener
	$("li").click(function(){ //listens for clicks
		$(this).css("text-decoration", "line-through");
	});
	
});