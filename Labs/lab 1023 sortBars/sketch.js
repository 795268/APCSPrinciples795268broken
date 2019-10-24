//  Elena Campell
// 	10/ 17 insert sort
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[0] ;

function setup() {
  var cnv = createCanvas(780, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

function draw() {
  runBars();
}

function loadBars(){
  for (var i = 0; i< 26; i++){
    bars[i]= new Bar(i*20, Math.floor(random(100, 700)));
  }
}

function runBars(){
  for (var i = 0; i< 26; i++){
    bars[i].render();
  }
}



function merge(left, right) {
  var arr = [];

  while (left.length>0 && right.length>0) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2);
  var left = arr.slice(0, middle);
  var right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
