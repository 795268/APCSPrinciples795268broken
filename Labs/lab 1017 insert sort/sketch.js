//  Elena Campell
// 	10/ 17 insert sort
//  This is a comment
//  The setup function function is called once when your program begins
var nums = [3,7,2,8,5,1];


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for (var x = 0; x<10; x++){ //load array with random integers
    nums[x] = Math.floor(random(20));
  }

}

//  The draw function is called @ 30 fps
function draw() {
}

function insertSort(nums){
  console.log(nums);
  for(var j = 1; j < nums.length ; j ++){ //moves end limit
for (var i = j +1 ; i >0 ; i --){
swap(i);
    }
  }

console.log(nums); //prints sorted array to console

}

function swap(i){ //swap
  if (nums[i+1] < nums [i]){
    var temp = nums[i];
    nums[i] = nums[i+1];
    nums[i+1] = temp;
  }
}
