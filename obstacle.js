class Obstacle {

  constructor(){
    this.r = 50;
    this.x = width - this.r;
    this.y = height - this.r;
  }

  move(){
    this.x -= 16;
  }

  show(){
    image(oImg, this.x , this.y , this.r , this.r);
  }
}
