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
  for(var i = nums.length -1; i > 0 ; i --){ //moves end limit
    for (var j = 0 ; j < nums.length; j ++){
      if (nums[j] < nums[j-1]){
        swap(nums, j, j-1);

      }
  }

}
console.log(nums); //prints sorted array to console

}

function swap(nums, a, b){ //swap
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}
