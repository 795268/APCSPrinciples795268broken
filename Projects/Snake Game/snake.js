//Elena Campell

class Snake{
  constructor(x, y,w, c){
    this.head =createVector(x,y);
    this.vel = createVector(0,0);
    this.w = 30;
    this.clr = c;
    this.body = [];

  }// end constructor

  run(){
    this.update();
    this.render();
  } //end run

  update(){
    this.keyPressed();
    this.checkEdges();
    for(var i = 0; i< food.length; i++){
    if(this.head.x === food[i].food.x &&
       this.head.y === food[i].food.y){
         this.loadSegment();
     }
   }
    // update the body
    if(this.body.length>0){
    for(var i = this.body.length-1; i < 0; i--){
      this.body[0].x = this.head.x;
      this.body[0].y = this.head.y;
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }
  }
    // update the head
    this.head.add(this.vel);

}//end update

  render(){
 // render head
    fill(this.clr);
    rect(this.head.x, this.head.y, this.w, this.w);
 // render the body
    for(var i = 0; i < this.body.length; i++){
      rect(this.body[i].x, this.body[i].y, w, w);
   }
 }
  //   fill(this.clr);
  //   var row = Math.floor(this.head.x/this.w);
  //   var col = Math.floor(this.head.y/this.w);
  //   rect(row*this.w, col*this.w + header_height, 10, 10);
  //   rect(this.head.x, this.head.y, this.w, this.w );
  //   // for(var i = 1; i <= bodySegments.length -1; i++){
  //   //   rect(bodySegments[i].x, bodySegments[i].y, this.w, this.w);
  //   // }
  // }//end render
  loadBody(){
    this.body.push(createVector(this.head.x, this.head.y));
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
    if(keyCode === UP_ARROW){
        this.head.y = this.head.y - this.w;
    }
    if(keyCode === DOWN_ARROW){
      this.head.y = this.head.y + this.w;
      }
    if(keyCode === LEFT_ARROW){
    this.head.x = this.head.x - this.w;
      }
    if(keyCode === RIGHT_ARROW){
    this.head.x = this.head.x + this.w;

      }
  }//end keyPressed

  checkEdges(){ //keep snake inside screen
      if(this.head.x< 0) {this.head.x + this.w}
      if (this.head.x> width) this.head.x + this.w;
      if (this.head.y < 0) this.head.y + this.w;
      if(this.head.y> height) this.head.y - this.w;
  } //DOESNT WORK!!



} //++++++++++++++++ End Snake
