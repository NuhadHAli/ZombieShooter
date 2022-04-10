var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var zombieGroup;
var hearts;
var life1, life2, life3, lifeImg1, lifeImg2, lifeImg3;
var gameState;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  lifeImg1 = loadImage("assets/heart_1.png")
  lifeImg2 = loadImage("assets/heart_2.png")
  lifeImg3 = loadImage("assets/heart_3.png")


  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  gameState = 'PLAY';

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

life3 = createSprite(1400, 30, 100, 100)
life3.addImage(lifeImg3)
life3.scale = 0.2

life2 = createSprite(1380, 30, 100, 100)
life2.addImage(lifeImg2)
life2.scale = 0.2

life1 = createSprite(1360, 30, 100, 100)
life1.addImage(lifeImg1)
life1.scale = 0.2

hearts = 3;

zombieGroup= new Group();
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyDown("LEFT_ARROW")){
  player.x = player.x-30
}

if(keyDown("RIGHT_ARROW")){
  player.x = player.x+30
}


if(gameState = 'PLAY'){

//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if(zombieGroup.isTouching(player)){
  hearts = hearts-1
  zombieGroup.destroy()
  }
 
   if(hearts <= 0){
    player.destroy()
  }

  if(hearts = 2){
    life3.visibility = false
  }

  if(hearts = 1){
    life2.visibility = false
  }

drawSprites();
SpawnZombies();
}

}

function SpawnZombies(){
  if (frameCount % 100 === 0) {
    zombie = createSprite( random(1500,1000),random(600,400), 100, 100);
    zombie.velocityX = -6;
    zombie.addImage(zombieImg);
    zombie.scale=0.17;
    zombie.lifetime=250;
    zombieGroup.add(zombie)
  }
}