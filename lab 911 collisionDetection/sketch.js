//  Elena Campell
// 	lab 903
//  This is a comment
//  The setup function function is called once when your program begins

//var balls = []; //declares array
var ball;
var paddle;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //loadBalls(70);
  ball = new Ball (random(width), random(height), random (-5,5), random(-5,5));
  paddle = new Paddle (350, 650, 100, 100);
}


function draw() {
background(5,5,5,20);


ball.run();
paddle.render()

}

// function loadBalls(x){
//   mainBall = new Ball(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), 1);
//   mainBall2 = new Ball(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4), 2);
//   for(var i = 0; i < x; i++){
//     balls[i]=new Ball(random(width), random(height), random (-1,1), random(-1,1), i+3);
//   }
// }

// function runBalls(){
//   mainBall.run();
//   mainBall2.run();
//   for(var i = 0; i < balls.length; i++){
//     balls[i].run();
//}
//}
