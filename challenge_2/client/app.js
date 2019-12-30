// imported I need to get the request functiionality later!!!
//var app = require("..server")

// const $submitBTN = $("#submit")
// const $input = $('#input')

// click listening for submit button 
// $submitBTN.click(() => {
//     var value = $('#input').val()
//     $input.val('')
//     console.log(`submitted!!!  ${value}`)
// })


// funcion that converts from JSON to CVS

// input  => JSON
// output => CVS tabled format

function json2CVS(json) {
    var result = ''
    // helpler function 
    function helpler(child) {

        // recursion
        // iterate over it recursively
        for (var key in child) {
            helpler(child.children)
        }
        // other iteration for convertion 
        for (var key in child) {
            result += child[key];
        }
        return result
    }
    helpler(json)
}