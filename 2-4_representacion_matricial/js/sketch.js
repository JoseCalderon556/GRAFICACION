let puntos = [
  [-50, -50, 1],
  [50, -50, 1],
  [50, 50, 1],
  [-50, 50, 1]
];

//Funcion para aplicar matriz
function aplicarM(M, p) {
  let res = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    res[i] = M[i][0]*p[0] + M[i][1]*p[1] + M[i][2]*p[2];
  }
  return res;
}

//Dibujar figura
function dibujarFigura(pts) {
  beginShape();
  for (let p of pts) {
    vertex(p[0], p[1]);
  }
  endShape(CLOSE);
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(240);

  
  // Orden Importa
  push();
  translate(200, 200);

  // traslacion-rotacion
  push();
  translate(100, 0);
  rotate(frameCount * 0.02);
  fill(255, 100, 100);
  rect(0, 0, 80, 40);
  pop();

  // rotacion-traslacion
  push();
  rotate(frameCount * 0.02);
  translate(100, 0);
  fill(100, 100, 255);
  rect(0, 0, 80, 40);
  pop();

  pop();

  // Escalamiento con matriz
  let S = [
    [2, 0, 0],
    [0, 2, 0],
    [0, 0, 1]
  ];

  let escalado = puntos.map(p => aplicarM(S, p));

  push();
  translate(500, 200);

  // original
  fill(150);
  dibujarFigura(puntos);

  // escalado
  fill(100, 255, 100);
  dibujarFigura(escalado);

  pop();

 //Rotacion sin rotate()

  let theta = frameCount * 0.02;

  let R = [
    [cos(theta), -sin(theta), 0],
    [sin(theta),  cos(theta), 0],
    [0, 0, 1]
  ];

  // Rotar alrededor de un punto (cx, cy)
  let cx = mouseX;
  let cy = mouseY;

  // Trasladar - rotar - regresar
  let T1 = [
    [1, 0, -cx],
    [0, 1, -cy],
    [0, 0, 1]
  ];

  let T2 = [
    [1, 0, cx],
    [0, 1, cy],
    [0, 0, 1]
  ];

  function aplicarCompuesta(p) {
    let p1 = aplicarM(T1, p);
    let p2 = aplicarM(R, p1);
    let p3 = aplicarM(T2, p2);
    return p3;
  }

  let rotados = puntos.map(p => aplicarCompuesta(p));

  // dibujar
  fill(255, 200, 0);
  dibujarFigura(rotados);
}

/*
  1. ¿Por qué necesitamos coordenadas homogéneas para la traslación?
    Porque permiten representar la traslación como multiplicación de matrices, igual que rotar o escalar.
  2. ¿Qué significa que la multiplicación de matrices no sea conmutativa?
    Que el orden importa: 𝐴⋅𝐵≠𝐵⋅𝐴 Cambiar el orden da resultados diferentes.
  3. ¿Qué propiedad matemática garantiza que la rotación no cambia la longitud?
    Que es una isometría.
 */