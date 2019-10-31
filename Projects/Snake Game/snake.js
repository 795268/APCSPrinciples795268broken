class Snake{
  constructor (x, y, dx, dy, clr){
    this.loc = createVector(x,y);
    this.clr = clr;
    this.vel= createVector(dx,dy);
  }

  run(){
    this.render();
    this.update();
  }

  render(){
      fill(this.clr);
      rect(this.loc.x, this.loc.y, 15, 15);

  }
  update(){
    this.loc.add(this.vel);
  }
  position(dxx, dyy){
    this.loc.x = this.loc.x+dxx;
    this.loc.y = this.loc.y + dyy;
  }


  }
