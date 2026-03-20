let P0, P1, P2, P3;
let Q0, Q1, Q2, Q3;

function setup() {
  createCanvas(700, 400);

  P0 = createVector(80, 300);
  P1 = createVector(180, 80);
  P2 = createVector(300, 80);
  P3 = createVector(350, 300);

  Q0 = P3.copy();
  Q1 = createVector(400, 350);
  Q2 = createVector(500, 200);
  Q3 = createVector(550, 300);
}

function draw() {
  background(245);

  // Desafio 1
  P1.x = mouseX;
  P1.y = mouseY;

  // Desafio 2
  Q0 = P3.copy();
  let dir = p5.Vector.sub(P3, P2);
  Q1 = p5.Vector.add(Q0, dir);

  // Curvas principales
  strokeWeight(3);
  noFill();

  stroke(0);
  bezier(P0.x,P0.y,P1.x,P1.y,P2.x,P2.y,P3.x,P3.y);

  stroke(50,100,255);
  bezier(Q0.x,Q0.y,Q1.x,Q1.y,Q2.x,Q2.y,Q3.x,Q3.y);

  // Puntos
  fill(0);
  noStroke();
  [P0,P1,P2,P3,Q0,Q1,Q2,Q3].forEach(p => circle(p.x, p.y, 8));

  // palabra mola
  stroke(0);
  strokeWeight(2);
  noFill();

  // m
  bezier(80,120, 80,60, 120,60, 120,120);
  bezier(120,120, 120,90, 150,90, 150,120);
  // o
  bezier(170,100, 170,60, 220,60, 220,100);
  bezier(220,100, 220,140, 170,140, 170,100);
  // l
  bezier(250,60, 250,140, 270,140, 270,140);
  // a
  bezier(300,120, 320,60, 360,60, 380,120);
  bezier(320,100, 340,90, 350,90, 370,100);
}

/*
  1. ¿Por qué la curva siempre está dentro del polígono convexo?
    Porque la curva Bézier es una combinación convexa de sus puntos de control.
  2. ¿Qué representa geométricamente la derivada en t=0? 
    La derivada en t=0 es la dirección inicial de la curva.
  3. ¿Qué ocurre si intercambias P1 y P2?
    La curva cambia de forma.
*/