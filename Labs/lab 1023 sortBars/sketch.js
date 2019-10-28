//  Elena Campell
// 	10/ 17 insert sort
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[0] ;
var barWidth, barHeight;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars();
  frameRate(3);
  runBars();

}

function draw() {
selectionSort();
//update();
runBars();
}

function loadBars(){

  for (var i = 0; i< 40; i++){
    barWidth = (width/40);
    barHeight = Math.floor(random(1, height));
    bars[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
  }
}
function runBars(){
  for (var i = 0; i<bars.length; i++){
    bars[i].run();
  }
}

function  update(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(0);
  runBars();
}

function selectionSort(arr){
  for(var i = 0; i < bars.length-1; i ++){ //moves end limit
      var small = i;
  for (var j = i+1 ; j < bars.length ; j++){
      if(bars[j].getHeight() < bars[small].getHeight()){
          small = j;
          }
        }
        swap(bars, i , small);
        update();
        runBars();
      }
// background(5,5,5);
// frameRate(3);
// runBars();
  }

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
