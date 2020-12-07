class Heart {
  constructor(){
    this.r = 50;
    this.x = width;
    this.y = 250;
  }

  show(){
    image(hImg, this.x, this.y, this.r, this.r);
  }

  move(){
    this.x -= 16;
  }
}
