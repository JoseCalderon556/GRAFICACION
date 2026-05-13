function setup() {
  createCanvas(1400, 800, WEBGL);
}

function draw() {
  background(15);
  orbitControl();
  noStroke();

  
  // Desafio 2
  pointLight(
    255,
    255,
    255,
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );

  // Ejercicio 1. Luz ambiental
  push();
  translate(-500, -220, 0);
  ambientLight(180);
  ambientMaterial(255, 0, 0);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Ejercicio 2. Luz difusa
  push();
  translate(0, -220, 0);
  directionalLight(
    255,
    255,
    255,
    sin(frameCount * 0.02),
    1,
    -1
  );
  ambientMaterial(0, 255, 0);
  rotateY(frameCount * 0.01);
  box(160);
  pop();

  // Ejercicio 3. Especular
  push();
  translate(500, -220, 0);
  directionalLight(255, 255, 255, 1, 1, -1);
  specularMaterial(0, 0, 255);
  shininess(100);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Desafio 1

  // Mate
  push();
  translate(-450, 220, 0);
  directionalLight(255, 255, 255, 1, 1, -1);
  specularMaterial(255, 0, 0);
  shininess(5);
  sphere(80);
  pop();

  // Semi brillante
  push();
  translate(0, 220, 0);
  directionalLight(255, 255, 255, 1, 1, -1);
  specularMaterial(0, 255, 0);
  shininess(40);
  sphere(80);
  pop();

  // Muy brillante
  push();
  translate(450, 220, 0);
  directionalLight(255, 255, 255, 1, 1, -1);
  specularMaterial(0, 0, 255);
  shininess(200);
  sphere(80);
  pop();

  // Desafio 3

  // Metal
  push();
  translate(-200, 0, 250);
  specularMaterial(180);
  shininess(250);
  rotateY(frameCount * 0.01);
  torus(70, 25);
  pop();

  // Plástico
  push();
  translate(200, 0, 250);
  ambientMaterial(255, 120, 0);
  shininess(10);
  rotateY(frameCount * 0.01);
  torus(70, 25);
  pop();
}

/* 
  1. ¿Qué componente aporta volumen?
    La iluminación difusa aporta volumen porque genera zonas iluminadas y sombras según la dirección de la luz.
  2. ¿Qué componente depende de la cámara?
    La iluminación especular depende de la posición de la cámara, ya que los reflejos cambian según el punto de vista.
  3. ¿Por qué el producto punto es importante?
    Porque permite calcular la intensidad de la luz sobre una superficie según el ángulo entre la luz y la normal.
  4. ¿Qué pasa si no hay iluminación difusa?
    Los objetos pierden sensación de profundidad y volumen, viéndose más planos.
  5. ¿Qué controla el brillo?
    La función shininess() controla la intensidad y concentración del reflejo especular sobre la superficie.
*/