var weight,speed,thickness;
var wall,bullet;



function setup() {

  createCanvas(1600,400);


  speed = random(223,321)
  weight = random(30,52)

  bullet = createSprite(50,230,40,10);
  bullet.velocityX = speed;
  

 thickness = random(22,83)
  
  wall = createSprite(1400,230,60, height/2);

  
 
  

}

function draw() {
  background("black");
  

  
   
  bullet.shapeColor=color("white")
  



if(hasCollided(bullet,wall))
{
  
 var  damage = 0.5 * weight * speed * speed / (thickness *thickness *thickness);
 bullet.velocityX=0;

  if(damage>10)
  {

    wall.shapeColor=color(255,0,0);

  }
  if(damage<10){

    wall.shapeColor=color(0,255,0);

  }
}




console.log(bullet.speed)

  drawSprites();
}


function hasCollided(LBullet,Lwall){

  bulletRightEdge=LBullet.x + LBullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true

  }
  return false;

}