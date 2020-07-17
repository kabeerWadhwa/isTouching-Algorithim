var movingrect, fixedrect;

function setup() {
  createCanvas(800,800);
  movingrect = createSprite(400, 400, 50, 50);
  movingrect.shapeColor = "blue";
  fixedrect = createSprite(680,400,30,30);
  fixedrect.shapeColor = "blue"
}

function draw() {
  background(0);
  movingrect.y = mouseY
  movingrect.x = mouseX
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x < fixedrect.width/2 + fixedrect.width/2 && 
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2) {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else {
    movingrect.shapeColor = "blue";
    fixedrect.shapeColor = "blue"
  }
  drawSprites();
}