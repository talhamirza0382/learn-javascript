// Math.floor( Math.random()* 20 )+1
// will generate no 1, 20 and between them.

var numBer=()=>{
    var z= Math.floor( Math.random()* 20 )+1
    return z
}

var guessCount=1
var guessbox = document.querySelector('.guessField');
var guessbox2 = document.querySelector('.guessField2');
var guessbox3 = document.querySelector('.guessField3');
guessbox.focus();
guessbox2.focus();
guessbox3.focus();