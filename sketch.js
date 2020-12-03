let player;
let obstacle = [];
let heart;

let w = 700;
let h = 400;

let pImg;
let oImg;
let bImg;
let hImg;

let points = 0;
let state = 'title';
let cnv;



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
  heart = new Heart();
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
    background(bImg);
    text(`points: ${points}`, 500, h - 30);

    if (random(1) < 0.005) {
      obstacle.push(new Obstacle());
    }


    for (let o of obstacle){
      o.move();
      o.show();
      if (player.hits(o)) {
        console.log('game over');
        noLoop();
      }
    }

    player.show();
    player.move();

    heart.display();
    heart.move();

    //check for collision, if there is collision increase points by once
    if (dist(player.x, player.y, heart.x, heart.y) <= (player.r + heart.r) / 2){
      points ++;
      console.log('points');
    }


}
