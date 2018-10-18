//Business Logic









//User Logic
$(document).ready(function() {
  $('form#play_style_form').submit(function(event) {
    event.preventDefault();
    $('#player_select').slideUp();
    $('#game_board').slideDown();
  });
});
