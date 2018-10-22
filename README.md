# _Tic Tac Toe_

#### _A tic tac toe web app, 10-22-2018_

#### By _**William Kulha**_

## Description

_This is a webpage that I made to practice BDD and OO javaScript with learnhowtoprogram.com. The web app allows two players to play against one another or one player to play vs the computer._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
**Program Gathers User Input** | User input: 2players | Output: game board without computer turns running.|
**Player takes a turn** | User input: clicks on cell number 3 | Output: that player's mark is put into that cell, and the array that stores the moves is updated to reflect the move.|
**Program checks if anyone has won after every turn** | Input: player clicks on cell 6 | Output: if the player has three marks in a row, the game returns that the player has won, otherwise it continues. |
**If the player has won, the game board is hidden and an announcement that the player has won is displayed** | Input: Player clicks a cell that gives them three marks in a row | Output: 'Player {the player's symbol} has won!' |
**If the player has not won, check if the game is a draw** | Input: Player clicks on the last available space, and does not win. | Output: 'It's a draw!' |
**Regardless of the outcome, if the game is over a button is shown to the player(s) that allows them to play again** | Input: Player clicks last available square. | Output: "RESULT", and a play again button. |



## Setup/Installation Requirements

* _Download or clone this repo <code>$git clone https://github.com/wkulha/tic-tac-toe.git</code>_
* _Navigate to the folder where you saved the directory._
* _Open with the browser of your choice and enjoy_


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_If you have any questions or advice, please email me at kulha.william@gmail.com_

## Technologies Used

_javascript_\
_jQuery_\
_Bootstrap 3_

### License

*This Tic Tac Toe web app is licensed under the MIT License*

Copyright (c) 2018 **_William Kulha_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
