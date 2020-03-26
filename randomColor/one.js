
var genNum= ()=>{
   var z= Math.floor(Math.random()*254)
   return z
}
// do call genCol() to generate a no, diff for each genCol()


var genRgb=()=>{
    var m= 'rgb( '+genNum()+',' +genNum() +','+ genNum()+ ')'
   // string concatination as we dont want function call to ce inside a string
   // with +, we r concating string with function calls
    return m
}
// do genRgb() to generate rgb(33,55,11)
// will be diff everytime we do genRgb()


var chCol= ()=>{
    document.body.querySelector('div').style.backgroundColor=genRgb()
}
// attach the function on the onclk of button


var chCol2 = ()=>{
    document.body.style.backgroundColor= genRgb()
}

/*            DOM
  dom is a model c considers every tag to be a object and a tag can be a parent of those tags c
   are within it. hence by using dom, we can manipulate our document
   document. is the entry point to the document
   body is a tag/object containing div object, so div is child to body object, so we did body.div
   since body is child to main document, so we do document.body,div....
*/