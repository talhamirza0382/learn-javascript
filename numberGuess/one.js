// Math.floor( Math.random()* 20 )+1
// will generate no 1, 20 and between them.

var numBer=()=>{
    var z= Math.floor( Math.random()* 20 )+1
    return z
}

var guessCount=1

// var guessField = document.querySelector('.guessfield');
// guessField.focus();

document.getElementById('abutton').addEventListener('click',checkGuess)


function checkGuess(){
    var x= document.querySelector('button').textContent;
    if()
    
    document.querySelector('h1').innerHTML=x
    

}

