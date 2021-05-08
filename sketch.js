var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars,car1,car2,car3,car4; 
var track,ground,car1_image,car2_image,car3_image,car4_image;
var passedFinish,finishedPlayers=0;

function preload(){
track=loadImage("images/track.jpg")
ground=loadImage("images/ground.png")
car1_image=loadImage("images/car1.png")
car2_image=loadImage("images/car2.png")
car3_image=loadImage("images/car3.png")
car4_image=loadImage("images/car4.png")  
f1_image=loadImage("images/f1.png")
s=loadSound("sound/sliding.mp3")
}


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();

  xVel=0
  yVel=0

  obstacles=createGroup();


  for(i=0;i<5;i++){
    x=random(200,950)
    y=random(-height*4,height-300)
    f1=createSprite(x,y)
    f1.addImage(f1_image)
    obstacles.add(f1)
  }
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4&&finishedPlayers===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers===4){
    game.update(2)
  }
  if (gameState===2){
    game.end()
  }
}