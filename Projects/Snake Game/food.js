class Food{

constructor (x, y, clr){
  this.food = createVector(x,y);
  this.clr = clr;
}

run(){
  this.render();
  this.update();
}

render(){
    fill(this.clr);
    rect(this.food.x, this.food.y, 30, 30);
}

update(){
  if(snake.head.x === this.food.x &&
   snake.head.y === this.food.y){
  this.food.x = Math.floor(random(0,79))*30;
  this.food.y = Math.floor(random(0,79))*30;
}

}



}// end food class
