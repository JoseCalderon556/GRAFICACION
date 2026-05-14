function setup() {
  createCanvas(1400, 800, WEBGL);
}

function draw() {
  background(20);
  orbitControl();
  noStroke();
  ambientLight(60);

  directionalLight(
    255,
    255,
    255,
    sin(frameCount * 0.02),
    1,
    -1
  );

  pointLight(
    255,
    255,
    255,
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );

  // Ejercicio 1. Sombreado básico

  // Cubo
  push();
  translate(-450, -220, 0);
  ambientMaterial(255, 0, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(140);
  pop();

  // Esfera
  push();
  translate(-150, -220, 0);
  ambientMaterial(0, 0, 255);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Ejercicio 2. Comparación

  // box()
  push();
  translate(200, -220, 0);
  specularMaterial(0, 255, 0);
  shininess(40);
  rotateY(frameCount * 0.01);
  box(150);
  pop();

  // sphere()
  push();
  translate(500, -220, 0);
  specularMaterial(255, 255, 0);
  shininess(40);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Ejercicio 3. Especular

  push();
  translate(-500, 180, 0);
  specularMaterial(255);
  shininess(150);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Desafio 1
  push();
  translate(-150, 180, 0);
  specularMaterial(180);
  shininess(300);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(80, 25);
  pop();

  // Desafio 2
  push();
  translate(200, 180, 0);
  ambientMaterial(255, 80, 0);
  specularMaterial(255, 255, 255);
  shininess(25);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Desafio 3

  // Poco brillo
  push();
  translate(500, 120, 0);
  specularMaterial(255, 0, 0);
  shininess(5);
  sphere(60);
  pop();

  // Brillo medio
  push();
  translate(500, 250, 0);
  specularMaterial(0, 255, 0);
  shininess(50);
  sphere(60);
  pop();

  // Mucho brillo
  push();
  translate(500, 380, 0);
  specularMaterial(0, 0, 255);
  shininess(250);
  sphere(60);
  pop();
}

/* 
  1. ¿Qué diferencia hay entre Gouraud y Phong?
    Gouraud calcula la iluminación en los vértices y luego interpola los colores, mientras que Phong interpola las normales y calcula la iluminación en cada píxel.
  2. ¿Por qué Phong es más realista?
    Porque produce reflejos y transiciones de luz más suaves y detalladas sobre las superficies.
  3. ¿Qué papel tiene la interpolación?
    Permite suavizar los cambios de color e iluminación entre puntos de una superficie.
  4. ¿Qué componente controla el brillo?
    El componente especular y la función shininess() controlan el brillo y los reflejos.
  5. ¿Qué método usarías en videojuegos?
    Phong, porque ofrece una apariencia más realista y mejores efectos de iluminación.
*/