let player;
let obstacle = [];
let heart = [];
let water = [];

let w = 700;
let h = 400;

let pImg;
let oImg;
let bImg;
let hImg;
let wImg;

let points = 0;
let state = 'title';
let cnv;


let x1 = 0;
let x2;
let scrollSpeed = 2;



function preload(){
    pImg = loadImage('assets/player.gif');
    oImg = loadImage('assets/rock.png');
    bImg = loadImage('assets/background.png');
    hImg = loadImage('assets/heart.png');
    wImg = loadImage('assets/water.png');
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

    case 'you win':
    youWin();
    cnv.mouseClicked(youWinMouseClicked);
    break;

    case 'game over':
    gameOver();
    cnv.mouseClicked(gameOverMouseClicked);
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
  background(bImg);
  textSize(80);
  textFont('courier');
  text('Journey', 200, 160);

  textSize(20);
  text('How to play: Press spacebar to jump and avoid obstacles', 20, 220);
  textSize(20);
  text('Heart = +1 point', 178, 240);
  textSize(20);
  text('Water Drop = -1 point', 178, 260);
  textSize(20);
  text('10 Points = You Win!', 178, 280);

  textSize(22);
  text('click anywhere to start', 210, 350);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'game'
}

function gameMouseClicked(){
  console.log('canvas is clicked on game');
}

function youWin(){
  background(bImg);
  textSize(80);
  textFont('courier');
  text('you made it!', 80, 200);

  textSize (30);
  text('click anywhere to restart', 120, 270);
}

function youWinMouseClicked(){
state = 'game';
points = 0;
}

function gameOver(){
  background(bImg);
  textSize(80);
  textFont('courier');
  text('try again!', 130, 200);

  textSize (30);
  text('click anywhere to restart', 140, 270);
}

function gameOverMouseClicked(){
state = 'game';
points = 0;
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
    textFont('courier');
    text(`points: ${points}`, 500, h - 30);


    if (random(1) < 0.005) {
      obstacle.push(new Obstacle());
    }

    if (random(1) < 0.005) {
      heart.push(new Heart());
    }

    if (random(1) < 0.001) {
    water.push(new Water());
    }

    for (let o of obstacle){
      o.move();
      o.show();
      if (player.hits(o)) {
      noLoop();
      gameOver();
      }
    }

    for (let h of heart){
      h.move();
      h.show();
      if (dist(player.x, player.y, h.x, h.y) <= (player.r + h.r) / 2){
        points +=1;
        console.log('points');
        heart.splice(0, 1);
      }
    }
    for (let w of water){
      w.move();
      w.show();
      if (dist(player.x, player.y, w.x, w.y) <= (player.r + w.r) / 2){
        points -=1;
        water.splice(0, 1);
      }
    }

    if (points >= 10){
      state = 'you win'
    }


    player.show();
    player.move();

    //check for collision, if there is collision increase points by once
}
