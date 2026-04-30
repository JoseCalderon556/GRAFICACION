// Variables De Control
let posX = 0;
let posY = -50;
let posZ = 0;
let escala = 1;

let rotX = 0;
let rotY = 0;

let vel = 5;

function setup() {
  createCanvas(1200, 1000, WEBGL);
}

function draw() {
  background(30);
  lights();
  orbitControl();

  let t = frameCount * 0.05;

  // Escena De Plataformas
  push();
  fill(100);
  box(600, 20, 600); // piso
  pop();

  // plataforma 1
  push();
  translate(-150, -80, -100);
  fill(150, 100, 50);
  box(120, 20, 120);
  pop();

  // plataforma 2
  push();
  translate(150, -150, 100);
  fill(150, 100, 50);
  box(120, 20, 120);
  pop();

  // Stickman 
  push();

  translate(posX, posY, posZ); 
  scale(escala);
  rotateX(rotX);           
  rotateY(rotY);

  // Rotacion Automatica
  rotateY(t * 0.3);

  stroke(255);
  strokeWeight(3);
  noFill();

  // Cabeza
  push();
  translate(0, -30, 0);
  sphere(10);
  pop();

  // Cuerpo
  line(0, -20, 0, 0, 20, 0);

  // Brazos
  line(0, 0, 0, -15, 10, 0);
  line(0, 0, 0, 15, 10, 0);

  // Piernas Con Movimiento
  let pierna = sin(t) * 10;
  line(0, 20, 0, -10, 40 + pierna, 0);
  line(0, 20, 0, 10, 40 - pierna, 0);

  pop();

  // Objetos Extra
  push();
  translate(200, -50, -200);
  rotateY(t);
  fill(0, 200, 255);
  box(50);
  pop();

  push();
  translate(-200, -50, 200);
  rotateX(t);
  fill(255, 100, 100);
  cone(40, 80);
  pop();

}

// CONTROL DE TECLADO
function keyPressed() {

  // Movimiento
  if (key === 'w' || key === 'W') posZ -= vel; 
  if (key === 's' || key === 'S') posZ += vel;
  if (key === 'a' || key === 'A') posX -= vel;
  if (key === 'd' || key === 'D') posX += vel;
  if (key === 'r' || key === 'R') posY -= vel; // subir
  if (key === 'f' || key === 'F') posY += vel; // bajar

  // Escala
  if (key === 'q' || key === 'Q') escala -= 0.1;
  if (key === 'e' || key === 'E') escala += 0.1;

  // Rotación
  if (keyCode === LEFT_ARROW) rotY -= 0.1;
  if (keyCode === RIGHT_ARROW) rotY += 0.1;
  if (keyCode === UP_ARROW) rotX -= 0.1;
  if (keyCode === DOWN_ARROW) rotX += 0.1;

  escala = constrain(escala, 0.5, 2);
}
/*
  1. ¿Qué parte del proyecto fue más compleja?
    La integración de todos los componentes: combinar renderizado, transformaciones, animación e interacción del usuario sin que se interfieran entre sí. 
    En particular, coordinar la cámara, el control del personaje y las transformaciones simultáneas.
  2. ¿Cómo se combinan las transformaciones? 
    Se aplican de forma secuencial mediante la pila de transformaciones. 
    Primero traslación, luego rotación y después escala, ya que no son conmutativas.
  3. ¿Qué controla la interacción? 
    Las funciones de entrada como keyPressed() o keyIsDown(). 
    Estas modifican variables de estado, que luego se aplican en draw() para actualizar la escena.
  4. ¿Qué harías para mejorar el proyecto? 
    Agregar cosas mas avanzadas como física básica, detección de colisiones con plataformas, una cámara dinámica que siga al personaje y mejorar la estética con iluminación y materiales.
  5. ¿Qué aprendiste sobre 3D?
    Que los objetos 3D se construyen a partir de vértices y transformaciones, que la cámara define la vista, 
    y que el orden de las transformaciones es fundamental para obtener el comportamiento correcto en una escena.
*/