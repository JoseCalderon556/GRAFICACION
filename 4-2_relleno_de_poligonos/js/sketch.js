let textura1;
let textura2;
let texturaActual;

function preload() {
  textura1 = loadImage(
    "https://imgs.search.brave.com/flHIuXlNCItu9yfmK4htzZV6ckNayN80bWun-lP0uzk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWRzdHRjLmNv/bS9tZWRpYS9pbWFn/ZXMvNWY1Mi84MTRi/L2IzNTcvNjU3NC81/MjAwLzAzMDMvbWVk/aXVtX2pwZy9SZWQt/U2FuZHN0b25lLVN0/YWdnZXJlZC1BcmNo/aXRleHR1cmVzLmpw/Zz8xNTk5MjQyNTY1"
  );

  textura2 = loadImage(
    "https://imgs.search.brave.com/UXwqVHjwUB4wNJd_BuA4E95w62Bb7phC3Pd5xvbfn64/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzgv/MDk0LzExOC9zbWFs/bC9haS1nZW5lcmF0/ZWQtdGFyLXRleHR1/cmVzLWJhY2tncm91/bmQtZnJlZS1waG90/by5qcGc"
  );
}

function setup() {
  createCanvas(1200, 700, WEBGL);
  texturaActual = textura1;
}

function draw() {

  background(20);
  orbitControl();
  ambientLight(120);
  directionalLight(255, 255, 255, 1, 1, -1);
  noStroke();

  // Ejercicio 1. Relleno básico

  // Cubo rojo
  push();
  translate(-400, -200, 0);
  rotateY(frameCount * 0.01);
  fill(255, 0, 0);
  box(120);
  pop();

  // Esfera verde
  push();
  translate(-200, -200, 0);
  rotateY(frameCount * 0.01);
  fill(0, 255, 0);
  sphere(70);
  pop();

  // Toroide azul
  push();
  translate(0, -200, 0);
  rotateY(frameCount * 0.01);
  fill(0, 0, 255);
  torus(70, 25);
  pop();

  // Ejercicio 2. Degradado

  push();
  translate(-350, 120, 0);
  rotateY(frameCount * 0.01);
  for (let i = -60; i < 60; i += 5) {
    let inter = map(i, -60, 60, 0, 1);
    let c = lerpColor(
      color(255, 0, 0),
      color(0, 0, 255),
      inter
    );
    fill(c);
    push();
    translate(i, 0, 0);
    box(5, 120, 120);
    pop();
  }
  pop();

  // Desafio 2
  push();
  translate(0, 120, 0);
  rotateY(frameCount * 0.01);
  for (let i = 0; i < 20; i++) {
    let inter = map(i, 0, 20, 0, 1);
    let c = lerpColor(
      color(255, 255, 0),
      color(255, 0, 255),
      inter
    );
    fill(c);
    sphere(80 - i * 3);
  }
  pop();

  // Ejercicio 3. Textura
  push();
  translate(350, 100, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(texturaActual);
  box(180);
  pop();

  // Desafio 1
  push();
  translate(350, -220, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  beginShape(QUADS);
  // Frente
  fill(255, 0, 0);
  vertex(-50, -50, 50);
  vertex(50, -50, 50);
  vertex(50, 50, 50);
  vertex(-50, 50, 50);
  // Atrás
  fill(0, 255, 0);
  vertex(-50, -50, -50);
  vertex(50, -50, -50);
  vertex(50, 50, -50);
  vertex(-50, 50, -50);
  // Izquierda
  fill(0, 0, 255);
  vertex(-50, -50, -50);
  vertex(-50, -50, 50);
  vertex(-50, 50, 50);
  vertex(-50, 50, -50);
  // Derecha
  fill(255, 255, 0);
  vertex(50, -50, -50);
  vertex(50, -50, 50);
  vertex(50, 50, 50);
  vertex(50, 50, -50);
  // Arriba
  fill(255, 0, 255);
  vertex(-50, -50, -50);
  vertex(50, -50, -50);
  vertex(50, -50, 50);
  vertex(-50, -50, 50);
  // Abajo
  fill(0, 255, 255);
  vertex(-50, 50, -50);
  vertex(50, 50, -50);
  vertex(50, 50, 50);
  vertex(-50, 50, 50);

  endShape();
  pop();

  // Desafio 3

  if (keyIsPressed) {

    if (key == '1') {
      texturaActual = textura1;
    }

    if (key == '2') {
      texturaActual = textura2;
    }
  }
}

/* 
  1. ¿Qué diferencia hay entre relleno y sombreado?
    El relleno aplica un color uniforme al objeto, mientras que el sombreado utiliza iluminación para generar profundidad y volumen.
  2. ¿Por qué el degradado mejora la visualización?
    Porque crea transiciones suaves entre colores, haciendo que los objetos se vean más naturales y con mayor profundidad visual.
  3. ¿Qué es interpolación?
    Es el proceso de calcular valores intermedios entre dos valores conocidos.
  4. ¿Qué representa (u,v)?
    Representa las coordenadas de textura utilizadas para mapear una imagen sobre la superficie de un objeto 3D.
  5. ¿Qué método es más realista?
    El uso de texturas e iluminación es más realista, ya que permite representar detalles, sombras y reflejos similares a los objetos reales.
*/