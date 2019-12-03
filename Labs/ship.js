class Ship{
  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.angle = 0;
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if(this.loc.x < 0){
      this.loc.x = width;
    }
    if(this.loc.x > width){
      this.loc.x = 0;
    }
    if(this.loc.y < 0){
      this.loc.y =height;
    }
    if(this.loc.y > height){
    this.loc.y = 0;
    }

  }
  update(){
    var distToPlanet;

     distToPlanet = this.loc.dist(planet.loc);

     if(distToPlanet < 250){
       //add attraction
       this.acc = p5.Vector.sub(planet.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.1);
     }

    this.vel.limit(5);
     this.vel.add(this.acc);
   this.loc.add(this.vel);


  }

  render(){
    fill(this.clr);
    this.angle = this.angle +1;
    push();
    translate (this.loc.x, this.loc.y);
    rotate (this.angle);
    triangle (-5, 8, 5,8,0, -8);
    pop();
  }


} // end ship class
