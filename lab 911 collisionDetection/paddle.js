class Paddle {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h= h;
    this.clr = color(random(255), random(255), random(255));
  }

render(){
  fill(this.clr);
  rect(this.x, this.y, this.w, this.h);
}


} //*** end class
