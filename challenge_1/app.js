var boardArr = [];
var board = {
  0: '-',
  1: '-',
  2: '-',
  3: '-',
  4: '-',
  5: '-',
  6: '-',
  7: '-',
  8: '-',

}
// object of player movement
var players = {
  'O': false,
  'X': false,
}

//fucntion converts object to 2D array 
function obj2Arr() {
  boardArr = []
  let arr = [];
  for (var key in board) {
    if (key === "8") {
      arr.push(board[key])
      boardArr.push(arr);
      console.log(boardArr)
      return boardArr;
    }
    if (key === "3" || key === "6") {
      boardArr.push(arr);
      arr = []
    }
    arr.push(board[key])
  }
}


checkAllVerticalRow() {
  for (let i = 0; i < boardArr.length; i++) {

    if (checkVerticalRow(i) === 'O')
  }
}
// checking vertical
function checkVerticalRow(row) {
  for (let j = 0; j < boardArr.length; j++) {
    counterX = 0;
    counterO = 0;
    for (let i = 0; i < boardArr[j].length; i++) {
      boardArr[row][i] === 'O' ? counterO++ :
        boardArr[row][i] === 'X' ? counterX++ : '';
    }
  }
  if (counterO > 2) {
    return 'O'
  }
  if (counterO > 2) {
    return 'X'
  }
  return null;
}

//function that adds a x to elemten
function play(event, index) {
  /// debugger;
  //create a sub funtion that will the check the rule of the next player
  event.firstChild.nodeValue === '-' ?
    event.firstChild.nodeValue = scanBoard(index) : ''
}

//function that scans the scans the spot if it's empty
function scanBoard(index) {
  if (board[index] === '-') {
    board[index] = nextPlayer();
    obj2Arr();
    return board[index]
  }
  return;
}

//function that alternate between X - O returns the next movement
function nextPlayer() {
  // debugger;
  if (!players['X'] && !players['O']) {
    players['X'] = !players['X']
    return 'X'
  }
  if (players['X'] && !players['O']) {
    players['X'] = !players['X']
    players['O'] = !players['O']
    return 'O'
  }
  if (!players['X'] && players['O']) {
    players['X'] = !players['X']
    players['O'] = !players['O']
    return 'X'
  }
}
// function that will scan the board and put the values in an array

document.querySelectorAll(".grid-item")
  .forEach((one, index) => {
    one.addEventListener('click', () => {
      play(one, index)
    });
  });
