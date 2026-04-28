
function setup(){
  createCanvas(900,600,WEBGL);
}

function draw(){
  background(210);
  orbitControl();

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);

  // EJERCICIO 1: Piramide
  push();
  translate(-200, 0, 0);
  stroke(255);
  noFill();

  // vertices
  let v0 = createVector(0, -50, 0);   // punta
  let v1 = createVector(-50, 50, 50);
  let v2 = createVector(50, 50, 50);
  let v3 = createVector(50, 50, -50);
  let v4 = createVector(-50, 50, -50);

  // aristas
  line(v0.x, v0.y, v0.z, v1.x, v1.y, v1.z);
  line(v0.x, v0.y, v0.z, v2.x, v2.y, v2.z);
  line(v0.x, v0.y, v0.z, v3.x, v3.y, v3.z);
  line(v0.x, v0.y, v0.z, v4.x, v4.y, v4.z);

  line(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z);
  line(v2.x, v2.y, v2.z, v3.x, v3.y, v3.z);
  line(v3.x, v3.y, v3.z, v4.x, v4.y, v4.z);
  line(v4.x, v4.y, v4.z, v1.x, v1.y, v1.z);

  pop();

  // EJERCICIO 2: Cubo Wireframe
  push();
  translate(0, 0, 0);
  stroke(0, 255, 0);
  noFill();

  let s = 50;

  // vertices
  let p = [
    createVector(-s, -s, -s),
    createVector(s, -s, -s),
    createVector(s, s, -s),
    createVector(-s, s, -s),
    createVector(-s, -s, s),
    createVector(s, -s, s),
    createVector(s, s, s),
    createVector(-s, s, s)
  ];

  // aristas
  let edges = [
    [0,1],[1,2],[2,3],[3,0], // cara trasera
    [4,5],[5,6],[6,7],[7,4], // cara frontal
    [0,4],[1,5],[2,6],[3,7]  // conexiones
  ];

  for (let e of edges) {
    line(p[e[0]].x, p[e[0]].y, p[e[0]].z,
         p[e[1]].x, p[e[1]].y, p[e[1]].z);
  }

  pop();

  
  // EJERCICIO 3: Cubo con caras
  push();
  translate(200, 0, 0);
  noStroke();

  // cara frontal
  fill(255, 0, 0);
  beginShape();
  vertex(-50, -50, 50);
  vertex(50, -50, 50);
  vertex(50, 50, 50);
  vertex(-50, 50, 50);
  endShape(CLOSE);

  // cara trasera
  fill(0, 0, 255);
  beginShape();
  vertex(-50, -50, -50);
  vertex(50, -50, -50);
  vertex(50, 50, -50);
  vertex(-50, 50, -50);
  endShape(CLOSE);

  // cara superior
  fill(0, 255, 0);
  beginShape();
  vertex(-50, -50, -50);
  vertex(50, -50, -50);
  vertex(50, -50, 50);
  vertex(-50, -50, 50);
  endShape(CLOSE);

  // Cara inferior
  fill(255, 255, 75);
  beginShape();
  vertex(-50, 50, -50);
  vertex(50, 50, -50);
  vertex(50, 50, 50);
  vertex(-50, 50, 50);
  endShape(CLOSE);

  // Cara derecha
  fill(75, 255, 255);
  beginShape();
  vertex(50, -50, -50);
  vertex(50, -50, 50);
  vertex(50, 50, 50);
  vertex(50, 50, -50);
  endShape(CLOSE);

  // Cara izquierda
  fill(255, 75, 255);
  beginShape();
  vertex(-50, -50, -50);
  vertex(-50, -50, 50);
  vertex(-50, 50, 50);
  vertex(-50, 50, -50);
  endShape(CLOSE);

  pop();
 
}

/*
  1. ¿Por qué los vértices son fundamentales?
    Porque son los puntos básicos que definen la geometría de un objeto en el espacio 3D. 
    A partir de ellos se construyen las aristas y las caras; sin vértices no es posible definir la forma ni la estructura del objeto.
  2. ¿Qué diferencia hay entre aristas y caras?
    Las aristas son líneas que unen dos vértices y representan los bordes del objeto.
    Las caras son superficies formadas por tres o más vértices, que rellenan el objeto y le dan apariencia sólida.
  3. ¿Por qué un wireframe no se ve “real”?
    Porque solo muestra las aristas, sin superficies, color, iluminación ni sombras. 
    Al no haber relleno, no se percibe volumen ni material, por lo que la representación resulta incompleta.
  4. ¿Qué ventaja tiene usar caras?
    Permiten representar superficies, aplicar color, texturas e iluminación, lo que da realismo al objeto. 
    Además, hacen posible simular materiales y efectos visuales.
  5. ¿Qué crees que usa un videojuego real?
    Utiliza modelos con caras, junto con texturas, iluminación, sombreado y cámaras. 
    El wireframe solo se usa como herramienta de desarrollo o depuración, no para el resultado final.
*/