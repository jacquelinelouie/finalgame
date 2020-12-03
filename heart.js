class Heart {
  constructor(){
    this.r = 50;
    this.x = width;
    this.y = 250;
  }

  display(){
    image(hImg, this.x, this.y, this.r, this.r);
  }

  move(){
    this.x -= 16;
  }
}
