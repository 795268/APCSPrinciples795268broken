class Food{

constructor (x, y, clr){
  this.loc = createVector(x,y);
  this.clr = clr;
}

run(){
  this.render();
}

render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 30, 30);

}



}// end food class
