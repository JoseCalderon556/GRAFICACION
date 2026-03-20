let pts = [];
let t = 0;
let dragging = -1;

function setup(){
  createCanvas(700,400);
  pts = [
    createVector(50,200),
    createVector(150,300),
    createVector(350,80),
    createVector(550,260)
  ];
}

function draw(){
  background(245);

  // Editor interactivo

  // lineas guia
  stroke(180);
  for(let i=0;i<pts.length-1;i++){
    line(pts[i].x,pts[i].y,pts[i+1].x,pts[i+1].y);
  }

  // curva B-Spline
  stroke(0);
  strokeWeight(2);
  noFill();
  curve(
    pts[0].x,pts[0].y,
    pts[1].x,pts[1].y,
    pts[2].x,pts[2].y,
    pts[3].x,pts[3].y
  );

  // Bezier vs B-Spline
  // Bezier con mismos puntos
  stroke(255,0,0);
  bezier(
    pts[0].x,pts[0].y,
    pts[1].x,pts[1].y,
    pts[2].x,pts[2].y,
    pts[3].x,pts[3].y
  );

  // Animacion
  // punto que sigue la curva Bezier
  let x = bezierPoint(pts[0].x, pts[1].x, pts[2].x, pts[3].x, t);
  let y = bezierPoint(pts[0].y, pts[1].y, pts[2].y, pts[3].y, t);

  fill(0,150,0);
  noStroke();
  circle(x, y, 12);

  t += 0.01;
  if(t > 1) t = 0;

  // puntos control
  fill(0);
  noStroke();
  for(let i=0;i<pts.length;i++){
    circle(pts[i].x, pts[i].y, 10);
  }
}

//Interaccion
function mousePressed(){
  for(let i=0;i<pts.length;i++){
    if(dist(mouseX,mouseY,pts[i].x,pts[i].y) < 10){
      dragging = i;
    }
  }
}
function mouseDragged(){
  if(dragging != -1){
    pts[dragging].x = mouseX;
    pts[dragging].y = mouseY;
  }
}
function mouseReleased(){
  dragging = -1;
}

/*
  1. ¿Qué significa control local?
    Que un punto de control afecta solo una parte de la curva, no toda.
  2. ¿Qué diferencia hay entre continuidad C¹ y C²?
    C¹: la curva es suave (misma dirección).
    C²: la curvatura tambien es suave (cambio mas natural).
  3. ¿Por qué las B-Spline son más usadas en modelado CAD?
    Porque tienen control local, son más suaves y más fáciles de modificar sin afectar toda la forma.
*/