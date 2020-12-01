class Player{
  constructor(){
    this.r = 100;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 3;
  }
  jump(){
    if (this.y == height - this.r){
    this.vy = -35;
    }
  }

  hits(obstacle){
   return collideRectRect(this.x, this.y, this.r, this.r, obstacle.x, obstacle.y, obstacle.r, obstacle.r);
  }

  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show(){
    image(pImg, this.x , this.y , this.r , this.r);
  }
}
