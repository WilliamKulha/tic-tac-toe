//Business Logic











//User Logic
$(document).ready(function() {
  $('form#play_style_form').submit(function(event) {
    event.preventDefault();

    $('#player_select').slideUp();
    $('#game_board').slideDown();

    let gameStyle = parseInt($('input:radio[name=play_style]:checked').val());
    console.log(gameStyle);
  });
});
