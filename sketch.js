var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redG,blueG,greenG,pinkG,arrowG

var score=0;

function preload(){
  
  backgroundImage = loadImage("R7d7c7d0bb89e05b2552ba255efe7e2a1.jpeg");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("Re0a0b86f8f24792800ab6eb55f8198eb (2).png");
  red_balloonImage = loadImage("Rf48c183c578b4524ddc0a7e78d302c7f.png");
  green_balloonImage = loadImage("R42cd682d2ae239a6fcd98d107fbc1dd0.png");
  pink_balloonImage = loadImage("balloon-hi.png");
  blue_balloonImage = loadImage("R1e16f411bd8367397b1d5cb3706f77d9.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,200,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 1;
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.14;
  
   score = 0    
  
  //create groups
  redG= new Group();
  greenG=new Group();
  pinkG=new Group();
  blueG=new Group();
  arrowG=new Group();
}

function draw() {
 background(0);
  textSize(20);
  fill(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
  
    if(frameCount%5===0){
      if(keyDown("space")){
      createArrow();}
    }
  if(arrowG.isTouching(redG)){
    arrowG.destroyEach();
    redG.destroyEach();
    
    score=score+1;
    }
  if(arrowG.isTouching(pinkG)){
    arrowG.destroyEach();
    pinkG.destroyEach();
    score=score+5;
    }
  if(arrowG.isTouching(greenG)){
    arrowG.destroyEach();
    greenG.destroyEach();
    score=score+3;
    }
  if(arrowG.isTouching(blueG)){
    arrowG.destroyEach();
    blueG.destroyEach();
    score=score+2;
    }
  drawSprites();
  text("Score: "+ score, 290,40);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowG.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redG.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueG.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenG.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
  pinkG.add(pink);
}
