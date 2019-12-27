
//function that adds a x to elemten
function play(event) {
    //create a sub funtion that will the check the rule of the next player

    event.firstChild.nodeValue === '-' ?
        event.firstChild.nodeValue = nextPlayer() : ''
}

document.querySelectorAll(".grid-item")
    .forEach(one => {
        one.addEventListener('click', () => {
            play(one)
            Board();
            console.log(Board)
        });
    });


// object of player movement
var players = {
    'O': false,
    'X': false,
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
//function that will scan the board and put the values in an array
var Board = [];
function scanBoard() {
    return document.querySelectorAll(".grid-item")
        .map(one => {
            return one.firstChild.nodeValue;
        });
}
