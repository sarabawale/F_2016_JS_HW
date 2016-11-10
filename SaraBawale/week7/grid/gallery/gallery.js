// this exercise has two objectives
// 1) get you comfortable with the jquery docs
// 2) get you to build something fun

make = function(){
	var num = parseInt($('.input').val());

	for(var i=1; i<=num; i++){
		var source = 'subway/' + i + '.gif';
		var pic = $('<img>').attr('src', source);
		$('.wrapper').append(pic);
	}
}

$(document).ready(function(){
	$('.input-box').on('click', '.go', make);

	$('.wrapper').on('click', 'img', function(){ //hide picture on click
		$(this).css('display', 'none');
	});

});

// Bonus!
// hmm, it just keeps adding images to the button when I run it again
// how can you clear the wrapper?