//  Elena Campell
// snake game
//  The setup function function is called once when your program begins


var snake, score, food, header_height;
var bodySegments = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  newGame();
}

function draw(){
  snake.render();
  food.render();
  if (checkTangled === true){
    newGame();
  }
  if (getFood === true ){
    startNewRound();
  }
}// end draw

function newGame(){ //create snake and food objects
  score = 0;
  snake = new Snake (random(50, 750), random(50, 750),30, color(227, 69, 7));
  food = new Food (random (300,500), random (300,500), color(70));


}
function checkTangled(){
  return snake.tangled();
}
function startNewRound(){

}
function keyPressed(){
  if(keyCode === UP_ARROW){
    //MOVE SNAKE ONE SQUARE UP
  }
  if(keyCode === DOWN_ARROW){
    //MOVE SNAKE ONE SQUARE DOWN
  }
  if(keyCode === LEFT_ARROW){
    //MOVE SNAKE ONE SQUARE LEFT
  }
  if(keyCode === RIGHT_ARROW){
    //MOVE SNAKE ONE SQUARE RIGHT
  }

}//end keyPressed
function run(){
  snake.update();
  snake.render();

}
function getFood() {

}

function runObjects(){
  head.run();
}




function move(){
  if(keyCode === UP_ARROW){
    head.position(5,5);

  }
}
