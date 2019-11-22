# learn-javascript
<html>
  <head>
      <title>javascript</title>
  </head>
  <body>
  
   
        <h1 id="one">assignment 1</h1>   
        <button onclick="fo()">PRESS HERE</button>    
        <script>
            function fo()
            {document.getElementById("one").innerHTML="hello world";
            document.getElementById("one").style.fontSize="25px";
            }
        </script>    
<h1>----------------------------------------------<h1>
        <h1 id="two">assignment 1 part b</h1>   
        <button onclick="foo()">PRESS HERE </button>    
        <script src="javascript.js"></script>

<h1>----------------------------------------------</h1>
      <h3 id="three">2</h3>
      <script>
        document.getElementById("three").innerHTML="PART 2";
          // this is 2 part of assignment . Single line comment
          /* ths is multiline comment.
          it is part 2 of the assignment.
          */
      </script>

<h1>----------------------------------------------<h1>
      <h3>assignment operator (=)</h3>
      <p id="four"></p>
      <script>
        var a="5"
        var b=a
        document.getElementById('four').innerHTML= b ;
      </script>

<h1>----------------------------------------------<h1>  
      <h3>part 4</h3>
      <p id="five"></p>
      <script>
        var a=9;
        var b=4;
        document.getElementById('five').innerHTML=a+b;
      </script>
<h1>----------------------------------------------<h1>
      <h3>part 5</h3>
      <p id="six"></p>
        <script>
          var a=9;
          var b=4;
          document.getElementById('six').innerHTML=a-b;
        </script>
<h1>----------------------------------------------<h1>
      <h3>part 6</h3>
      <p id="seven"></p>
        <script>
          var a=2;
          var b=2;
          document.getElementById('seven').innerHTML=a*b;
        </script>

<h1>----------------------------------------------<h1>
       <h3>part 7</h3>
       <p id="eight"></p>
        <script>
          var a=8;
          var b=4;
          document.getElementById('eight').innerHTML=a/b;
        </script>
<h1>----------------------------------------------<h1> 
       
       <h3>part 8</h3>
        <script>
          var x = 5;
          x++;
          z = x;
          document.write (z);
        </script>


        <h3>part 8 (b)</h3>
        <script>
          var x = 5;
          ++x;         
          z = x;
          document.write (z);



        </script>


<h1>----------------------------------------------<h1>
        <h3>part 10</h3>
        <p id="nine"></p>
        <script>
          var a=17;
          var b=3;

          document.getElementById('nine').innerHTML=a%b;
        </script>

<h1>----------------------------------------------<h1>
        <h3>part 12</h3>
        <p id="ten"></p>
        <script>
          var x=" Alan said, \"Peter is learning Javascript\"."
          document.getElementById('ten').innerHTML= x;
        </script>
<h1>----------------------------------------------<h1>
    <h3>part 13</h3>
    <script>
     var a="hello"
     var b="how are you"
     document.write (a+ " "+b);
     </script>
<h1>----------------------------------------------<h1>
    <h3>part 14</h3>
    <script>
     var a="hello"
     var b="how are you"
      b+=a;
     document.write (b);
     </script>

<h1>----------------------------------------------<h1>
    <h3>part 15</h3>
    <script>
        var a="hello"
        var b=166
        document.write (a+ " "+b);
      </script>

    

<h1>----------------------------------------------<h1>
        <h3>part 16</h3>
        <p id="eleven"></p>
        <script>
          var a=[2,2,3,4,5,2,"apple","orange"]
          document.getElementById('eleven').innerHTML= a;
        </script> 
<h1>----------------------------------------------<h1>
      <h3>part 17</h3>
        <button onclick="fooo()">PRESS QUICKLY</button>
        <p id="twele">is array will verify</p>
       
        <script>
          function fooo() {
          var fruits = ["Banana", "Orange", "Apple", "Mango"];
          var x = document.getElementById("twele");
          x.innerHTML = Array.isArray(fruits);
         }
        </script>

<h1>----------------------------------------------<h1>

    <h3>part 18</h3>   
    <script>
     
      var a= ["fruit","apple","banana","seeds"];
      document.write(a.length)
     
    </script>
<h1>----------------------------------------------<h1>

    <h3>part 19</h3>
    <p id="part19"></p>

    <script>
      var c = ["fruits", "apple", "seeds",12,555,677];
      c[4] = "nothing";
      document.getElementById("part19").innerHTML = c;
    </script>
<h1>----------------------------------------------</h1>

    <h3>part 20</h3>
    <script>
      var c = ["fruits", 5667,"fans", "seeds",12,555,"oranges",677,87,10];
      c[5] = "accessed5";
      c[6] = "accessed6";
      document.write(c);
    </script>
<h1>----------------------------------------------</h1>
    
    <h3>part 21</h3>
    
    <script>
      var d = ["fruits", 5667,"fans", "seeds",12,5565,"oranges",677,87,10];
       d.push("thisispushed")
      document.write(d);
    </script>
<h1>----------------------------------------------</h1>







  </body>
</html>