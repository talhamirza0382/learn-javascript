

document.getElementById('clickme').addEventListener('click',counter);
count=0 
function counter(){
    count += 1;
    document.getElementById('display').innerHTML = 
      `count is ${count} `
 }