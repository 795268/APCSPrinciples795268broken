//  Elena Campell
// 	8/21
//  This is a comment
//  The setup function function is called once when your program begins

class Ball{

  constructor(x1, y1, dx, dy){
    this.x1 = x1;
    this.y1 = y1;
    // this.x1 = x2;
    // this.y1 = y2;
    // this.x1 = x3;
    // this.y1 = y3;
    this.dx = dx;
    this.dy= dy;
    this.clr = color(random(255), random(255), random(255));

  }

run(){
  this.checkEdges();
  this.updates();
  this.render();
}

checkEdges(){
  if(this.x1< 0 || this.x2< 0 || this.x3< 0) {this.dx = -this.dx}
  if (this.x1> width || this.x2> width || this.x3> width) this.dx = -this.dx;
  if (this.y1 < 0 || this.y2 < 0 || this.y3 < 0) this.dy = - this.dy;
  if(this.y1> height || this.y2> height || this.y3> height) this.dy = -this.dy;
}

updates(){
  this.x1 = this.x1 + this.dx;
  this.x2 = this.x2 + this.dx;
  this.x3 = this.x3 + this.dx;

  if ()
  this.y = this.y + this.dy;
}

render(){
  fill( this.clr);
  triangle(this.x1, this.y1, this.x1 + 30,this.y1, this.x1+15, this.y1 - 30,);
}


}//  +++++++++++++++++++++++++++++++++++  End Ball Class
