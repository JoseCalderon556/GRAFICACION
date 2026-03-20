let cx = 300, cy = 150; // pivote 
let A = 0.3; // amplitud
let w = 0.05; // frecuencia
let ang = 0; // angulo de rotacion

function setup() {
 createCanvas(600, 300);
 rectMode(CENTER);
}

function draw() {
 background(240);

  // pulsacion
  let s = 1 + A * sin(w * frameCount); //Mayor A: se infla mas - Mayor ω: el efecto es mas rapido

  // transformaciones compuestas
  push();

  //el orden si importa ya que cambiarlo produce diferentes resultados
  translate(cx, cy); // mover al pivote
  rotate(ang); // rotar
  scale(s); // escalar con pulsacion

  rect(0, 0, 120, 60);

  pop();

  // dibujar el pivote
  fill(255, 0, 0);
  noStroke();
  circle(cx, cy, 6);
}

// pivote con mouse
function mousePressed() {
  cx = mouseX;
  cy = mouseY;
}

// Controles
function keyPressed() {
  if (key === 'a') A += 0.1; // aumentar amplitud
  if (key === 'z') A -= 0.1;

  if (key === 's') w += 0.01; // aumentar frecuencia
  if (key === 'x') w -= 0.01;

  if (keyCode === LEFT_ARROW) ang -= 0.1;
  if (keyCode === RIGHT_ARROW) ang += 0.1;
}