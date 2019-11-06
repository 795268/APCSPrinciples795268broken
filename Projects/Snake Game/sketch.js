//  Elena Campell
// snake game
//  The setup function function is called once when your program begins


var score, header_height;
var gameState = 1;
var snake = [];
var food = [];
function setup() {
  var cnv = createCanvas(800, 600);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  newGame();
}

function draw(){
    background(5,5,5);
    if (gameState ===1){
      startGame(); //start screen
    }else if (gameState === 2){
      playGame(); //game screen
    }else if (gameState === 3){
      instructionsText();
    }else if (gameState === 4){ //game over screen
      endGame();
  }
}

function startGame(){
  loadObjects(2);
  if (mouseIsPressed()){
    gameState=2;
  }
}

function playGame(){
  runObjects();
}

function loadObjects(n){
  for(var i = 0; i< snake.length; i++){
    snake[i] = new Snake (random(50, 750), random(50, 750),30, color(227, 69, 7), i);
    }
  for (var j = 0; j < n; j++){
    food[j] = new Food (random (300,500), random (300,500), color(70));
    }
}

function runObjects(){
  for(var i = 0; i< snake.length; i++){
    snake[i].run();
  }
  for(var i = 0; i< food.length; i++){
    food[i].run();
  }
}
  // snake.run();
  // food.render();
  // if (checkTangled === true){
  //   newGame();
  // }
  // if (getFood === true ){
  //   startNewRound();
  //}
//}// end draw

function newGame(){ //create snake and food objects
}
function checkTangled(){
  return snake.tangled();
}
function startNewRound(){

}


function getFood() {

}
