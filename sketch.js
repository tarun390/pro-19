var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,150);
  car = createSprite(50,200,50,50);
  car.velocity=speed;
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=o;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      car.shapeColor=color(257,2,0);
    }
    if(deformation<180 && deomation>100){
      car.shapeColor=color(235,225,0);
    }
    if(deformation<100){
      car.shapeColor=color(5,245,2);
    }
  }
  drawSprites();
};