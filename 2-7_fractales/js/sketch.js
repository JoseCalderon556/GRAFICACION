function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);
  translate(width/2, height);

  let ang = map(mouseX, 0, width, 0, PI/2);

  ramaInteractiva(100, ang, 0);
}

function ramaInteractiva(len, ang, nivel) {

  let r = map(nivel, 0, 10, 120, 0);
  let g = map(nivel, 0, 10, 60, 200);
  let b = 0;

  stroke(r, g, b);
  strokeWeight(map(len, 0, 100, 1, 6));

  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 8) {

    push();
    rotate(ang);
    ramaInteractiva(len * 0.5, ang, nivel + 1);
    pop();

    push();
    rotate(-ang);
    ramaInteractiva(len * 0.5, ang, nivel + 1);
    pop();

    push();
    ramaInteractiva(len * 0.5, ang, nivel + 1);
    pop();
  }
}

/*
  1. ¿Por qué se necesita condición de parada?
  Para evitar recursión infinita. Sin ella, el programa nunca termina.

  2. ¿Qué tipo de crecimiento genera la recursión del árbol?
  Crecimiento exponencial. El número de ramas aumenta muy rápido.

  3. ¿Qué significa que la dimensión fractal no sea entera?
  Que la figura está entre dimensiones. Tiene detalle infinito y no es una forma geométrica simple.
*/