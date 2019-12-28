// imported I need to get the request functiionality later!!!
//var app = require("..server")

const $submitBTN = $("#submit")
const $input = $('#input')

// click listening for submit button 
$submitBTN.click(() => {
    var value = $('#input').val()
    $input.val('')
    console.log(`submitted!!!  ${value}`)
})