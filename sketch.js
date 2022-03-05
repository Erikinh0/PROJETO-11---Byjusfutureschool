var ship, ship_Ani;
var sea, sea_Img;
function preload(){
  sea_Img = loadImage("sea.png")
  ship_Ani = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(1830,850);
  
  sea = createSprite(310,180,400,20)
  sea.addImage("seaa", sea_Img)
  sea.x = sea.width /2;
  sea.velocityX = -6;


  ship = createSprite(430,340,100,20)
  ship.addAnimation("shipp", ship_Ani)
  ship.scale=0.8


}

function draw() {
  if (sea.x < 0){
    sea.x = sea.width /2;
  }
    drawSprites();

 
}
