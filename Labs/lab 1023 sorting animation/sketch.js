//  Elena Campell
// 	10/ 17 insert sort
//  This is a comment
//  The setup function function is called once when your program begins
var nums=[0] ;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for (var x = 0; x<10; x++){ //load array with random varegers
    nums[x] = Math.floor(random(20));
  }

}

function draw() {
}

function mergeSort(nums, n ){ // uses merge sort
       n = nums.length;
       if (n < 2){
           return;
       } // base case
       var mid = n/2;
       var l = []; // one half of array
       var r = []; // other half of array
       for(var i = 0; i < mid; i++){
           l.push(nums[i]); // initializes array
       }
       for(var i = mid; i < n; i++){
           r.push(nums[i]); // initializes array
       }

       // recursive part
       mergeSort(l, mid);
       mergeSort(r, n - mid);
       // to merge the smaller arrays
       merge(nums, l, r, mid, n - mid);
   }

function merge(nums, l, r, var left, var right){
       // merge method for merge sort
       // instance variables to keep track of index within array
       var i = 0;
       var j = 0;
       var k = 0;
       while(i < left && j < right){
           // runs through array until reaching the end (middle)
           if(l[i] <= r[i]){
              // a.set(k++, l.get(i++)); // adds the left value to the array
               nums[k++] = l[i++];
           } else {
               //a.set(k++, r.get(j++)); // adds the right value to the array
               nums[k++] = r[j++]; 
           }
       }
       while(i < left) {
           a.set(k++, l.get(i++)); // incrementation
       }
       while(j < right) {
           a.set(k++, r.get(j++)); // incrementation
       }
   }
