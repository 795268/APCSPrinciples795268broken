//  Elena Campell
// 	9/03
//  This is a comment
//  The setup function function is called once when your program begins

class Ball {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
   this.id = id;

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height -2;
    }

  }
  update(){
    var distToMainBall;
    if(this.id >= 0){
     distToMainBall = this.loc.dist(mainBall.loc);
     if(distToMainBall < 250){
       //add attraction
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.1);
     }
     if(distToMainBall < 150){
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.5);
     }
    }
     this.vel.add(this.acc);
   this.loc.add(this.vel);


  }

  render(){
    fill(this.clr);
    if (this.id == -1){
      ellipse (this.loc.x, this.loc.y, 40, 40);
    }else {
    ellipse(this.loc.x, this.loc.y, 15, 15);
  }
  }
}//  +++++++++++++++++++++++++++++++++++  End Ball Class
