//  Elena Campell
// snake game
//  The setup function function is called once when your program begins


var  header_height, snake, difficulty;
var gameState = 1;
var timerValue = 10;
var h = 10;
var score = 0;
var food = [];
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  loadObjects(2);
  newButton();
  setInterval(timeIt, 1000);
}

function draw(){
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

function newButton(){
  btnEasy = new Button(50, 450, 200, 200, color(78, 219, 18) );
  btnMed = new Button(300, 450, 200, 200, color (250,250,7));
  btnHard = new Button(550, 450, 200, 200, color(250, 0, 0));
  btnReplay = new Button (66, 100, 300, 100, color (255));
  btnBTME = new Button(432, 100, 300, 100, color(255));

}

function startGame(){
  background(217, 189, 124);
  textSize(80);
  fill(255);
  textAlign(RIGHT);
  text ("SNAKE", 400, 200); //title
  textAlign(CENTER);
  text ("GAME", 400, 300);

  btnEasy.render(); //draws buttons
  btnMed.render();
  btnHard.render();

  textSize (60); //text for buttons
  fill(255);
  text ("EASY", 55, 525, 200, 200);
  text ("HARD", 560, 525, 200, 200);
  textSize(45);
  text ("MEDIUM", 305, 530, 200, 200);

    checkDifficulty(); // checks which difficulty is chosen
    if (difficulty === 'easy' || difficulty === 'medium'|| difficulty === 'hard'){
      if (difficulty === 'easy'){
        loadObjects(7);
      }else if (difficulty === 'medium'){
        loadObjects (5);
      }else if (difficulty === 'hard'){
        loadObjects (2);
      }
      gameState = 2; // play game
    }
}

function playGame(){
  frameRate(10);
  background(217, 189, 124);
  runObjects();
  fill(255);
  textSize(30);
  text("SCORE:" +score, 100, 50);
  checkTangled();
  if (timerValue >= 10) {
    text("0:" + timerValue, 100, 100);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, 100, 100);
  }
  if (timerValue == 0) {
    gameState = 4;
  }
}
function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}

function endGame(){ //end game screen
  background(137,21,21);
  fill(255);
  textSize(100);
  text("GAME OVER", 400, 500);

  btnReplay.render();
  btnBTME.render();

  fill(0);
  textSize(40);
  text ("REPLAY", 220, 145);
  text ("LEVEL", 220, 185)
  text ("BACK TO", 580, 145);
  text("MAIN MENU", 580, 185);
  if (btnBTME.isClicked()){ // go back to main menu
  //  gameState = 1;
    difficulty = 'startOver';
    clearEverything();
  }
  if (btnReplay.isClicked()=== true){ // replay level
    clearEverything();
    }
  }

function loadObjects(n){
    snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(227, 69, 7));
  for (var j = 0; j < n; j++){
    food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70));
    }
}

function runObjects(){
    snake.run();

  for(var i = 0; i< food.length; i++){
    food[i].run();
    }
  }


function checkTangled(){
if (snake.tangled() === true) {
  gameState = 4;
    }
}
function clearEverything() { //clear gamestate and score for restarting level
  gameState = 1;
  score = 0 ;
  timerValue = 10;
  food = [];

}

function checkDifficulty(){ //check which difficulty button is isClicked
  if (btnEasy.isClicked()=== true){
     difficulty = 'easy';
   }
 if (btnMed.isClicked()===true){
    difficulty = 'medium';
  } if (btnHard.isClicked()=== true){
    difficulty = 'hard';
  }
}
