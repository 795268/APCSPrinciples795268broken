//  Elena Campell
// Paddle game
//  The setup function function is called once when your program begins
var balls = []; //declares array
var paddle;
var difficulty;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(6);
}

function draw() {
  var gameState = 3;
background(5,5,5);
if (gameState ===1){
  startGame(); //start screen
}else if (gameState === 2){
  playGame(); //game screen
}else if (gameState === 3){
  endGame(); //game over screen
}
}

function startGame(){ // choose easy med hard
textSize(80);
fill(255);
textAlign(RIGHT);
text ("PADDLE", 400, 200); //title
textAlign(CENTER);

text ("GAME", 400, 300);
fill (78,219,18);//easy
rect (50, 450, 200, 200);
fill (250, 250, 7); //med
rect (300, 450, 200, 200);
fill (250, 0, 0 );//hard
rect (550, 450, 200, 200);
fill(255);// instructions
rect (200, 700, 400, 75);

textSize (60);
text ("EASY", 55, 525, 200, 200);
text ("HARD", 560, 525, 200, 200);
textSize(45);
text ("MEDIUM", 305, 530, 200, 200);
fill (0);
text ("INSTRUCTIONS", 205, 712, 400, 75);
// difficulty
//if

}
function playGame(){
  fill (255);
  textSize (40);
  text ("SCORE:", 20 , 50);
  runObjects();
}
function endGame(){ //
textSize(80);
fill (255);
text ("GAME OVER", 150, 250);

}


function loadObjects(x){
  paddle = new Paddle (400, 500, 150, 40);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), 0 , 4,4, i);
  }
}

function runObjects(){
paddle.run();
for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}

function checkDifficulty(){

}
