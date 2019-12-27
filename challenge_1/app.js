
//function that adds a x to elemten
function play(event) {
    //create a sub funtion that will the check the rule of the next player

    event.firstChild.nodeValue === '-' ?
        event.firstChild.nodeValue = "X" : ''
}

document.querySelectorAll(".grid-item")
    .forEach(one => {
        one.addEventListener('click', () => { play(one) });
    });

//re
// object of player movement

var players = {
    'O': false,
    'X': false,
}
//input => null 
//output  => string
function nextPlayer() {
    //check if no playing  
    //check this statment
    !players['X'] && !players['O'] ? players['X'] = true :
        !players['X'] && players['O'] ? players['X'] = true && players['O'] = false  :
    //
    // each time the function being envoked change the boolean
}