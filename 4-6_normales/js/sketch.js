let tipoLuz = 1;

function setup() {
  createCanvas(1500, 850, WEBGL);
}

function draw() {
  background(15);
  orbitControl();
  noStroke();

  // Teclas de iluminacion
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

  if (tipoLuz == 1) {
    ambientLight(180);
  }

  if (tipoLuz == 2) {
    directionalLight(
      255,
      255,
      255,
      sin(frameCount * 0.02),
      1,
      -1
    );
  }

  if (tipoLuz == 3) {
    pointLight(
      255,
      255,
      255,
      mouseX - width / 2,
      mouseY - height / 2,
      300
    );
  }

  // Ejercicio 1. Visualizar normales

  // Esfera con normalMaterial()
  push();
  translate(-500, -220, 0);
  rotateY(frameCount * 0.01);
  normalMaterial();
  sphere(90);
  pop();

  // Cubo con normalMaterial()
  push();
  translate(-200, -220, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial();
  box(150);
  pop();

  // Ejercicio 2. Comparación

  // Esfera
  push();
  translate(150, -220, 0);
  ambientMaterial(0, 255, 255);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Cubo
  push();
  translate(450, -220, 0);
  ambientMaterial(255, 120, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(150);
  pop();

  // Ejercicio 3. Luz dinámica

  push();
  translate(-500, 180, 0);
  pointLight(
    255,
    255,
    255,
    mouseX - width / 2,
    mouseY - height / 2,
    300
  );
  specularMaterial(0, 0, 255);
  shininess(150);
  rotateY(frameCount * 0.01);
  sphere(90);
  pop();

  // Desafio 1

  // Metálico
  push();
  translate(-100, 180, 0);
  specularMaterial(180);
  shininess(300);
  rotateY(frameCount * 0.01);
  torus(80, 25);
  pop();

  // Mate
  push();
  translate(250, 180, 0);
  ambientMaterial(150, 50, 50);
  shininess(5);
  rotateY(frameCount * 0.01);
  torus(80, 25);
  pop();

  // Desafio 2
  push();
  translate(550, 180, 0);
  stroke(255);
  noFill();
  box(120);

  // Líneas simulando normales
  line(0, 0, 0, 0, -120, 0);
  line(0, 0, 0, 120, 0, 0);
  line(0, 0, 0, 0, 0, 120);
  pop();
}

/* 
  1. ¿Qué representa una normal?
    Representa una dirección perpendicular a la superficie de un objeto.
  2. ¿Por qué es perpendicular?
    Porque se define matemáticamente como un vector ortogonal a la superficie para indicar su orientación.
  3. ¿Qué pasa si la normal es incorrecta?
    La iluminación se calcula mal y el objeto puede verse oscuro, deformado o con sombras incorrectas.
  4. ¿Por qué afecta la iluminación?
    Porque las normales determinan cómo incide la luz sobre cada superficie.
  5. ¿Qué diferencia hay entre cara y vértice?
    Una cara es una superficie formada por varios puntos, mientras que un vértice es un punto individual donde se unen las caras.
*/