class Paddle {
  constructor(x, y, w, h, id){
    this.loc = createVector(x, y);
    this.w = w;
    this.h= h;
    this.clr = color(random(255), random(255), random(255));
    this.id = id;
  }

  run(){
    //this.update();
    this.render();
    this.keyPressed();
}
// update(){
//   var mouseLoc = createVector (mouseX, mouseY);
//   this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
// }

render(){
  fill(this.clr);
  rect(this.loc.x, this.loc.y, this.w, this.h);
}
keyPressed(){
  while (this.id ===1){
    if (keyCode === UP_ARROW) {//or try if (keyIsDown(UP_ARROW)
    this.loc.y = this.loc.y-5;
  }
  if (keyCode === DOWN_ARROW){
    this.loc.y = this.loc.y+5;
  }
  if (keyCode === LEFT_ARROW){
    this.loc.x = this.loc.x-5;
  }
  if (keyCode === RIGHT_ARROW){
    this.loc.x = this.loc.x+5;
  }
}
// end for loop
//
// while  (this.id === 2) {
//   if (keyCode === 'w'){
//   this.loc.y = this.loc.y-5;
// }
// if (keyCode === 's'){
//   this.loc.y = this.loc.y+5;
// }
// if (keyCode === 'a'){
//   this.loc.x = this.loc.x-5;
// }
// if (keyCode === 'd'){
//   this.loc.x = this.loc.x+5;
//         }
//     }
}// end keypressed


} //*** end class
