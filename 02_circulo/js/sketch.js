let x = 0;
let y = 0;
let velocidadx = 5;
let velocidady = 5;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  stroke(0);
  line(615,20,770,20);
  stroke(126);
  line(770,20,770,175);
  stroke(255);
  line(770,175,615,175);
  line(615,175,615,20);
}

function draw(){
  background(220);
  frameRate(30);
  circle(x,y,40);
  x += velocidadx;
  y += velocidady;
  if(x > width || x < 0){
    velocidadx = -velocidadx;
  }
  if(y > height || y < 0){
    velocidady = -velocidady;
  }
  
}