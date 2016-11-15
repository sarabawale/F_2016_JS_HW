$(document).ready(function() {
  $('.go').click(addSong);
})

var addSong = function() {
  var song = $('.song').val();
  var artist = $('.artist').val();
  var key = 'dYCUBk0KGp5svzfr2JU2rT' //password that IFTTT requires
  var event = 'spotify'

  //ajax post method - posts data to the server
  $.post('https://maker.ifttt.com/trigger/' + event +
    '/with/key/' + key, {
      value1: song,
      value2: artist
    })
}
