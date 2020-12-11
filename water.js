class Water {
  constructor(){
    this.r = 50;
    this.x = width - this.r;
    this.y = 200;
  }

  show(){
    image(wImg, this.x, this.y, this.r, this.r);
  }

  move(){
    this.x -= 16;
  }
}
