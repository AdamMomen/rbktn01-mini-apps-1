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
  'X': { player: "player1", playing: false },
  'O': { player: "player2", playing: false },
}

//fucntion converts object to 2D array 3X3
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

//check winner
function checkWinner() {
  if (checkAllDiagonal() === 'X' || checkAllHorizontalRow() === 'X' || checkAllVerticalColumn() === 'X') {
    return players['X']  // 'X' : {player1: false},
    // 'O' : {player2: false},
  }
  if (checkAllDiagonal() === 'O' || checkAllHorizontalRow() === 'O' || checkAllVerticalColumn() === 'O') {
    return 'O'
  }
  return null;
}
//check  all diagonal
function checkAllDiagonal() {

  let counterO = 0;
  let counterX = 0;

  for (let i = 0; i < boardArr.length; i++) {
    for (let j = 0; j < boardArr.length; j++) {
      if (i + j === 2 || i === j) {
        boardArr[i][j] === 'O' ? counterO++ :
          boardArr[i][j] === 'X' ? counterX++ : '';
      }
    }
  }
  if (counterO > 2) {
    return 'O';
  }
  if (counterX > 2) {
    return 'X'
  }
  return null;
}

//check all verticalally
function checkAllVerticalColumn() {
  for (let i = 0; i < boardArr.length; i++) {
    if (checkVerticalColumn(i) === 'O') {
      return 'O'
    }
    if (checkVerticalColumn(i) === 'X') {
      return 'X'
    }
  }
  return null;
}

//check verticalally
function checkVerticalColumn(column) {
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i < boardArr[column].length; i++) {
    boardArr[i][column] === 'O' ? counterO++ :
      boardArr[i][column] === 'X' ? counterX++ : '';
  }
  if (counterO > 2) {
    return 'O';
  }
  if (counterX > 2) {
    return 'X'
  }
  return null;
}

// checking all Horizontal
function checkAllHorizontalRow() {
  for (let i = 0; i < boardArr.length; i++) {
    if (checkHorizontalRow(i) === 'O') {
      return 'O'
    }
    if (checkHorizontalRow(i) === 'X') {
      return 'X'
    }
  }
  return null;
}
// checking Horizontal
function checkHorizontalRow(row) {
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i < boardArr[row].length; i++) {
    boardArr[row][i] === 'O' ? counterO++ :
      boardArr[row][i] === 'X' ? counterX++ : '';
  }
  if (counterO > 2) {
    return 'O';
  }
  if (counterX > 2) {
    return 'X'
  }
  return null;
}

//function that adds a x to element
function play(event, index) {
  //create a sub funtion that will the check the rule of the next player
  event.textContent === '' ?
    event.textContent = scanBoard(index) : ''
}

//function that scans the scans the spot if it's empty
function scanBoard(index) {
  if (board[index] === '-') {
    board[index] = nextPlayer();
    console.log(`Player ${board[index]}`)
    obj2Arr();
    var winner = checkWinner()
    if (winner) {
      return alert(`Congratulation ${winner.player} You Won! `)
    }
    return board[index]
  }
  return;
}

//function that alternate between X - O returns the next movement
function nextPlayer() {
  // debugger;
  if (!players['X']['playing'] && !players['O']['playing']) {
    players['X']['playing'] = !players['X']['playing']
    return 'X'
  }
  if (players['X']['playing'] && !players['O']['playing']) {
    players['X']['playing'] = !players['X']['playing']
    players['O']['playing'] = !players['O']['playing']
    return 'O'
  }
  if (!players['X']['playing'] && players['O']['playing']) {
    players['X']['playing'] = !players['X']['playing']
    players['O']['playing'] = !players['O']['playing']
    return 'X'
  }
}
// function that will scan the board and put the values in an array


// main function self envoked Adds event listeneing for the DOM
(() => {
  var resetBtn = document.querySelectorAll(".Reset")
  document.querySelectorAll(".grid-item")
    .forEach((one, index) => {
      one.addEventListener('click', () => {
        play(one, index)
      });
    })
  resetBtn.addEventListener('click', () => {
    //envoke reset function
  })
})()
