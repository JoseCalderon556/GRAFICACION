function setup() {
  createCanvas(600, 400);
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
  // Línea vertical central
  strokeWeight(1);
  line(width/2, 0, width/2, height);
  // Línea horizontal central
  strokeWeight(1);
  line(0, height/2, width, height/2);
  //Circulos en las esquinas
  circle(10,10,15);
  circle(width-10,10,15);
  circle(10,height-10,15);
  circle(width-10,height-10,15);
  //rectangulo centrado
  strokeWeight(2);
  rect((width - 200) / 2, (height - 100) / 2, 200, 100);
  //Punto en el centro
  strokeWeight(8);
  point(width/2,height/2);
}