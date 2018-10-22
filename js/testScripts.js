//Business Logic
function Game (player1, player2, board, isVsComp) {
  this.player1 = player1;
  this.player2 = player2;
  this.turnsArray = ['X', 'O'];
  this.currentTurn = this.turnsArray[0]
  this.board = board;
  this.originalBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  this.isVsComp = isVsComp;
}

Game.prototype.nextTurn = function() {
  if (this.currentTurn === this.turnsArray[0]) {
    this.currentTurn = this.turnsArray[1]
  } else {
    this.currentTurn = this.turnsArray[0]
  }
}

Game.prototype.currentTurn = function() {
  return this.currentTurn;
}

Game.prototype.checkWin = function() {
  this.board.winCombos.forEach((combo) => {
    let firstCell = combo[0];
    let secondCell = combo[1];
    let thirdCell = combo[2];
    if (this.originalBoard[firstCell] === this.originalBoard[secondCell] && this.originalBoard[thirdCell] === this.originalBoard[firstCell] && this.originalBoard[thirdCell] != '') {
      document.getElementById(`${firstCell}`).style.backgroundColor = "#00FA9A";
      document.getElementById(`${secondCell}`).style.backgroundColor = "#00FA9A";
      document.getElementById(`${thirdCell}`).style.backgroundColor = "#00FA9A";
      if (this.currentTurn === 'X') {
        setTimeout(function(){
          $('#game_board').slideUp();
          $('#gameOver').show();
          $('.winner_here').text('X has won!')
        }, 2000);
      } else {
        setTimeout(function(){
          $('#game_board').slideUp();
          $('#gameOver').show();
          $('.winner_here').text('O has won!')
        }, 2000);
      }
    } else {
      return false;
    }
  });
}

Game.prototype.checkDraw = function() {
  let isLetter = /^[a-zA-Z]+$/;
  function isAMark(index) {
    return isLetter.test(index)
  }
  let checkArray = this.originalBoard.filter(isAMark)
  console.log(checkArray, this.originalBoard)
  if (checkArray.length === this.originalBoard.length) {
    $('#game_board').slideUp();
    $('#gameOver').show();
    $('.winner_here').text(`It's a draw!`)
  }
}


Game.prototype.computerTurn = function() {
  if (this.isVsComp === 'yes') {
    let possibleMoves = [];
    let board = this.originalBoard;
    for(let index = 0; index <= board.length; index++) {
      let currentIndex = board[index]
      if (typeof(currentIndex) === 'number') {
        possibleMoves.push(currentIndex);
      }
    }
    let spotToUse = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    document.getElementById(`${spotToUse}`).innerText = this.currentTurn;
    this.originalBoard[spotToUse] = this.currentTurn;
    $(`#${spotToUse}`).unbind('click');

  } else if (this.isVsComp === 'yeshard') {

  }
}

function Player(mark) {
  this.mark = mark;
}

function Board() {
  this.cells = document.querySelectorAll('.cell');
  for (let currentCell = 0; currentCell <this.cells.length; currentCell++) {
    this.cells[currentCell].innerText = '';
    }
  this.winCombos = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [3, 4, 5],
    [6, 7, 8], [6, 4, 2]
  ]
}

emptyIndices = function(boardToCheck){
  return boardToCheck.filter(s => s != 'O' && s != 'X');
}


//User Logic
$(function() {
  $('form#play_style_form').submit(function(event) {
    event.preventDefault();

    $('#player_select').hide();
    $('#game_board').slideDown();
    let isVsComp = $('input:radio[name=play_style]:checked').val();
    let playerX = new Player('X');
    let playerO = new Player('O');
    let newBoard = new Board();
    const newGame = new Game(playerX, playerO, newBoard, isVsComp);
    console.log(newGame);


    $('#0').click(function() {
      document.getElementById('0').innerText = newGame.currentTurn;
      newGame.originalBoard[0] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#0').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#1').click(function() {
      document.getElementById('1').innerText = newGame.currentTurn;
      newGame.originalBoard[1] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#1').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#2').click(function() {
      document.getElementById('2').innerText = newGame.currentTurn;
      newGame.originalBoard[2] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#2').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#3').click(function() {
      document.getElementById('3').innerText = newGame.currentTurn;
      newGame.originalBoard[3] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#3').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#4').click(function() {
      document.getElementById('4').innerText = newGame.currentTurn;
      newGame.originalBoard[4] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#4').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#5').click(function() {
      document.getElementById('5').innerText = newGame.currentTurn;
      newGame.originalBoard[5] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#5').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#6').click(function() {
      document.getElementById('6').innerText = newGame.currentTurn;
      newGame.originalBoard[6] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#6').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#7').click(function() {
      document.getElementById('7').innerText = newGame.currentTurn;
      newGame.originalBoard[7] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#7').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
    $('#8').click(function() {
      document.getElementById('8').innerText = newGame.currentTurn;
      newGame.originalBoard[8] = newGame.currentTurn;
      newGame.checkWin();
      newGame.checkDraw();
      newGame.nextTurn();
      $('#8').unbind('click');
      if (newGame.isVsComp === 'yes') {
        setTimeout(function(){
        newGame.computerTurn();
        newGame.checkWin();
        newGame.nextTurn();
        }, 2000);
      }
    });
  });
});
