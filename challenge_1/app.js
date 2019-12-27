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
//function that adds a x to elemten
function play(event, index) {
  //create a sub funtion that will the check the rule of the next player
  event.firstChild.nodeValue === '-' ?
    event.firstChild.nodeValue = scanBoard(index) : ''
}


function scanBoard(index) {
  if (board[index] === '-') {
    console.log(board)
    return board[index] = nextPlayer();
  }
  return;
}



//function that alternate between X - O returns the next movement
function nextPlayer() {
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

// function scanBoard() {
//   board = document.querySelectorAll(".grid-item")
//     .forEach((one, index) => {
//       if (index > 8) { break };
//       console.log(index, one.firstChild.nodeValue)
//       board[index] = one.firstChild.nodeValue;
//     });
//   console.log(board)
// }
document.querySelectorAll(".grid-item")
  .forEach((one, index) => {
    one.addEventListener('click', () => {
      play(one, index)
    });
  });
