

/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/
class Square{

constructor (x, y, clr){
  this.x = x;
  this.y = y ;
  this.clr = clr;

}

 render(){
   fill (this.clr);
   rect (this.x, this.y, 100, 100);

}


}
