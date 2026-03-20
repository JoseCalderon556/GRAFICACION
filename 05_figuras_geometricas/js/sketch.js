function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  // Base
  fill(200, 150, 100);
  rect(200, 200, 200, 150);
  // Techo
  fill(150, 50, 50);
  triangle(200, 200, 300, 120, 400, 200);
  // Puerta
  fill(100, 50, 20);
  rect(280, 270, 40, 80);
  // Sol
  fill(255, 200, 0);
  circle(500, 80, 80);

  // Circulos alineados
  fill(0, 100, 255);
  circle(50, 50, 30);
  circle(90, 50, 30);
  circle(130, 50, 30);

  // Triangulo equilatero aproximado
  fill(0, 255, 150);
  triangle(80, 120, 50, 170, 110, 170);

  // Arco semicircular
  noFill();
  stroke(0);
  arc(150, 150, 80, 80, PI, TWO_PI);

  // Objetivo
  noStroke();
  fill(255, 0, 0);
  circle(500, 300, 80);
  fill(255);
  circle(500, 300, 50);
  fill(255, 0, 0);
  circle(500, 300, 20);

  // Ventana
  stroke(0);
  fill(200);
  rect(230, 230, 40, 40);
  line(250, 230, 250, 270);
  line(230, 250, 270, 250);

  // Flor
  noStroke();
  fill(255, 100, 150);
  for (let i = 0; i < 8; i++) {
    let angulo = TWO_PI / 8 * i;
    let x = 150 + cos(angulo) * 30;
    let y = 300 + sin(angulo) * 30;
    circle(x, y, 20);
  }
  fill(255, 200, 0);
  circle(150, 300, 20);


  // Poligono
  stroke(0);
  noFill();

  let lados = 6;
  let radio = 40;
  let cx = 350;
  let cy = 80;

  beginShape();
  for (let i = 0; i < lados; i++) {
    let angulo = TWO_PI / lados * i;
    let x = cx + radio * cos(angulo);
    let y = cy + radio * sin(angulo);
    vertex(x, y);
  }
  endShape(CLOSE);
}
