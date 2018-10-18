//Business Logic
function Game (player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.turnsArray = ['X', 'O'];
  this.currentTurn = this.turnsArray[0]
  this.board = board;
  this.originalBoard = Array.from(Array(9).keys());
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

Game.prototype.currentPlayer = function() {
  if (this.currentTurn === turnsArray[0]) {
    return this.player1;
  } else {
    return this.player2;
  }
}
Game.prototype.checkWin = function(game, board, player) {
  //use reduce method. It'll go through every thing in the array. A is what is returned. I is the index
  let plays = board.reduce((accumulator, element, index) =>
  //If the element is equal to the player, then we'll push that index to the array.
    (element === player) ? accumulator.concat(index) :accumulator, []);
  let gameWon = null;
  for (let [index, win] of game.board.winCombos.entries()) {
    //has the player played in every spot that counts as a win for that win array entry?
    if(win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}

Game.prototype.turnClick = function() {
  turn(square.target.id, Game.currentMark());
  function turn(squareID, mark) {
    origBoard[squareID] = mark;
    document.getElementById(squareId).innerText = mark;
  }

}
//add method for checking for winner after other objects have been defined.

function Player(mark) {
  this.mark = mark;
}

Player.prototype.whichMark = function() {
  console.log(this.mark);
}

function Board() {
  this.cells = document.querySelectorAll('.cell');
  for (let currentCell = 0; currentCell <this.cells.length; currentCell++) {
    this.cells[currentCell].innerText = '';
    this.cells[currentCell].addEventListener('click', Player.prototype.turnClick, false);
    }
  this.winCombos = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [3, 4, 5],
    [6, 7, 8], [6, 4, 2]
  ]
}

Board.prototype.beenMarked = function(cellNumber) {
  if((this.cells.item(cellNumber).innerText) != '') {
    console.log((this.cells.item(cellNumber).innerText))
  } else if (this.cells.item(cellNumber).innerText === '') {
    return
  }
}



//User Logic
$(function() {
  $('form#play_style_form').submit(function(event) {
    event.preventDefault();

    $('#player_select').hide();
    $('#game_board').slideDown();

    let playerX = new Player('X');
    let playerO = new Player('O');
    let newBoard = new Board();
    let newGame = new Game(playerX, playerO, newBoard);
    console.log(newGame);
    $('#0').click(function() {
      document.getElementById('0').innerText = newGame.currentTurn;
      newGame.originalBoard[0] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#0').unbind('click');
    });
    $('#1').click(function() {
      document.getElementById('1').innerText = newGame.currentTurn;
      newGame.originalBoard[1] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#1').unbind('click');
    });
    $('#2').click(function() {
      document.getElementById('2').innerText = newGame.currentTurn;
      newGame.originalBoard[2] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#2').unbind('click');
    });
    $('#3').click(function() {
      document.getElementById('3').innerText = newGame.currentTurn;
      newGame.originalBoard[3] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#3').unbind('click');
    });
    $('#4').click(function() {
      document.getElementById('4').innerText = newGame.currentTurn;
      newGame.originalBoard[4] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#4').unbind('click');
    });
    $('#5').click(function() {
      document.getElementById('5').innerText = newGame.currentTurn;
      newGame.originalBoard[5] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#5').unbind('click');
    });
    $('#6').click(function() {
      document.getElementById('6').innerText = newGame.currentTurn;
      newGame.originalBoard[6] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#6').unbind('click');
    });
    $('#7').click(function() {
      document.getElementById('7').innerText = newGame.currentTurn;
      newGame.originalBoard[7] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#7').unbind('click');
    });
    $('#8').click(function() {
      document.getElementById('8').innerText = newGame.currentTurn;
      newGame.originalBoard[8] = newGame.currentTurn;
      newGame.checkWin(newGame, newGame.originalBoard, newGame.currentTurn)
      newGame.nextTurn();
      $('#8').unbind('click');
    });
  });
});
