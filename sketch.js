let player;
let pImg;
let oImg;
let bImg;
let obstacle = [];
let points;
let state = 'title';


function preload(){
    pImg = loadImage('assets/sprite.png');
    oImg = loadImage('assets/rock.png');
    bImg = loadImage('assets/background.png');
}

function setup() {
  createCanvas(700, 400);
  player = new Player();
}

function keyPressed(){
  if(key== ' '){
    player.jump();
  }
}

function draw() {

  if (state === 'title'){
    title();
 } else if (state === 'game'){
   game();
 }

  player.show();
  player.move();

}

function mousePressed(){
  state = 'game';
}

function title(){
  background(100);
  textSize(80);
  text('Game Title', 150, 120);


  textSize(25);
  text('click anywhere to start', 200, 230);

}

function game(){


    if (random(1) < 0.005) {
      obstacle.push(new Obstacle());
    }

    background(bImg);
    for (let o of obstacle){
      o.move();
      o.show();
      if (player.hits(o)) {
        console.log('game over');
        noLoop();
      }
    }
}
