function setup() {
 createCanvas(600, 400);
 rectMode(CENTER);
}

function draw() {
 background(240);

  // Figura controlada por mouse
  push();
  let theta = map(mouseX, 0, width, 0, TWO_PI);

  translate(mouseX, mouseY); // pivote en el mouse
  rotate(theta); // rotacion por mouse
  scale(1 + 0.5 * sin(frameCount * 0.05)); // escala animada

  for (let i = 0; i < 4; i++) {
    push();
    rotate(i * HALF_PI);
    rect(60, 0, 120, 30);
    pop();
  }

  pop();
}

/*¿Qué ocurre cuando el mouse está a la mitad? θ=π: El objeto gira 180°.
  ¿Por qué los resultados son diferentes? porque las transformaciones no conmutan

  1. ¿Por qué p5 usa radianes y no grados?
    Porque son la forma más natural en matemáticas y hacen que sin y cos funcionen directamente.
  2. ¿Qué propiedad matemática hace que la rotación conserve distancias?
    Porque es una isometria: solo gira, no cambia tamanio ni la forma.
  3. ¿Qué sucede si θ = π? 
    El objeto gira 180° y queda al reves.
 */