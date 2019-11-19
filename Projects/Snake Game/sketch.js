//  Elena Campell
// snake game
//  The setup function function is called once when your program begins


var  header_height, snake, difficulty, setting
var gameState = 1;
var timerValue = 15;
var h = 10;
var score = 0;
var food = [];
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay, bDesert, bWater, bVolcano, bForest;

// function preload(){
//   soundFormats('mp3');
//   crunch = loadSound('crunch.mp3');
// }
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(217, 189, 124);
  header_height = 800;
  loadObjects(2);
  newButton();
  setInterval(timeIt, 1000);
  //crunch.setVolume(1);
  // crunch.play();
}

function draw(){
    if (gameState ===1){
      setBackground(); //start screen
    }else if (gameState === 2){
      startGame()
    }else if (gameState === 3){
      playGame();
    }else if (gameState === 4){ //game over screen
      endGame();
  }
}

function newButton(){
  btnEasy = new Button(50, 300, 200, 200, color(78, 219, 18) );
  btnMed = new Button(300, 300, 200, 200, color (250,250,7));
  btnHard = new Button(550, 300, 200, 200, color(250, 0, 0));
  btnReplay = new Button (66, 100, 300, 100, color (255));
  btnBTME = new Button(432, 100, 300, 100, color(255));
  bDesert = new Button(0, 0, 200, 200, color (217, 189, 124));
  bWater = new Button(600, 0 ,200, 200, color(84, 195, 232));
  bVolcano = new Button (0, 600, 200, 200, color (199, 57, 14));
  bForest = new Button (600, 600, 200, 200, color (21, 163, 40 ));

}

function setBackground(){
  background(0);
  fill(255);
  textSize(100);
  text("SNAKE GAME", 70, 420);
  bWater.render();
  bDesert.render();
  bVolcano.render();
  bForest.render();

  if(bWater.isClicked()) setting = 'w';
  else if (bDesert.isClicked()) setting = 'd';
  else if (bVolcano.isClicked()) setting = 'v';
  else if (bForest.isClicked()) setting = 'f';

  if (bWater.isClicked() || bDesert.isClicked() ||
  bVolcano.isClicked() || bForest.isClicked()){
    gameState =2;
  }

  }

function startGame(){
  if (setting === 'w')background(84, 195, 232);
  else if (setting === 'd') background(217, 189, 124);
  else if (setting === 'v') background(199, 57, 14);
  else if (setting === 'f') background(21, 163, 40 );

  btnEasy.render(); //draws buttons
  btnMed.render();
  btnHard.render();

  textSize (60); //text for buttons
  fill(255);
  text ("EASY", 65, 525, 200, 200);
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
      gameState = 3; // play game
    }
}

function playGame(){
  frameRate(10);
  if (setting === 'w')background(84, 195, 232);
  else if (setting === 'd') background(217, 189, 124);
  else if (setting === 'v') background(199, 57, 14);
  else if (setting === 'f') background(21, 163, 40 );  runObjects();
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
  textAlign(CENTER);
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
  if (setting === 'w') snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(133, 6, 153));
  else if (setting === 'd')  snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(227, 69, 7));
  else if (setting === 'v') snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(0));
  else if (setting === 'f') snake = new Snake (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30,30, color(255, 34, 0));

  if (setting === 'w'){
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(80, 242,167));
      }
  }
  else if (setting === 'd') {
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70));
      }
  }
  else if (setting === 'v') {
    for (var j = 0; j < n; j++){
      food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(235, 235,40));
      }
  }
  else if (setting === 'f') for (var j = 0; j < n; j++){
    for (var j = 0; j < n; j++){
    food[j] = new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(240, 31, 35));
    }
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
