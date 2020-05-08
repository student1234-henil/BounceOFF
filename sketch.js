function setup() {
  createCanvas(800,400);
 movingRectangle = createSprite(400, 100, 50, 50);
  movingRectangle.shapeColor="green";
  fixdRectangle = createSprite(400, 400, 80, 30);
    fixdRectangle.shapeColor="green";

    movingRectangle.velocityY =+5;
    fixdRectangle.velocityY = -5;

    square = createSprite(600, 100, 50, 50);
  square.shapeColor="green";
  Rectangle = createSprite(600, 400, 80, 30);
    Rectangle.shapeColor="green";

    square.velocityY  = +5;
    Rectangle.velocityY  = -5;
}

function draw() {
  background(0); 

  bounceOff(square,Rectangle);

  
  drawSprites();

}




