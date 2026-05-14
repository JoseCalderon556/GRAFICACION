let tipoLuz = 1;
let modoColor = 1;

function setup() {
  createCanvas(1700, 950, WEBGL);
}

function draw() {

  // Fondo
  background(8);
  orbitControl();
  noStroke();

  // Teclado
  // 1 = luz ambiental
  // 2 = luz direccional
  // 3 = linterna
  // Q = colores fríos
  // W = colores cálidos

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
    if (key == 'q' || key == 'Q') {
      modoColor = 1;
    }
    if (key == 'w' || key == 'W') {
      modoColor = 2;
    }
  }

  // Colores
  let carroceria;
  let neon;
  let pared;

  if (modoColor == 1) {
    carroceria = color(0, 170, 255);
    neon = color(0, 255, 255);
    pared = color(50);
  }

  if (modoColor == 2) {
    carroceria = color(255, 80, 0);
    neon = color(255, 0, 120);
    pared = color(70, 50, 40);
  }

  // Iluminacion
  ambientLight(10);

  // Luz ambiental
  if (tipoLuz == 1) {
    ambientLight(180);
  }

  // Luz direccional
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

  // Linterna
  if (tipoLuz == 3) {
    pointLight(
      255,
      255,
      220,
      mouseX - width / 2,
      mouseY - height / 2,
      250
    );
  }

  // Piso
  push();
  translate(0, 320, 0);
  rotateX(HALF_PI);
  ambientMaterial(35);
  plane(2500, 2500);
  pop();

  // Paredes
  // Trasera
  push();
  translate(0, -50, -900);
  ambientMaterial(pared);
  plane(2500, 1000);
  pop();

  // Izquierda
  push();
  translate(-1200, -50, 0);
  rotateY(HALF_PI);
  ambientMaterial(pared);
  plane(2500, 1000);
  pop();

  // Derecha
  push();
  translate(1200, -50, 0);
  rotateY(HALF_PI);
  ambientMaterial(pared);
  plane(2500, 1000);
  pop();
  // Techo
  push();
  translate(0, -450, 0);
  rotateX(HALF_PI);
  ambientMaterial(25);
  plane(2500, 2500);
  pop();

  // Carroceria
  push();
  translate(0, 120, 0);
  specularMaterial(carroceria);
  shininess(250);
  box(500, 120, 250);
  pop();
  // Cabina
  push();
  translate(0, 40, 0);
  specularMaterial(carroceria);
  shininess(200);
  box(260, 100, 230);
  pop();

  // Llantas
  // Delantera izquierda
  push();
  translate(-180, 220, 140);
  rotateZ(HALF_PI);
  ambientMaterial(20);
  torus(55, 20);
  pop();

  // Delantera derecha
  push();
  translate(-180, 220, -140);
  rotateZ(HALF_PI);
  ambientMaterial(20);
  torus(55, 20);
  pop();

  // Trasera izquierda
  push();
  translate(180, 220, 140);
  rotateZ(HALF_PI);
  ambientMaterial(20);
  torus(55, 20);
  pop();

  // Trasera derecha
  push();
  translate(180, 220, -140);
  rotateZ(HALF_PI);
  ambientMaterial(20);
  torus(55, 20);
  pop();

  // Faros
  push();
  translate(-260, 120, 80);
  emissiveMaterial(255, 255, 180);
  sphere(25);
  pop();
  push();
  translate(-260, 120, -80);
  emissiveMaterial(255, 255, 180);
  sphere(25);
  pop();

  // Luces Garage
  push();
  translate(0, -300, -850);
  emissiveMaterial(neon);
  box(800, 20, 20);
  pop();
  push();
  translate(-700, -250, -850);
  emissiveMaterial(neon);
  box(20, 200, 20);
  pop();
  push();
  translate(700, -250, -850);
  emissiveMaterial(neon);
  box(20, 200, 20);
  pop();

  // Objetos extra
  push();
  translate(700, 200, -500);
  ambientMaterial(100);
  cylinder(60, 180);
  pop();
  push();
  translate(-700, 180, -450);
  normalMaterial();
  rotateY(frameCount * 0.01);
  box(140);
  pop();

  // Indicador de la linterna
  if (tipoLuz == 3) {
    push();
    translate(
      mouseX - width / 2,
      mouseY - height / 2,
      250
    );
    emissiveMaterial(255, 255, 200);
    sphere(12);
    pop();
  }

}

/* 
  1. ¿Qué tipo de luz generó el efecto visual más evidente?
    La luz puntual tipo linterna fue la más evidente, ya que ilumina únicamente las zonas hacia donde apunta el mouse, generando sombras y resaltando detalles del Carro y el garage.
  2. ¿Qué diferencia observaste entre ambientMaterial() y specularMaterial()?
    ambientMaterial() produjo superficies mates y con iluminación uniforme, mientras que specularMaterial() generó reflejos brillantes y un efecto metálico más realista en la carrocería del auto.
  3. ¿Por qué el sombreado ayuda a percibir volumen?
    Porque las diferencias entre luz y sombra permiten distinguir profundidad, curvaturas y forma en los objetos 3D.
  4. ¿Qué función cumple orbitControl()?
    Permite mover y rotar la cámara con el mouse para explorar la escena desde diferentes ángulos.
  5. ¿Cómo mejorarías la escena para hacerla más realista?
    Agregaría texturas reales al piso y paredes, sombras dinámicas, reflejos más avanzados y modelos 3D más detallados para el automóvil y los objetos del garage.
*/