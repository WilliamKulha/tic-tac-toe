
//Business Logic
function Game (player1, player2, board) {
  this.player1 = player1;
  this.player2 = player2;
  this.turnsArray = [0, 1];
  this.currentTurn = turnsArray[0]
  this.board = board;
}

Game.prototype.nextTurn = function() {
  if (this.currentTurn === turnsArray[0]) {
    this.currentTurn = turnsArray[1]
  } else {
    this.currentTurn = turnsArray[0]
  }
}

Game.prototype.whoseTurn = function() {
  if (this.currentTurn === turnsArray[0]) {
    return this.player1
  } else if (this.currentTurn === turnsArray[1]) {
    return this.player2
  }
}

Game.prototype.currentMark = function() {
  if (this.currentTurn === turnsArray[0]) {
    return 'X'
  } else {
    return 'O'
  }
}

Game.prototpe.checkWin(board, player) {
  //use reduce method. It'll go through every thing in the array. A is what is returned. I is the index
  let plays = board.reduce((accumulator, element, index) =>
  //If the element is equal to the player, then we'll push that index to the array.
    (element === player) ? accumulator.concat(index) :accumulator, []);
  let gameWon = null;
  for (let [index, win] of board.winCombos.entries()) {
    //has the player played in every spot that counts as a win for that win array entry?
    if(win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = {index: index, player: player};
      break;
    }
  }
  return gameWon;
}
//add method for checking for winner after other objects have been defined.

function Player(mark) {
  this.mark = mark;
}

Player.prototype.whichMark = function() {
  console.log(this.mark);
}

Player.prototype.turnClick = function() {
  turn(square.target.id, this.mark)
}

function Spaces() {
  const cells = document.querySelectorAll('.cell');
  for (let currentCell = 0; currentCell <cells.length; currentCell++) {
    cells[currentCell].innerText = '';
    cells[currentCell].addEventListener('click', turnClick, false);
  }
}

Spaces.prototype.beenMarked = function(spaceNumber) {
  if((cells.item(spaceNumber).innerText) != '') {
    console.log((cells.item(spaceNumber).innerText))
  } else if (cells.item(spaceNumber).innerText === '') {
    return
  }
}


function Board(spaces, winningcombos) {
  this.spaces = spaces;
  this.winCombos = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [3, 4, 5],
    [6, 7, 8], [6, 4, 2]
  ]
}

Board.prototype.markSpace = function(spaceNumber, currentMark) {

  }

}

function turn(squareID, mark) {
  origBoard[squareID] = mark;
  document.getElementById(squareId).innerText = mark;
}





//User Logic
$(document).ready(function() {
  let origBoard;

  $('form#play_style_form').submit(function(event) {
    event.preventDefault();

    $('#player_select').slideUp();
    $('#game_board').slideDown();

    const playerX = 'X';
    const playerO = '0';
    const winCombos = [
      [0, 1, 2], [0, 3, 6], [0, 4, 8],
      [1, 4, 7], [2, 5, 8], [3, 4, 5],
      [6, 7, 8], [6, 4, 2]
    ]

    const cells = document.querySelectorAll('.cell');
    startGame();


    function startGame() {
      origBoard = Array.from(Array(9).keys());
      for (let currentCell = 0; currentCell <cells.length; currentCell++) {
        cells[currentCell].innerText = '';
        cells[currentCell].addEventListener('click', turnClick, false);
      }
    }

    function turnClick(square) {
      turn(square.target.id, player)
    }

    function turn(squareID, player) {
      origBoard[squareID] = player;
      document.getElementById(squareId).innerText = player;
      let gameWon = checkWin(origBoard, player)
      if (gameWon) gameOver(gameWon)
    }

    function checkWin(board, player) {
      //use reduce method. It'll go through every thing in the array. A is what is returned. I is the index
      let plays = board.reduce((accumulator, element, index) =>
      //If the element is equal to the player, then we'll push that index to the array.
        (element === player) ? accumulator.concat(index) :accumulator, []);
      let gameWon = null;
      for (let [index, win] of winCombos.entries()) {
        //has the player played in every spot that counts as a win for that win array entry?
        if(win.every(elem => plays.indexOf(elem) > -1)) {
          gameWon = {index: index, player: player};
          break;
        }
      }
      return gameWon;
    }

    function gamOver(gameWon) {
      for (let index of winCombos[gomeWon.index]) {
        document.getElementById(index).style.backgroundColor =
          gameWon.player === playerX ? "blue" : "red"
      }
      for (let index = 0; index <cells.length; index++) {
        cells[i].removeEventListener('click', turnclick, false)
      }
    }
  });
});
