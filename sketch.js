var movingRect, fixedRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(400, 200, 150, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200, 200, 80, 130);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //console.log(movingRect.x - fixedRect.x);
  //console.log(movingRect.width/2 + fixedRect.width/2)

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y< movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}


// movingRect.width/2 + fixedRect.width/2 
//= movingRect.x - fixedRect.x

