//  Elena Campell
// 	lab 903
//  This is a comment
//  The setup function function is called once when your program begins

var balls = []; //declares array
var topPaddle;
var bottomPaddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5,5,5);
  loadObjects(1);

}


function draw() {
background(5,5,5);
runObjects();
}

function loadObjects(x){
  topPaddle = new Paddle (400, 100, 150, 40, 1);
  bottomPaddle = new Paddle (400, 700, 150, 40, 2);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), random(height), 30,30);
  }
}

function runObjects(){
topPaddle.run();
bottomPaddle.run();
for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}
