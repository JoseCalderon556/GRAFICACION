let tipoLuz = 1;

function setup() {
  createCanvas(1200, 700, WEBGL);
}

function draw() {

  background(15);
  orbitControl();
  noStroke();

  // Cambio de luz
  // 1 = ambiental
  // 2 = direccional
  // 3 = puntual

  if (keyIsPressed) {
    if (key == '1') {
      tipoLuz = 1;
    }
    if (key == '2') {
      tipoLuz = 2;
    }
    if (key == '3') {
      tipoLuz = 3;
    }
  }

  // Ejercicio 1. Luz ambiental
  push();
  translate(-400, -180, 0);
  ambientLight(180);
  ambientMaterial(255, 0, 0);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Ejercicio 2. Luz direccional
  push();
  translate(0, -180, 0);
  directionalLight(255, 255, 255, 1, 1, -1);
  specularMaterial(0, 255, 0);
  rotateY(frameCount * 0.01);
  box(150);
  pop();

  // Ejercicio 3. Luz interactiva

  push();
  translate(400, -180, 0);
  pointLight(
    255,
    255,
    255,
    mouseX - width / 2,
    mouseY - height / 2,
    200
  );
  specularMaterial(0, 0, 255);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Desafio 1
  push();
  translate(-350, 180, 0);
  pointLight(
    255,
    255,
    200,
    mouseX - width / 2,
    mouseY - height / 2,
    100
  );
  specularMaterial(255, 255, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(80, 25);
  pop();

  // Desafio 2
  push();
  translate(0, 180, 0);
  ambientLight(60);
  directionalLight(255, 255, 255, 1, 0, -1);
  pointLight(
    255,
    255,
    255,
    mouseX - width / 2,
    mouseY - height / 2,
    200
  );
  specularMaterial(255, 0, 255);
  rotateY(frameCount * 0.01);
  box(150);
  pop();

  // Desafio 3
  push();
  translate(350, 180, 0);
  if (tipoLuz == 1) {
    ambientLight(180);
  }
  if (tipoLuz == 2) {
    directionalLight(255, 255, 255, 1, 1, -1);
  }
  if (tipoLuz == 3) {
    pointLight(
      255,
      255,
      255,
      mouseX - width / 2,
      mouseY - height / 2,
      200
    );
  }
  specularMaterial(0, 255, 255);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();
}

/* 
  1. ¿Qué es iluminación en gráficos?
    Es el proceso de simular cómo la luz interactúa con los objetos para generar volumen, profundidad y realismo.
  2. ¿Qué representa el producto punto?
    Representa el ángulo entre la dirección de la luz y la normal de una superficie, permitiendo calcular la intensidad de iluminación.
  3. ¿Por qué la luz cambia la percepción?
    Porque genera sombras, reflejos y contrastes que ayudan a percibir forma, profundidad y posición de los objetos.
  4. ¿Qué diferencia hay entre luz puntual y direccional?
    La luz puntual se emite desde un punto específico en todas direcciones, mientras que la luz direccional tiene una dirección fija y simula una fuente lejana como el sol.
  5. ¿Cuál es más realista?
    La luz puntual suele ser más realista para escenas cercanas, mientras que la luz direccional es útil para simular iluminación global como la luz solar.
*/