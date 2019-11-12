//Elena Campell

class Snake{
  constructor(x, y,w, c){
    this.head =createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;
    this.body = [];

  }// end constructor

  loadSegment(){
    this.body.push(createVector(this.head.x, this.head.y));
  }

  run(){
    this.update();
    this.render();
  } //end run

  update(){
    this.keyPressed();
  //  this.checkEdges();
    for(var i = 0; i< food.length; i++){
    if(this.head.x === food[i].loc.x &&
       this.head.y === food[i].loc.y){
         this.loadSegment();
         food.push(new Food (Math.floor(Math.random()*25)*30,Math.floor(Math.random()*25)*30, color(70)));
     }
   }
    // update the body
    if(this.body.length>0){
      this.body[0].x = this.head.x;
      this.body[0].y = this.head.y+30;

    for(var i = this.body.length; i < 0; i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
 }

}//end update

  render(){
 // render head
    fill(this.clr);
    rect(this.head.x, this.head.y, this.w, this.w);
 // render the body
    for(var i = 0; i < this.body.length; i++){
      if(i%3 === 0){
        fill(255);
        rect(this.body[i].x, this.body[i].y, this.w, this.w);
      }
      else if(i%3 !== 0){
        fill(0);
        rect(this.body[i].x, this.body[i].y, this.w, this.w);
      }
   }
 }



  tangled(){
    //for loop checking each segment in the segment array
    for(i = 0; i < bodySegments.length; i++){
      //if stament checking if the headations are equal to each other
      if(this.head.x == bodySegments[i].x && this.head.y == bodySegments[i].y){
        console.log("Game Over");
      }
    }
  }

   keyPressed(){
     this.head.add(this.vel);
    if(keyCode === UP_ARROW){
        this.vel.x = 0;
        this.vel.y = -30;
    }
    if(keyCode === DOWN_ARROW){
      this.vel.x = 0;
      this.vel.y = 30;

  //    this.head.y = this.head.y + this.w;
      }
    if(keyCode === LEFT_ARROW){
      this.vel.y = 0;
      this.vel.x = -30;
  //  this.head.x = this.head.x - this.w;
      }
    if(keyCode === RIGHT_ARROW){
      this.vel.y = 0;
      this.vel.x =30
  //  this.head.x = this.head.x + this.w;

      }
  }//end keyPressed




} //++++++++++++++++ End Snake
