//  Elena Campell
// Paddle game
//  The setup function function is called once when your program begins
var balls = []; //declares array
var paddle;
function setup() {
  var cnv = createCanvas(1000, 1000);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(4);
}

function draw() {
background(5,5,5);
runObjects();
}

function loadObjects(x){
  paddle = new Paddle (400, 600, 150, 40);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), 0 , 10,10);
  }
}

function runObjects(){
paddle.run();
for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}
