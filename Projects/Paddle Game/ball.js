//  Elena Campell
// 	8/21
//  This is a comment
//  The setup function function is called once when your program begins

class Ball{

  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector (dx, dy);
    this.acc = createVector (0, .7);
    this.clr = color(random(255), random(255), random(255));
  }

run(){
  this.checkEdges();
  this.update();
  this.render();
  this.removeBall();
//  this.bounce();
}

checkEdges(){
  if(this.loc.x< 0) {this.vel. x = -this.vel.x}
  if (this.loc.x> width) this.vel.x = -this.vel.x;
  if (this.loc.y < 0) this.vel.y = - this.vel.y;
  if(this.loc.y> height) this.vel.y = -this.vel.y;
}

update(){
this.vel.add(this.acc);
  this.loc.add(this.vel);
}

render(){
  fill( this.clr);
  ellipse(this.loc.x, this.loc.y, 50, 50);
}

isCollidingTop(){
  if (this.loc.x> paddle.loc.x &&
    this.loc.x < paddle.loc.x +paddle.w &&
  this.loc.y > paddle.loc.y){
    return true;
  } else{
    return false;
  }
}
isCollidingBottom(){
  if (this.loc.x> paddle.loc.x &&
    this.loc.x < paddle.loc.x +paddle.w &&
     this.loc.y < paddle.loc.y +paddle.h ){
    return true;
  } else{
    return false;
  }
}
removeBall(){
  //   for (var i = 0; i < balls.length; i++){
  //     if (this.isCollidingTop() == true){
  //       if (balls[i] == this.ball) {
  //       balls.splice(i,1);
  //     }
  //   }
  // }
  balls.splice(1); 
}

// bounce(){
//   if (this.isCollidingBottom() == true){
//     this.vel.x = -this.vel.x;
//     this.vel.y = - this.vel.y;
//   }
// }

}//  +++++++++++++++++++++++++++++++++++  End Ball Class
