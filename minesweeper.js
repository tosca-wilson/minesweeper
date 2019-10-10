document.addEventListener('DOMContentLoaded', startGame)


var board = {
  cells: [
    {
      row: 0,
      col: 0, 
      isMine: false,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 0,
      col: 1, 
      isMine: false,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 0,
      col: 2, 
      isMine: false,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 0,
      col: 3, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 1, 
      col: 0, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 1, 
      col: 1, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 1, 
      col: 2, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 1, 
      col: 3, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2, 
      col: 0, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2, 
      col: 1, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2, 
      col: 2, 
      isMine: true,
      isMarked: false,
      hidden: true
    },
    {
      row: 2, 
      col: 3, 
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 3, 
      col: 0, 
      isMine: false,
      isMarked: false,
      hidden: true
    },{
      row: 3, 
      col: 1, 
      isMine: false,
      isMarked: false,
      hidden: true
    },{
      row: 3, 
      col: 2, 
      isMine: false,
      isMarked: false,
      hidden: true
    },{
      row: 3, 
      col: 3, 
      isMine: false,
      isMarked: false,
      hidden: true
    }
    ]
}

function startGame () {
  for (i =0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

document.addEventListener("click", checkForWin)

document.addEventListener("contextmenu", checkForWin)

function checkForWin () {
  {
    for (i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
        return;
      } else
      if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
        return;
      }
    }
  lib.displayMessage('You win!')
}


function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0; 
  for (i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine === true){
      count = count + 1;
    }
  }
return count
}