
function setup(){
  createCanvas(900,600,WEBGL);
}

function draw(){
  background(210);
  orbitControl();
  lights();

  let t = frameCount * 0.02;

  // EJERCICIO 1: Traslacion Simple de 3 cubos
  push();
  translate(-250, 150, 0);
  fill(255, 80, 80);
  box(80);
  pop();

  push();
  translate(0, 150, 0);
  fill(80, 255, 80);
  box(80);
  pop();

  push();
  translate(250, 150, 0);
  fill(80, 80, 255);
  box(80);
  pop();


 
  // EJERCICIO 2: Rotaciones combinadas
  push();
  translate(0, -100, 0);
  rotateX(t);
  rotateY(t * 0.7);
  fill(255, 200, 80);
  box(100);
  pop();


  // EJERCICIO 3: Sistema completo

  // Objeto 1: trasladado
  push();
  translate(-250, -250, 0);
  fill(200, 100, 255);
  box(60);
  pop();

  // Objeto 2: escalado
  push();
  translate(0, -250, 0);
  scale(1.5);
  fill(100, 255, 255);
  sphere(40);
  pop();

  // Objeto 3: rotado
  push();
  translate(250, -250, 0);
  rotateX(t * 0.8);
  rotateY(t * 0.4);
  fill(255, 100, 100);
  cone(50, 80);
  pop();
 
}

/*
  1. ¿Por qué se usan matrices?
    Porque permiten representar y combinar transformaciones de forma matemática y eficiente. 
    Ademas se pueden aplicar múltiples transformaciones en una sola operación y mantener coherencia en el sistema de coordenadas.
  2. ¿Qué pasa si cambio el orden de transformaciones?
    El resultado cambia completamente. 
    Las transformaciones no son conmutativas; por ejemplo, no es lo mismo rotar y luego trasladar que trasladar y luego rotar, 
    ya que el objeto puede moverse o girar respecto a distintos puntos.
  3. ¿Por qué el escalamiento puede mover visualmente un objeto?
    Porque el escalado se realiza respecto al origen del sistema de coordenadas. 
    Si el objeto no está centrado en el origen, al escalar sus coordenadas cambian proporcionalmente, dando la impresión de que se desplaza.
  4. ¿Qué eje cambia en cada rotación?
    rotateX(): rota alrededor del eje X (afecta Y y Z)
    rotateY(): rota alrededor del eje Y (afecta X y Z)
    rotateZ(): rota alrededor del eje Z (afecta X y Y)
  5. ¿Cómo se vería un objeto sin transformaciones?
    Se vería en su posición original, generalmente centrado en el origen, sin rotación ni escalado, con su tamaño y orientación por defecto.
*/