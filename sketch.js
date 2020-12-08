var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(300,300,50,80)
  gameobject1.shapeColor = "green";

  gameobject2 = createSprite(500,300,50,80)
  gameobject2.shapeColor = "green";

  gameobject3 = createSprite(700,300,50,80)
  gameobject3.shapeColor = "green";
}

function draw() {
  background(0,255,213);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameobject2,movingRect)){
    movingRect.shapeColor = "red";
    gameobject2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }
  
  drawSprites();
}






