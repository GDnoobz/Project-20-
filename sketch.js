var car, wall
var speed, weight

function setup() {
  createCanvas(1540,400);

  //creating the car and wall
  car = createSprite(100, 200, 50, 50);
  wall = createSprite(1340, 200, 35, height/2);
  //defining the speed and weight of the car
  speed = random(40, 100);
  weight = random(400, 1500);
  //speed for the car
  car.velocityX = speed;
}

function draw() {
  background("black");
  //hippity hoppity your code is now my property
  if (wall.x - car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    //making the deformation variable to make life easier
    var deformation = 0.5 * weight * speed * speed / 22500
    //changing colors based on the deformation
    if (deformation > 180) {
      car.shapeColor = color(255,0,0);
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
