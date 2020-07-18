var weight,speed;
var wall,bullet,wall2,wall3;
var deformation,damage;

function setup() {

  createCanvas(1600,400);


  speed = random(55,90)
  weight = random(400,1500)

  bullet = createSprite(50,300,40,10);
  bullet.velocityX = speed;

 
  
  wall = createSprite(1200,300,60, height/2);


  
  

}

function draw() {
  background(255,255,255);

   
  wall.shapeColor=color(80,80,80)
  



if(hasCollided(bullet,wall)){
  damage = 0.5 * speed * speed/(thickness *thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage>10){
    wall.shapeColor=color(0,255,0)
  }
}


  drawSprites();
}


function hasCollided(LBullet,Lwall){
  bulletRightEdge = LBullet.x + LBullet.width;
  wallLeftEdge-Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;

  }
  return false;

}
