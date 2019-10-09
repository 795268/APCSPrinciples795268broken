//  Elena Campell
// 	10/ 9 bubble sort
//  This is a comment
//  The setup function function is called once when your program begins
var nums = [3, 8, 9, 2, 5, 7, 4];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}

function bubbleSort(nums){
  for(var j = nums.length; j > 0 ; j --){
for (var i = 0 ; i < nums.length; i ++){


if (nums[i+1] < nums [i]){
  var temp = nums[i];
  nums[i] = nums[i+1];
  nums[i+1] = temp;
}

  }

}
console.log(nums);

}
