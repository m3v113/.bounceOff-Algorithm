var movingrect, fixedrect;

function setup() {
  //creates the canvas
  createCanvas(1200,1200);

  movingrect = createSprite(100, 500, 50, 50);
  movingrect.shapeColor = "red";
  movingrect.velocityX= 2;
  //movingrect.debug = true;

  fixedrect = createSprite(800, 500, 50,50);
  fixedrect.shapeColor = "black";
  fixedrect.velocityX= -2;
  //fixedrect.debug = true;

  

}

function draw() {
  //to add color and clear the screen
  background("blue");


if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 
  && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2
  ) {
  movingrect.velocityX = movingrect.velocityX * (-1);
  fixedrect.velocityX = fixedrect.velocityX * (-1);
}
if(movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
  && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
  movingrect.velocityY = movingrect.velocityY * (-1);
  fixedrect.velocityY  = fixedrect.velocityY *  (-1);
}
  drawSprites();
}