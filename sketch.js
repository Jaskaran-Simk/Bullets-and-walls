var weight,speed,thickness;
var wall,bullet;
var deformation,damage;


function setup() {

  createCanvas(1600,400);


  speed = random(55,90)
  weight = random(400,1500)

  bullet = createSprite(50,230,40,10);
  bullet.velocityX = speed;
  

 
  
  wall = createSprite(1400,230,60, height/2);

  
 
  

}

function draw() {
  background("black");
  

  
   
  
  



if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  damage = 0.5 * weight * speed * speed (thickness *thickness*thickness);


  if(damage<10)
  {

    wall.shapeColor=color(255,0,0);

  }
  if(damage>10){

    wall.shapeColor=color(0,255,0)

  }
}




//console.log(damage.x)

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
