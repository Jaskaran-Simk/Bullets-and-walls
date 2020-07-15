var weight,speed;
var wall,bullet,wall2,wall3;
var deformation;

function setup() {

  createCanvas(1600,400);


  speed = random(55,90)
  weight = random(400,1500)

  bullet = createSprite(50,300,10,50);
  bullet.velocityX = speed;

 
  
  wall = createSprite(1200,300,60, height/2);


  
  

}

function draw() {
  background(255,255,255);

   
  wall.shapeColor=color(80,80,80)
  

  if(wall.x - car.x < (car.width/2)){
    deformation = 0.5 * weight *speed * speed/22509;
    car.velocityX = 0
    if(deformation > 180 ){
      car.shapeColor=color(255,0,0)
    }
  

  if(deformation<180 && deformation>100){
    car.shapeColor=color(230,230,0)
  }
  if(deformation<100){
    car.shapeColor=color(0,255,0)
  }
}



  drawSprites();
}