
function setup(){
  createCanvas(1000,800,WEBGL);
}

function draw(){
  background(150);
  orbitControl();

  let t = frameCount * 0.02;

  // Ejercicio 1: Dibujar Un Cubo Con Vertices
  push();
  translate(-350, -250, 0);
  stroke(255);
  noFill();

  let s = 50;

  let v = [
    createVector(-s, -s, -s),
    createVector(s, -s, -s),
    createVector(s, s, -s),
    createVector(-s, s, -s),
    createVector(-s, -s, s),
    createVector(s, -s, s),
    createVector(s, s, s),
    createVector(-s, s, s)
  ];

  let aristas = [
    [0,1],[1,2],[2,3],[3,0],
    [4,5],[5,6],[6,7],[7,4],
    [0,4],[1,5],[2,6],[3,7]
  ];

  for (let e of aristas) {
    line(v[e[0]].x, v[e[0]].y, v[e[0]].z,v[e[1]].x, v[e[1]].y, v[e[1]].z);
  }
  pop();

  // Ejercicio 2: Aplicar Transformaciones
  push();
  translate(-100, -250, 0);
  fill(255, 0, 0);
  box(80);
  pop();

  push();
  translate(100, -250, 0);
  scale(1.5);
  fill(0, 255, 0);
  sphere(40);
  pop();


  // Ejercicio 3: Rotaciones En Ejes X,Y,Z
  push();
  translate(-200, 0, 0);
  rotateX(t);
  fill(255, 150, 0);
  box(70);
  pop();

  push();
  translate(0, 0, 0);
  rotateY(t);
  fill(0, 200, 255);
  cylinder(40, 100);
  pop();

  push();
  translate(200, 0, 0);
  rotateZ(t);
  fill(200, 0, 255);
  cone(50, 100);
  pop();


  // Ejercicio 4: Rotacion En Eje Arbitrario
  push();
  translate(0, 150, 0);
  rotate(t, createVector(1, 1, 0)); // eje arbitrario
  fill(255, 255, 0);
  box(80);
  pop();


  // Ejercicio 5: Integracion De Practicas

  // Cubo wireframe
  push();
  translate(0, 270, -100);
  stroke(255);
  noFill();
  box(100);
  pop();

  // Esfera
  push();
  translate(150, 250, 0);
  noStroke();
  fill(0, 255, 150);
  sphere(60);
  pop();

  // Objeto rotando
  push();
  translate(-150, 250, 0);
  rotateY(t);
  fill(255, 0, 100);
  box(70);
  pop();

  // Transformaciones combinadas
  push();
  translate(0, 250, 150);
  rotateX(t);
  rotateY(t * 0.5);
  scale(0.8);
  fill(100, 100, 255);
  cone(60, 100);
  pop();
}

/*
  1. ¿Cómo se construye un cubo desde cero?
    Se definen primero 8 vértices en el espacio. Luego se conectan mediante 12 aristas usando líneas, o se agrupan en 6 caras para formar un sólido.
  2. ¿Qué transformación es más importante?
    Depende del objetivo. Sin embargo, la traslación suele considerarse fundamental porque posiciona el objeto en la escena. Rotación y escala modifican su orientación y tamaño.
  3. ¿Qué pasa si cambias el orden?
    El resultado cambia completamente. Las transformaciones no son conmutativas; por ejemplo, rotar y luego trasladar no produce el mismo resultado que trasladar y luego rotar.
  4. ¿Cómo funciona la rotación en múltiples ejes?
    Se aplican rotaciones secuenciales sobre distintos ejes. 
    Cada rotación modifica el sistema de referencia, por lo que las siguientes rotaciones se realizan sobre ejes ya transformados, generando movimientos más complejos.
  5. ¿Qué es un eje arbitrario?
    Es un eje de rotación definido por un vector cualquiera, no necesariamente alineado con los ejes X, Y o Z. Permite rotar un objeto en cualquier dirección del espacio.
*/