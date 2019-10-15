//  Elena Campell
// 	10/ 15 bubble sort
//  This is a comment
//  The setup function function is called once when your program begins
var nums = [3,7,2,8,5,1];


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for (var x = 0; x<1500; x++){ //load array with random integers
    nums[x] = Math.floor(random(20));
  }

}

//  The draw function is called @ 30 fps
function draw() {
}

function bubbleSort(nums){
  console.log(nums);
  for(var j = nums.length; j > 0 ; j --){ //moves end limit
for (var i = 0 ; i < nums.length; i ++){
swap(i);
  }

}
console.log(nums); //prints sorted array to console

}

function swap(i){
  if (nums[i+1] < nums [i]){
    var temp = nums[i];
    nums[i] = nums[i+1];
    nums[i+1] = temp;
  }
}
