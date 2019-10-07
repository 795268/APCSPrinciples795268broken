/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables

//  Global variables
var squares = []  // declare b1 as a global variable


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  //  traverse array and run each ball

}


function loadSquares(){
  for(var i = 0; i < squares.length; i++){
    for (var j = 0; j< squares.length; j ++){
      new Square (100*i, )
    }


  }

}


}
