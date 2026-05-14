function setup() {
  createCanvas(1600, 900, WEBGL);
}

function draw() {
  background(10);
  orbitControl();
  noStroke();

  // Luz ambiental
  ambientLight(60);
  // Luz puntual con mouse
  pointLight(
    255,
    255,
    255,
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );
  // Luz direccional
  directionalLight(
    255,
    255,
    255,
    sin(frameCount * 0.02),
    1,
    -1
  );

  // Ejercicio 1. Iluminación básica

  push();
  translate(-550, -250, 0);
  ambientMaterial(255, 0, 0);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Ejercicio 2. Materiales

  // ambientMaterial()
  push();
  translate(-150, -250, 0);
  ambientMaterial(0, 255, 0);
  rotateY(frameCount * 0.01);
  box(150);
  pop();

  // specularMaterial()
  push();
  translate(250, -250, 0);
  specularMaterial(0, 0, 255);
  shininess(150);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Ejercicio 3. Escena completa

  // Objeto 1
  push();
  translate(-450, 180, 0);
  ambientMaterial(255, 120, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(140);
  pop();

  // Objeto 2
  push();
  translate(0, 180, 0);
  specularMaterial(180);
  shininess(250);
  rotateY(frameCount * 0.01);
  torus(90, 30);
  pop();

  // Objeto 3
  push();
  translate(450, 180, 0);
  ambientMaterial(0, 255, 255);
  rotateY(frameCount * 0.01);
  sphere(100);
  pop();

  // Desafio 1
  push();
  translate(-700, 100, -200);
  specularMaterial(200);
  shininess(300);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();

  //Desafio 2

  push();
  translate(700, 0, -300);
  ambientMaterial(255, 0, 255);
  rotateY(frameCount * 0.01);
  box(100);
  pop();

  push();
  translate(700, 220, -300);
  ambientMaterial(255, 255, 0);
  rotateY(frameCount * 0.01);
  sphere(70);
  pop();

  push();
  translate(700, -220, -300);
  specularMaterial(0, 255, 255);
  shininess(200);
  rotateY(frameCount * 0.01);
  torus(60, 20);
  pop();

}

/* 
  1. ¿Qué elementos forman una escena 3D?
    Objetos, materiales, luces, cámara y transformaciones.
  2. ¿Por qué la iluminación es importante?
    Porque permite percibir profundidad, forma, volumen y realismo en los objetos.
  3. ¿Qué diferencia hay entre material y color?
    El color define la tonalidad del objeto, mientras que el material define cómo interactúa con la luz.
  4. ¿Cómo se logra el realismo?
    Combinando iluminación, materiales, sombras, texturas y movimiento.
  5. ¿Qué parte fue más compleja?
    La configuración de iluminación y materiales para lograr diferentes efectos visuales.
*/