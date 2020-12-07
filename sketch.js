let player;
let obstacle = [];
let heart = [];

let w = 700;
let h = 400;

let pImg;
let oImg;
let bImg;
let hImg;

let points = 0;
let state = 'title';
let cnv;

let x1 = 0;
let x2;
let scrollSpeed = 2;



function preload(){
    pImg = loadImage('assets/sprite.png');
    oImg = loadImage('assets/rock.png');
    bImg = loadImage('assets/background.png');
    hImg = loadImage('assets/heart.png');
}

function setup() {

  cnv = createCanvas(700, 400);
  cnv.mouseClicked(function(){
    console.log('canvas is clicked');
    state = 'game'
  });

  player = new Player();

  x2 = width;
}

function keyPressed(){
  if(key== ' '){
    player.jump();
  }
}

function draw() {

  switch (state){
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;


    case 'game':
    game();
    cnv.mouseClicked(gameMouseClicked);
    break;
    default:
    break;

  }
//   if (state === 'title'){
//     title();
//     cnv.mouseClicked(titleMouseClicked);
//  } else if (state === 'game'){
//    game();
//    cnv.mouseClicked(gameMouseClicked);
// }
//
}

function title(){
  background(100);
  textSize(80);
  text('Game Title', 150, 120);

  textSize(20);
  text('How to play: Press spacebar to jump and avoid obstacles', 100, 230);

  textSize(22);
  text('click anywhere to start', 220, 300);

}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'game'
}

function gameMouseClicked(){
  console.log('canvas is clicked on game');
}

function game(){

  image(bImg, x1, 0, width, height);
  image(bImg, x2, 0, width, height);

  x1 -= scrollSpeed;
  x2 -= scrollSpeed;

  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
    //code from demo

    text(`points: ${points}`, 500, h - 30);

    if (random(1) < 0.005) {
      obstacle.push(new Obstacle());
    }

    if (random(1) < 0.005) {
      heart.push(new Heart());
    }


    for (let o of obstacle){
      o.move();
      o.show();
      if (player.hits(o)) {
        console.log('game over');
        noLoop();
      }
    }

    for (let h of heart){
      h.move();
      h.show();
      if (dist(player.x, player.y, h.x, h.y) <= (player.r + h.r) / 2){
        points ++;
        console.log('points');
      }
    }

    player.show();
    player.move();



    //check for collision, if there is collision increase points by once



}
