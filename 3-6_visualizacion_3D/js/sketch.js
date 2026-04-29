
function setup(){
  createCanvas(900,600,WEBGL);
}

function draw(){
  background(150);
  lights();

  let t = frameCount * 0.01;

  // Ejercicio 1: Camara Fija
  let camX = 300;
  let camY = 200;
  let camZ = 400;
  //camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0); // cámara fija

  // Ejercicio 2: Camara En Movimiento
  let radio = 500;
  let movX = cos(t) * radio;
  let movZ = sin(t) * radio;

  camera(movX, 200, movZ, 0, 0, 0, 0, 1, 0); // cámara en movimiento

  // Ejercicio 3: Escena 3D Completa
  orbitControl();
  // Objeto 1
  push();
  translate(-200, 0, 0);
  fill(255, 0, 0);
  box(100);
  pop();

  // Objeto 2
  push();
  translate(200, 0, 0);
  fill(0, 255, 0);
  sphere(70);
  pop();

  // Objeto 3
  push();
  translate(0, 0, -200);
  fill(0, 0, 255);
  cone(70, 120);
  pop();
  
}

/*
  1. ¿Qué es la cámara?
    Es el punto de vista desde el cual se observa la escena 3D. 
    Define la posición, dirección y orientación con la que se proyectan los objetos hacia la pantalla.
  2. ¿Qué pasa si la cámara cambia?
    Cambia la forma en que se ve la escena: los objetos pueden verse más grandes, pequeños, desde otro ángulo o incluso dejar de ser visibles. 
    No se mueve el objeto, sino la perspectiva.
  3. ¿Por qué el mundo se transforma?
    Porque en gráficos 3D se aplican transformaciones relativas a la cámara. 
    Al mover la cámara, se recalculan las posiciones de los objetos respecto a ella, dando la impresión de que el mundo se mueve.
  4. ¿Qué diferencia hay entre coordenadas?
    Coordenadas del mundo: posición real de los objetos en la escena.
    Coordenadas de cámara: posición relativa a la cámara.
    Coordenadas de pantalla: resultado final proyectado en 2D.
  5. ¿Qué papel juega el viewport?
    Define el área de la pantalla donde se renderiza la escena. Controla cómo se ajusta y escala la imagen final dentro de la ventana visible.
*/